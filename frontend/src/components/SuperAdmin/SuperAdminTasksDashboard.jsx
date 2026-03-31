import { useEffect, useState } from "react";
import SuperAdminCreateTaskForm from "./SuperAdminCreateTaskForm";
import AdminTaskStatusCreatedTasks from "../Admin/AdminTaskStatusCreatedTasks";
import useSuperAdminGetOrgSpecificTasksDetails from "../../hooks/SuperAdminHooks/useSuperAdminGetOrgSpecificTasksDetails";
import useSuperAdminGetOrgSpecificEmployeeDetails from "../../hooks/SuperAdminHooks/useSuperAdminGetOrgSpecificEmployeeDetails";
import useSuperAdminGetOrgSpecificOrganizationDetails from "../../hooks/SuperAdminHooks/useSuperAdminGetOrgSpecificOrganizationDetails";

const SuperAdminTasksDashboard = () => {

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

  useEffect(() => {
    if (!orgId) return;
    fetchSpecificOrganization();
    fetchOrgSpecificEmployees();
    fetchOrgSpecificTasks();

  }, [orgId]);

  return (
    <div className="pb-10">

      <div className="flex gap-4 mt-5">
        <button onClick={() => setActiveTab("create-tasks")} className={`px-5 py-2 rounded-md uppercase text-sm font-semibold transition
          ${activeTab === "create-tasks"
            ? "bg-[#FFDAB3] text-[#1B211A]"
            : "text-[#FFDAB3] border border-[#FFDAB3]/40 hover:bg-[#FFDAB3]/10"
          }`} >
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
          <AdminTaskStatusCreatedTasks refreshEmployeesData={fetchOrgSpecificEmployees} status={"new"} allCreatedTasks={orgSpecificTasks || []} fetchTasksDetails={fetchOrgSpecificTasks} fetchEmployees={fetchOrgSpecificEmployees} getEmployeeName={getEmployeeName} editingTask={editingTask} setEditingTask={setEditingTask} setTasks={setOrgSpecificTasks} />
        )}

    </div>
      </div>
  );
};

export default SuperAdminTasksDashboard;