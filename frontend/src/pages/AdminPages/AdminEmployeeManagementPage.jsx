import Header from "../../components/Basics/Header";
import AdminControlPanel from "../../components/Admin/AdminControlPanel";
import AdminEmployeeManager from "../../components/Admin/AdminEmployeeManager";

const AdminEmployeeManagementPage = () => {

    return (
        <div className="h-screen w-full p-10">
            <Header />
            <AdminControlPanel />
            <AdminEmployeeManager />
        </div>
    );
};

export default AdminEmployeeManagementPage;