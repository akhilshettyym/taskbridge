import { useEffect, useState } from "react";
import AdminAddEmployeeForm from "../Admin/AdminAddEmployeeForm";
import SuperAdminEmployeeDetails from "../SuperAdmin/SuperAdminEmployeeDetails";
import useSuperAdminGetOrgSpecificEmployeeDetails from "../../hooks/SuperAdminHooks/useSuperAdminGetOrgSpecificEmployeeDetails";
import useSuperAdminGetOrgSpecificOrganizationDetails from "../../hooks/SuperAdminHooks/useSuperAdminGetOrgSpecificOrganizationDetails";

const SuperAdminEmployeeDashboard = () => {

  const orgId = localStorage.getItem("orgId");

  const [activeTab, setActiveTab] = useState("add-more-employees");

  const { fetchSpecificOrganization } = useSuperAdminGetOrgSpecificOrganizationDetails({ orgId });
  const { orgSpecificEmployees, fetchOrgSpecificEmployees } = useSuperAdminGetOrgSpecificEmployeeDetails({ orgId });

  const employees = orgSpecificEmployees?.filter((emp) => emp.role === "EMPLOYEE") || [];

  useEffect(() => {
    if (orgId) {
      fetchSpecificOrganization();
      fetchOrgSpecificEmployees();
    }
  }, [orgId]);

  return (
    <div className="pb-10">

      <div className="flex gap-4 mt-5">
        <button onClick={() => setActiveTab("add-more-employees")} className={`px-5 py-2 rounded-md uppercase text-sm font-semibold transition
          ${activeTab === "add-more-employees"
            ? "bg-[#FFDAB3] text-[#1B211A]"
            : "text-[#FFDAB3] border border-[#FFDAB3]/40 hover:bg-[#FFDAB3]/10"
          }`}>
          Add More Employees
        </button>

        <button onClick={() => setActiveTab("employee-details")} className={`px-5 py-2 rounded-md uppercase text-sm font-semibold transition
          ${activeTab === "employee-details"
            ? "bg-[#FFDAB3] text-[#1B211A]"
            : "text-[#FFDAB3] border border-[#FFDAB3]/40 hover:bg-[#FFDAB3]/10"
          }`}>
          Employee Details
        </button>
      </div>

      <div className="bg-[#1B211A] rounded-2xl p-4 border border-[#FFDAB3]/25 mt-5 pb-5">

        {activeTab === "add-more-employees" && (
          <AdminAddEmployeeForm refreshEmployees={fetchOrgSpecificEmployees} />
        )}

        {activeTab === "employee-details" && (
          <SuperAdminEmployeeDetails employees={employees} refreshEmployees={fetchOrgSpecificEmployees} />
        )}

      </div>
    </div>
  )
}

export default SuperAdminEmployeeDashboard;