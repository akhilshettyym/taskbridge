import { AllTask, CreateTask, Header, adminDivClass } from "../../constants/imports";

const AdminDashboard = ({ data, handleLogout }) => {
    return (
        <div className={adminDivClass}>
            <Header data={data} handleLogout={handleLogout} />
            <CreateTask data={data} />
            <AllTask data={data} />
        </div>
    )
}

export default AdminDashboard;