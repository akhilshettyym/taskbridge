import AdminControl from "../Admin/AdminControl"
import CreateTask from "../Admin/Createtask"
import Header from "../../Basics/Header"

const Dashboard = ({ data, handleLogout, orgData }) => {
    return (
        <div className="h-screen w-full p-10">
            <Header data={data} handleLogout={handleLogout} orgData={orgData} />
            <AdminControl />
            <CreateTask data={data} />
        </div>
    )
}

export default Dashboard;