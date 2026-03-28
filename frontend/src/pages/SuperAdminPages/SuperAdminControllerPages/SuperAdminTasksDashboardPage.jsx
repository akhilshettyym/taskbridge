import SuperAdminControlledControlPanel from "../../../components/SuperAdmin/SuperAdminController/SuperAdminControlledComponents/SuperAdminControlledControlPanel";
import SuperAdminTotalCount from "../../../components/SuperAdmin/SuperAdminTotalCount";
import { Header } from "../../../constants/imports";

const SuperAdminTasksDashboardPage = () => {

  return (
    <div className="h-screen w-full p-10">
      <Header />
      <SuperAdminTotalCount />
      <SuperAdminControlledControlPanel />
    </div>
  )
}

export default SuperAdminTasksDashboardPage;