import Header from "../../components/Basics/Header";
import AdminControlPanel from "../../components/Admin/AdminControlPanel";
import AdminEmployeeDetailsCard from "../../components/Admin/AdminEmployeeDetailsCard";

const AdminEmployeeDetailsPage = () => {

    return (
        <div className="h-screen w-full p-10">
            <Header />
            <AdminControlPanel />
            <AdminEmployeeDetailsCard />
        </div>
    );
};

export default AdminEmployeeDetailsPage;