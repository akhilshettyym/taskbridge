import { useState } from "react";
import { toast } from "../../constants/imports";
import { deleteRejectedOrganization } from "../../api/superadmin";
import useAllEmployeeDetails from "../../utils/useAllEmployeeDetails";
import useAllOrganizationDetails from "../../utils/useAllOrganizationDetails";

const useSuperAdminRejectedOrganizations = () => {

    const [loadingId, setLoadingId] = useState(null);

    const { allOrganization, fetchAllOrganization } = useAllOrganizationDetails();
    const { allEmployees, fetchAllEmployees } = useAllEmployeeDetails();

    const rejectedOrganizations = allOrganization?.filter(org => org?.status === "REJECTED") || [];

    const getCountryName = (code) => {
        const countryMap = {
            IN: "INDIA",
            US: "UNITED STATES",
            UK: "UNITED KINGDOM",
            CA: "CANADA"
        };

        return countryMap[code?.toUpperCase()] || code;
    };

    const handleDeleteRejectedOrgs = async (orgId) => {
        try {
            setLoadingId(orgId);

            const response = await deleteRejectedOrganization({ orgId });
            toast.success(response?.message || "Organization deleted successfully");
            await fetchAllOrganization();

        } catch (error) {
            console.error(error);
            toast.error(error?.response?.data?.message || "Failed to delete organization");

        } finally {
            setLoadingId(null);
        }
    };

    return { loadingId, setLoadingId, allOrganization, fetchAllOrganization, allEmployees, fetchAllEmployees, rejectedOrganizations, getCountryName, handleDeleteRejectedOrgs };
}

export default useSuperAdminRejectedOrganizations;