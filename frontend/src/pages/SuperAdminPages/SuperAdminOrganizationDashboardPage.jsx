import { Header } from "../../constants/imports";
import SuperAdminTotalCount from "../../components/SuperAdmin/SuperAdminTotalCount";
import SuperAdminControlledControlPanel from "../../components/SuperAdmin/SuperAdminControlledControlPanel";
import SuperAdminOrganizationDashboard from "../../components/SuperAdmin/SuperAdminOrganizationDashboard";

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