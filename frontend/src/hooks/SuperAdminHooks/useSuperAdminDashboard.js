import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAllTasksDetails from "../../utils/useAllTasksDetails";
import useAllEmployeeDetails from "../../utils/useAllEmployeeDetails";
import useAllOrganizationDetails from "../../utils/useAllOrganizationDetails";

const useSuperAdminDashboard = () => {

    const navigate = useNavigate();

    const [selectedOrg, setSelectedOrg] = useState(null);
    const [enterOrg, setEnterOrg] = useState(null);

    const { allOrganization, fetchAllOrganization } = useAllOrganizationDetails();
    const { allEmployees, fetchAllEmployees } = useAllEmployeeDetails();
    const { allTasks, fetchAllTasks } = useAllTasksDetails();

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

    const handleEnterOrg = () => {
        if (enterOrg) {
            localStorage.setItem("orgId", enterOrg);
            navigate("/superadmin/control/organization-dashboard");
        }
    };

    return { navigate, selectedOrg, setSelectedOrg, enterOrg, setEnterOrg, allOrganization, fetchAllOrganization, allEmployees, fetchAllEmployees, allTasks, fetchAllTasks, activeOrganizations, getCountryName, handleEnterOrg };
}

export default useSuperAdminDashboard;