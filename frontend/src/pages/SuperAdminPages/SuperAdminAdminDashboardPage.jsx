import { Header } from "../../constants/imports";
import SuperAdminTotalCount from "../../components/SuperAdmin/SuperAdminTotalCount";
import SuperAdminAdminDashboard from "../../components/SuperAdmin/SuperAdminAdminDashboard";
import SuperAdminControlledControlPanel from "../../components/SuperAdmin/SuperAdminControlledControlPanel";

const SuperAdminAdminDashboardPage = () => {

  return (
    <div className="h-screen w-full p-10">
      <Header />
      <SuperAdminTotalCount />
      <SuperAdminControlledControlPanel />
      <SuperAdminAdminDashboard />
    </div>
  )
}

export default SuperAdminAdminDashboardPage;