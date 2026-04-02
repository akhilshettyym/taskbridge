
import Header from "../../components/Basics/Header";
import EmployeeControlPanel from "../../components/Employee/EmployeeControlPanel";
import EmployeeInProgressTask from "../../components/Employee/EmployeeInProgressTask";

const EmployeeInProgressTasksPage = () => {

    return (
        <div className="h-screen w-full p-10 overflow-visible">
            <Header />
            <EmployeeControlPanel />
            <EmployeeInProgressTask />
        </div>
    );
};

export default EmployeeInProgressTasksPage;