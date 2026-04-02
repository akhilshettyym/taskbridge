import Header from "../../components/Basics/Header";
import SuperAdminTotalCount from "../../components/SuperAdmin/SuperAdminTotalCount";
import SuperAdminTasksDashboard from "../../components/SuperAdmin/SuperAdminTasksDashboard";
import SuperAdminControlledControlPanel from "../../components/SuperAdmin/SuperAdminControlledControlPanel";

const SuperAdminTasksDashboardPage = () => {

  return (
    <div className="h-screen w-full p-10">
      <Header />
      <SuperAdminTotalCount />
      <SuperAdminControlledControlPanel />
      <SuperAdminTasksDashboard />
    </div>
  )
}

export default SuperAdminTasksDashboardPage;