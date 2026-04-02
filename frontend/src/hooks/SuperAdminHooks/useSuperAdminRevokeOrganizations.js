import { useState } from "react";
import toast from "react-hot-toast";
import { revokeOrganization } from "../../api/superadmin";
import useAllEmployeeDetails from "../../utils/useAllEmployeeDetails";
import useAllOrganizationDetails from "../../utils/useAllOrganizationDetails";

const useSuperAdminRevokeOrganizations = () => {

    const [loadingId, setLoadingId] = useState(null);

    const { allOrganization, fetchAllOrganization } = useAllOrganizationDetails();
    const { allEmployees, fetchAllEmployees } = useAllEmployeeDetails();

    const activeOrganizations = allOrganization?.filter(org => org?.status === "ACTIVE") || [];

    const getCountryName = (code) => {
        const countryMap = {
            IN: "INDIA",
            US: "UNITED STATES",
            UK: "UNITED KINGDOM",
            CA: "CANADA"
        };

        return countryMap[code?.toUpperCase()] || code;
    };

    const handleRevokeOrgs = async (orgId) => {
        try {
            setLoadingId(orgId);

            const response = await revokeOrganization(orgId);
            toast.success(response?.message || "Organization revoked successfully");

            fetchAllOrganization();

        } catch (error) {
            console.error(error);
            toast.error(error?.response?.data?.message || "Failed to revoke organization");

        } finally {
            setLoadingId(null);
        }
    };

    return { loadingId, setLoadingId, allOrganization, fetchAllOrganization, allEmployees, fetchAllEmployees, activeOrganizations, getCountryName, handleRevokeOrgs };
}

export default useSuperAdminRevokeOrganizations;