import SuperAdminControlledControlPanel from "../../../components/SuperAdmin/SuperAdminController/SuperAdminControlledComponents/SuperAdminControlledControlPanel";
import SuperAdminEmployeeDashboard from "../../../components/SuperAdmin/SuperAdminController/SuperAdminEmployeeDashboard";
import SuperAdminTotalCount from "../../../components/SuperAdmin/SuperAdminTotalCount";
import { Header } from "../../../constants/imports";

const SuperAdminEmployeeDashboardPage = () => {

  return (
    <div className="h-screen w-full p-10">
      <Header />
      <SuperAdminTotalCount />
      <SuperAdminControlledControlPanel />
      <SuperAdminEmployeeDashboard />
    </div>
  )
}

export default SuperAdminEmployeeDashboardPage;