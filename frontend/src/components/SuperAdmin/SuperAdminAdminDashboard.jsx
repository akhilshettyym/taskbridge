import { useEffect, useState } from "react";
import SuperAdminAdminDetails from "./SuperAdminAdminDetails";
import SuperAdminAddMoreAdmins from "./SuperAdminAddMoreAdmins";
import useSuperAdminGetOrgSpecificEmployeeDetails from "../../hooks/SuperAdminHooks/useSuperAdminGetOrgSpecificEmployeeDetails";
import useSuperAdminGetOrgSpecificOrganizationDetails from "../../hooks/SuperAdminHooks/useSuperAdminGetOrgSpecificOrganizationDetails";

const SuperAdminAdminDashboard = () => {

  const orgId = localStorage.getItem("orgId");

  const [activeTab, setActiveTab] = useState("add-more-admins");

  const { fetchSpecificOrganization } = useSuperAdminGetOrgSpecificOrganizationDetails({ orgId });
  const { orgSpecificEmployees, fetchOrgSpecificEmployees } = useSuperAdminGetOrgSpecificEmployeeDetails({ orgId });

  const admins = orgSpecificEmployees?.filter((emp) => emp.role === "ADMIN") || [];

  useEffect(() => {
    if (orgId) {
      fetchSpecificOrganization();
      fetchOrgSpecificEmployees();
    }
  }, [orgId]);

  return (
    <div className="pb-10">

      <div className="flex gap-4 mt-5">
        <button onClick={() => setActiveTab("add-more-admins")} className={`px-5 py-2 rounded-md uppercase text-sm font-semibold transition
          ${activeTab === "add-more-admins"
            ? "bg-[#FFDAB3] text-[#1B211A]"
            : "text-[#FFDAB3] border border-[#FFDAB3]/40 hover:bg-[#FFDAB3]/10"
          }`}>
          Add More Admins
        </button>

        <button onClick={() => setActiveTab("admin-details")} className={`px-5 py-2 rounded-md uppercase text-sm font-semibold transition
          ${activeTab === "admin-details"
            ? "bg-[#FFDAB3] text-[#1B211A]"
            : "text-[#FFDAB3] border border-[#FFDAB3]/40 hover:bg-[#FFDAB3]/10"
          }`}>
          Admin Details
        </button>
      </div>

      <div className="bg-[#1B211A] rounded-2xl p-4 border border-[#FFDAB3]/25 mt-5 pb-5">

        {activeTab === "add-more-admins" && (
          <SuperAdminAddMoreAdmins refreshAdmins={fetchOrgSpecificEmployees} onAdded={() => setActiveTab("admin-details")} />
        )}

        {activeTab === "admin-details" && (
          <SuperAdminAdminDetails admins={admins} refreshAdmins={fetchOrgSpecificEmployees} />
        )}

      </div>
    </div>
  );
};

export default SuperAdminAdminDashboard;