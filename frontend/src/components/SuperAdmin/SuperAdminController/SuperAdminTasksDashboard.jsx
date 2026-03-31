import { useEffect, useState } from "react";
import useSuperAdminGetOrgSpecificEmployeeDetails from "../../../hooks/SuperAdminHooks/useSuperAdminGetOrgSpecificEmployeeDetails";
import useSuperAdminGetOrgSpecificOrganizationDetails from "../../../hooks/SuperAdminHooks/useSuperAdminGetOrgSpecificOrganizationDetails";
import SuperAdminCreateTaskForm from "./SuperAdminControlledComponents/SuperAdminCreateTaskForm";

const SuperAdminTasksDashboard = () => {

  const orgId = localStorage.getItem("orgId");

  const [activeTab, setActiveTab] = useState("create-tasks");

  const { specificOrganization, fetchSpecificOrganization } = useSuperAdminGetOrgSpecificOrganizationDetails({ orgId });
  const { orgSpecificEmployees, fetchOrgSpecificEmployees } = useSuperAdminGetOrgSpecificEmployeeDetails({ orgId });

  const admins = orgSpecificEmployees?.filter((emp) => emp.role === "ADMIN") || [];
  const employees = orgSpecificEmployees?.filter((emp) => emp.role === "EMPLOYEE") || [];
  const createdByAdmin = admins?.find((admin) => admin._id === specificOrganization?.createdBy);

  useEffect(() => {
    if (orgId) {
      fetchSpecificOrganization();
      fetchOrgSpecificEmployees();
    }
  }, [orgId]);

  return (
    <div className="pb-10">

      <div className="flex gap-4 mt-5">
        <button onClick={() => setActiveTab("create-tasks")} className={`px-5 py-2 rounded-md uppercase text-sm font-semibold transition
          ${activeTab === "create-tasks"
            ? "bg-[#FFDAB3] text-[#1B211A]"
            : "text-[#FFDAB3] border border-[#FFDAB3]/40 hover:bg-[#FFDAB3]/10"
          }`}>
          Create Tasks
        </button>

        <button onClick={() => setActiveTab("tasks-details")} className={`px-5 py-2 rounded-md uppercase text-sm font-semibold transition
          ${activeTab === "tasks-details"
            ? "bg-[#FFDAB3] text-[#1B211A]"
            : "text-[#FFDAB3] border border-[#FFDAB3]/40 hover:bg-[#FFDAB3]/10"
          }`}>
          Tasks Details
        </button>
      </div>

      <div className="bg-[#1B211A] rounded-2xl p-4 border border-[#FFDAB3]/25 mt-5 pb-5">

        {activeTab === "create-tasks" && (
          <SuperAdminCreateTaskForm />
        )}

        {activeTab === "tasks-details" && (
          <></>
        )}

      </div>
    </div>
  )
}

export default SuperAdminTasksDashboard;