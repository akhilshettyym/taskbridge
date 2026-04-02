import Header from "../../components/Basics/Header";
import AdminControlPanel from "../../components/Admin/AdminControlPanel";
import AdminTasksTable from "../../components/Admin/AdminTasksTable";

const AdminTasksPage = () => {

    return (
        <div className="h-screen w-full p-10">
            <Header />
            <AdminControlPanel />
            <AdminTasksTable />
        </div>
    );
};

export default AdminTasksPage;