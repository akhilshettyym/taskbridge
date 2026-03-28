import { useEffect, useState } from "react";
import useSuperAdminGetOrgSpecificEmployeeDetails from "../../../hooks/SuperAdminHooks/useSuperAdminGetOrgSpecificEmployeeDetails";
import useSuperAdminGetOrgSpecificOrganizationDetails from "../../../hooks/SuperAdminHooks/useSuperAdminGetOrgSpecificOrganizationDetails";

const SuperAdminAdminDashboard = () => {

  const orgId = localStorage.getItem("orgId");

  const [activeTab, setActiveTab] = useState("admin-details");

  const { specificOrganization, fetchSpecificOrganization } = useSuperAdminGetOrgSpecificOrganizationDetails({ orgId });
  const { orgSpecificEmployees, fetchOrgSpecificEmployees } = useSuperAdminGetOrgSpecificEmployeeDetails({ orgId });

  const admins = orgSpecificEmployees?.filter((emp) => emp.role === "ADMIN") || [];
  const employees = orgSpecificEmployees?.filter((emp) => emp.role === "EMPLOYEE") || [];
  const createdByAdmin = admins?.find((admin) => admin._id === specificOrganization?.createdBy);

  console.log("admins", admins)

  useEffect(() => {
    if (orgId) {
      fetchSpecificOrganization();
      fetchOrgSpecificEmployees();
    }
  }, [orgId]);

  return (
    <div className="pb-10">

      <div className="flex gap-4 mt-5">

        {/* Existing */}
        <button onClick={() => setActiveTab("admin-details")} className={`px-5 py-2 rounded-md uppercase text-sm font-semibold transition
          ${activeTab === "admin-details"
            ? "bg-[#FFDAB3] text-[#1B211A]"
            : "text-[#FFDAB3] border border-[#FFDAB3]/40 hover:bg-[#FFDAB3]/10"
          }`}>
          Admin Details
        </button>

        {/* Existing */}
        <button onClick={() => setActiveTab("add-more-admins")} className={`px-5 py-2 rounded-md uppercase text-sm font-semibold transition
          ${activeTab === "add-more-admins"
            ? "bg-[#FFDAB3] text-[#1B211A]"
            : "text-[#FFDAB3] border border-[#FFDAB3]/40 hover:bg-[#FFDAB3]/10"
          }`}>
          Add More Admins
        </button>

        {/* Existing  */}
        <button onClick={() => setActiveTab("update-admins")} className={`px-5 py-2 rounded-md uppercase text-sm font-semibold transition
          ${activeTab === "update-admins"
            ? "bg-[#FFDAB3] text-[#1B211A]"
            : "text-[#FFDAB3] border border-[#FFDAB3]/40 hover:bg-[#FFDAB3]/10"
          }`}>
          Update Admin Details
        </button>

        {/* deactivate / reactivate */}
        <button onClick={() => setActiveTab("admins-control")} className={`px-5 py-2 rounded-md uppercase text-sm font-semibold transition
          ${activeTab === "admins-control"
            ? "bg-[#FFDAB3] text-[#1B211A]"
            : "text-[#FFDAB3] border border-[#FFDAB3]/40 hover:bg-[#FFDAB3]/10"
          }`}>
          Admin Controls
        </button>

        {/* Delete admin or change admin to employee */}
        <button onClick={() => setActiveTab("remove-admin")} className={`px-5 py-2 rounded-md uppercase text-sm font-semibold transition
          ${activeTab === "remove-admin"
            ? "bg-[#FFDAB3] text-[#1B211A]"
            : "text-[#FFDAB3] border border-[#FFDAB3]/40 hover:bg-[#FFDAB3]/10"
          }`}>
          Remove Admin
        </button>
      </div>

      <div className="bg-[#1B211A] rounded-2xl p-4 border border-[#FFDAB3]/25 mt-5 pb-5">

        {activeTab === "admin-details" && (
          <></>
        )}

        {activeTab === "add-more-admins" && (
          <></>
        )}

        {activeTab === "update-admins" && (
          <></>
        )}

        {activeTab === "admins-control" && (
          <></>
        )}

        {activeTab === "remove-admin" && (
          <></>
        )}

      </div>
    </div>
  );
};

export default SuperAdminAdminDashboard;