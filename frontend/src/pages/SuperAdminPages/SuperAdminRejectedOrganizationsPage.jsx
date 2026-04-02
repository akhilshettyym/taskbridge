import Header from "../../components/Basics/Header";
import SuperAdminTotalCount from "../../components/SuperAdmin/SuperAdminTotalCount";
import SuperAdminControlPanel from "../../components/SuperAdmin/SuperAdminControlPanel";
import SuperAdminOrganizationStatus from "../../components/SuperAdmin/SuperAdminOrganizationStatus";
import SuperAdminRejectedOrganizations from "../../components/SuperAdmin/SuperAdminRejectedOrganizations";

const SuperAdminRejectedOrganizationsPage = () => {

  return (
    <div className="h-screen w-full p-10">
      <Header />
      <SuperAdminTotalCount />
      <SuperAdminControlPanel />
      <SuperAdminOrganizationStatus />
      <SuperAdminRejectedOrganizations />
    </div>
  );
};

export default SuperAdminRejectedOrganizationsPage;