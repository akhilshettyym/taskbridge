import Header from "../../components/Basics/Header";
import SuperAdminTotalCount from "../../components/SuperAdmin/SuperAdminTotalCount";
import SuperAdminControlPanel from "../../components/SuperAdmin/SuperAdminControlPanel";
import SuperAdminOrganizationStatus from "../../components/SuperAdmin/SuperAdminOrganizationStatus";
import SuperAdminRevokeOrganizations from "../../components/SuperAdmin/SuperAdminRevokeOrganizations";

const SuperAdminRevokeOrganizationsPage = () => {

  return (
    <div className="h-screen w-full p-10">
      <Header />
      <SuperAdminTotalCount />
      <SuperAdminControlPanel />
      <SuperAdminOrganizationStatus />
      <SuperAdminRevokeOrganizations />
    </div>
  );
};

export default SuperAdminRevokeOrganizationsPage;