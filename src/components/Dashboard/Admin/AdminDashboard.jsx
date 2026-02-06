import { EmployeeDetails, CreateTask, Header, adminDivClass } from "../../../constants/imports";
import CreatedTasks from "./CreatedTasks";
import Dashboard from "./Dashboard";
import AdminControl from "./AdminControl";

const AdminDashboard = ({ data, handleLogout, orgData }) => {
    return (
        <div className={adminDivClass}>
            <Header data={data} handleLogout={handleLogout} orgData={orgData} />
            <AdminControl />
            <Dashboard data={data} handleLogout={handleLogout} orgData={orgData} />
        </div>
    )
}

export default AdminDashboard;