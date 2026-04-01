import { useState } from "react";
import useSuperAdminGetOrgSpecificOrganizationDetails from "./useSuperAdminGetOrgSpecificOrganizationDetails";
import useSuperAdminGetOrgSpecificEmployeeDetails from "./useSuperAdminGetOrgSpecificEmployeeDetails";

const useSuperAdminAdminDashboard = () => {

    const orgId = localStorage.getItem("orgId");

    const [activeTab, setActiveTab] = useState("add-more-admins");

    const { fetchSpecificOrganization } = useSuperAdminGetOrgSpecificOrganizationDetails({ orgId });
    const { orgSpecificEmployees, fetchOrgSpecificEmployees } = useSuperAdminGetOrgSpecificEmployeeDetails({ orgId });

    const admins = orgSpecificEmployees?.filter((emp) => emp.role === "ADMIN") || [];

    return { orgId, activeTab, setActiveTab, fetchSpecificOrganization, orgSpecificEmployees, fetchOrgSpecificEmployees, admins };
}

export default useSuperAdminAdminDashboard;