import { useState } from "react";
import useSuperAdminGetOrgSpecificTasksDetails from "../../hooks/SuperAdminHooks/useSuperAdminGetOrgSpecificTasksDetails";
import useSuperAdminGetOrgSpecificEmployeeDetails from "../../hooks/SuperAdminHooks/useSuperAdminGetOrgSpecificEmployeeDetails";
import useSuperAdminGetOrgSpecificOrganizationDetails from "../../hooks/SuperAdminHooks/useSuperAdminGetOrgSpecificOrganizationDetails";

const useSuperAdminTasksDashboard = () => {

    const orgId = localStorage.getItem("orgId");

    const [activeTab, setActiveTab] = useState("create-tasks");
    const [editingTask, setEditingTask] = useState(null);

    const { fetchSpecificOrganization } = useSuperAdminGetOrgSpecificOrganizationDetails({ orgId });
    const { orgSpecificEmployees, fetchOrgSpecificEmployees } = useSuperAdminGetOrgSpecificEmployeeDetails({ orgId });
    const { orgSpecificTasks, fetchOrgSpecificTasks, setOrgSpecificTasks } = useSuperAdminGetOrgSpecificTasksDetails({ orgId });

    const getEmployeeName = (assignedTo) => {
        if (!assignedTo) return "Unassigned";

        if (typeof assignedTo === "object") {
            return `${assignedTo.firstName || ""} ${assignedTo.lastName || ""}`.trim();
        }

        const employee = orgSpecificEmployees?.find(
            (emp) => (emp._id || emp.id) === assignedTo
        );

        if (!employee) return "Unassigned";

        return `${employee.firstName || ""} ${employee.lastName || ""}`.trim();
    };

    return { orgId, activeTab, setActiveTab, editingTask, setEditingTask, fetchSpecificOrganization, orgSpecificEmployees, fetchOrgSpecificEmployees, orgSpecificTasks, fetchOrgSpecificTasks, setOrgSpecificTasks, getEmployeeName };
}

export default useSuperAdminTasksDashboard;