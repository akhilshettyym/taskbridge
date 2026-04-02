import Header from "../../components/Basics/Header";
import EmployeeTaskStatus from "../../components/Employee/EmployeeTaskStatus";
import EmployeeControlPanel from "../../components/Employee/EmployeeControlPanel";

const EmployeeDashBoardPage = () => {

    return (
        <div className="h-screen w-full p-10 overflow-visible">
            <Header />
            <EmployeeControlPanel />
            <EmployeeTaskStatus />
        </div>
    );
};

export default EmployeeDashBoardPage;