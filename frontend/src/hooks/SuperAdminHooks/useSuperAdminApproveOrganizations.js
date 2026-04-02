import { useState } from "react";
import { toast } from "../../constants/imports";
import { approveOrganization, rejectOrganization } from "../../api/superadmin";
import useAllEmployeeDetails from "../../utils/useAllEmployeeDetails";
import useAllOrganizationDetails from "../../utils/useAllOrganizationDetails";

const useSuperAdminApproveOrganizations = () => {

    const [loadingId, setLoadingId] = useState(null);

    const { allEmployees, fetchAllEmployees } = useAllEmployeeDetails();
    const { allOrganization, fetchAllOrganization } = useAllOrganizationDetails();

    const pendingOrganizations = allOrganization?.filter(org => org?.status === "PENDING") || [];

    const getCountryName = (code) => {
        const countryMap = {
            IN: "INDIA",
            US: "UNITED STATES",
            UK: "UNITED KINGDOM",
            CA: "CANADA"
        };

        return countryMap[code?.toUpperCase()] || code;
    };

    const handleApprove = async (orgId) => {
        try {
            setLoadingId(orgId);
            const response = await approveOrganization(orgId);

            toast.success(
                response?.message || "Organization approved successfully"
            );

            fetchAllOrganization();

        } catch (error) {
            console.error(error);

            toast.error(
                error?.response?.data?.message ||
                "Failed to approve organization"
            );

        } finally {
            setLoadingId(null);
        }
    };

    const handleReject = async (orgId) => {
        try {
            setLoadingId(orgId);
            const response = await rejectOrganization(orgId);

            toast.success(
                response?.message || "Organization rejected successfully"
            );

            fetchAllOrganization();

        } catch (error) {
            console.error(error);

            toast.error(
                error?.response?.data?.message ||
                "Failed to reject organization"
            );

        } finally {
            setLoadingId(null);
        }
    };

    return { loadingId, setLoadingId, allEmployees, fetchAllEmployees, allOrganization, fetchAllOrganization, pendingOrganizations, getCountryName, handleApprove, handleReject };
}

export default useSuperAdminApproveOrganizations;