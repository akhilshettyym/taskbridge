import Header from "../../components/Basics/Header";
import SuperAdminDashboard from "../../components/SuperAdmin/SuperAdminDashboard";
import SuperAdminTotalCount from "../../components/SuperAdmin/SuperAdminTotalCount";
import SuperAdminControlPanel from "../../components/SuperAdmin/SuperAdminControlPanel";
import SuperAdminOrganizationStatus from "../../components/SuperAdmin/SuperAdminOrganizationStatus";


const SuperAdminDashboardPage = () => {

    return (
        <div className="h-screen w-full p-10">
            <Header />
            <SuperAdminTotalCount />
            <SuperAdminControlPanel />
            <SuperAdminOrganizationStatus />
            <SuperAdminDashboard />
        </div>
    );
};

export default SuperAdminDashboardPage;