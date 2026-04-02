import { useState } from "react";
import useSuperAdminGetOrgSpecificOrganizationDetails from "../../hooks/SuperAdminHooks/useSuperAdminGetOrgSpecificOrganizationDetails";
import useSuperAdminGetOrgSpecificEmployeeDetails from "../../hooks/SuperAdminHooks/useSuperAdminGetOrgSpecificEmployeeDetails";

const useSuperAdminOrganizationDashboard = () => {

    const orgId = localStorage.getItem("orgId");

    const [activeTab, setActiveTab] = useState("organization-details");

    const { specificOrganization, fetchSpecificOrganization } = useSuperAdminGetOrgSpecificOrganizationDetails({ orgId });
    const { orgSpecificEmployees, fetchOrgSpecificEmployees } = useSuperAdminGetOrgSpecificEmployeeDetails({ orgId });

    const admins = orgSpecificEmployees?.filter((emp) => emp.role === "ADMIN") || [];
    const employees = orgSpecificEmployees?.filter((emp) => emp.role === "EMPLOYEE") || [];
    const createdByAdmin = admins?.find((admin) => admin._id === specificOrganization?.createdBy);

    return { orgId, activeTab, setActiveTab, specificOrganization, fetchSpecificOrganization, orgSpecificEmployees, fetchOrgSpecificEmployees, admins, employees, createdByAdmin };
}

export default useSuperAdminOrganizationDashboard;