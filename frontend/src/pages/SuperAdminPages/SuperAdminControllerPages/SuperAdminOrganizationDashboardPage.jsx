import SuperAdminControlledControlPanel from "../../../components/SuperAdmin/SuperAdminController/SuperAdminControlledComponents/SuperAdminControlledControlPanel";
import SuperAdminOrganizationDashboard from "../../../components/SuperAdmin/SuperAdminController/SuperAdminOrganizationDashboard";
import SuperAdminTotalCount from "../../../components/SuperAdmin/SuperAdminTotalCount";
import { Header } from "../../../constants/imports";

const SuperAdminOrganizationDashboardPage = () => {

  return (
    <div className="h-screen w-full p-10">
      <Header />
      <SuperAdminTotalCount />
      <SuperAdminControlledControlPanel />
      <SuperAdminOrganizationDashboard />
    </div>
  )
}

export default SuperAdminOrganizationDashboardPage;