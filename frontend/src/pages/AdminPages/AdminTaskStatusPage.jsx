import Header from "../../components/Basics/Header";
import AdminControlPanel from '../../components/Admin/AdminControlPanel';
import AdminTaskStatusTable from '../../components/Admin/AdminTaskStatusTable';

const AdminTaskStatusPage = () => {

    return (
        <div className="h-screen w-full p-10 overflow-visible">
            <Header />
            <AdminControlPanel />
            <AdminTaskStatusTable />
        </div>
    );
};

export default AdminTaskStatusPage;