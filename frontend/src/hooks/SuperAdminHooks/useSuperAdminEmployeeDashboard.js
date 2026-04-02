import { useState } from "react";
import useSuperAdminGetOrgSpecificOrganizationDetails from "./useSuperAdminGetOrgSpecificOrganizationDetails";
import useSuperAdminGetOrgSpecificEmployeeDetails from "./useSuperAdminGetOrgSpecificEmployeeDetails";

const useSuperAdminEmployeeDashboard = () => {

    const orgId = localStorage.getItem("orgId");

    const [activeTab, setActiveTab] = useState("add-more-employees");

    const { fetchSpecificOrganization } = useSuperAdminGetOrgSpecificOrganizationDetails({ orgId });
    const { orgSpecificEmployees, fetchOrgSpecificEmployees } = useSuperAdminGetOrgSpecificEmployeeDetails({ orgId });

    const employees = orgSpecificEmployees?.filter((emp) => emp.role === "EMPLOYEE") || [];

    return { orgId, activeTab, setActiveTab, fetchSpecificOrganization, orgSpecificEmployees, fetchOrgSpecificEmployees, employees };
}

export default useSuperAdminEmployeeDashboard;