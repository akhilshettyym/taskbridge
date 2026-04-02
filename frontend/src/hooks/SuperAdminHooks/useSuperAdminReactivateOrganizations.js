import { useState } from "react";
import { toast } from "../../constants/imports";
import { reActivateOrganization } from "../../api/superadmin";
import useAllOrganizationDetails from "../../utils/useAllOrganizationDetails";
import useAllEmployeeDetails from "../../utils/useAllEmployeeDetails";

const useSuperAdminReactivateOrganizations = () => {

    const [loadingId, setLoadingId] = useState(null);

    const { allOrganization, fetchAllOrganization } = useAllOrganizationDetails();
    const { allEmployees, fetchAllEmployees } = useAllEmployeeDetails();

    const revokedOrganizations = allOrganization?.filter(org => org?.status === "REVOKED") || [];

    const getCountryName = (code) => {
        const countryMap = {
            IN: "INDIA",
            US: "UNITED STATES",
            UK: "UNITED KINGDOM",
            CA: "CANADA"
        };

        return countryMap[code?.toUpperCase()] || code;
    };

    const handleReactivateOrgs = async (orgId) => {
        try {
            setLoadingId(orgId);

            const response = await reActivateOrganization(orgId);
            toast.success(response?.message || "Organization reactivated successfully");

            fetchAllOrganization();

        } catch (error) {
            console.error(error);
            toast.error(error?.response?.data?.message || "Failed to reactivate organization");

        } finally {
            setLoadingId(null);
        }
    };

    return { allOrganization, fetchAllOrganization, allEmployees, fetchAllEmployees, loadingId, setLoadingId, revokedOrganizations, getCountryName, handleReactivateOrgs };
}

export default useSuperAdminReactivateOrganizations;