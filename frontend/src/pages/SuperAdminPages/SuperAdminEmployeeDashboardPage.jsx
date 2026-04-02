import Header from "../../components/Basics/Header";
import SuperAdminTotalCount from "../../components/SuperAdmin/SuperAdminTotalCount";
import SuperAdminEmployeeDashboard from "../../components/SuperAdmin/SuperAdminEmployeeDashboard";
import SuperAdminControlledControlPanel from "../../components/SuperAdmin/SuperAdminControlledControlPanel";

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