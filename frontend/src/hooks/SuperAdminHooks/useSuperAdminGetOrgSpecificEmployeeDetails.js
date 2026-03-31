import toast from "react-hot-toast";
import { useCallback, useState } from "react";
import { getOrganizationSpecificEmployeeDetails } from "../../api/superadmin";

let employeeCache = {};

const useSuperAdminGetOrgSpecificEmployeeDetails = ({ orgId }) => {

    const [orgSpecificEmployees, setOrgSpecificEmployees] = useState(
        orgId ? employeeCache[orgId] || null : null
    );

    const fetchOrgSpecificEmployees = useCallback(async (force = false) => {

        if (!orgId) return;

        if (employeeCache[orgId] && !force) {
            setOrgSpecificEmployees(employeeCache[orgId]);
            return;
        }

        try {
            const orgResponse = await getOrganizationSpecificEmployeeDetails(orgId);

            employeeCache[orgId] = orgResponse?.employees || null;

            setOrgSpecificEmployees(employeeCache[orgId]);

        } catch (error) {
            console.error("Failed to fetch employee details", error);
            toast.error("Could not fetch employees");
        }

    }, [orgId]);

    return { orgSpecificEmployees, setOrgSpecificEmployees, fetchOrgSpecificEmployees };
};

export default useSuperAdminGetOrgSpecificEmployeeDetails;