import Header from "../../components/Basics/Header";
import SuperAdminTotalCount from "../../components/SuperAdmin/SuperAdminTotalCount";
import SuperAdminControlPanel from "../../components/SuperAdmin/SuperAdminControlPanel";
import SuperAdminOrganizationStatus from "../../components/SuperAdmin/SuperAdminOrganizationStatus";
import SuperAdminApproveOrganizations from "../../components/SuperAdmin/SuperAdminApproveOrganizations";

const SuperAdminApproveOrganizationsPage = () => {

  return (
    <div className="h-screen w-full p-10">
      <Header />
      <SuperAdminTotalCount />
      <SuperAdminControlPanel />
      <SuperAdminOrganizationStatus />
      <SuperAdminApproveOrganizations />
    </div>
  );
};

export default SuperAdminApproveOrganizationsPage;