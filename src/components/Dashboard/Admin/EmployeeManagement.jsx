import Header from "../../Basics/Header";
import AdminControl from "./AdminControl";

const EmployeeManagement = ({ data, handleLogout, orgData }) => {
    
    return (
        <div className="h-screen w-full p-10">
            <Header data={data} handleLogout={handleLogout} orgData={orgData} />
            <AdminControl />
        </div>
    )
}

export default EmployeeManagement;