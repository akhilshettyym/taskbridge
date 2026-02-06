import { Header, TaskListNo, TaskList, employeeDivClass } from "../../../constants/imports";
import EmployeeControl from "./EmployeeControl";
import TaskStatus from "./EmpTaskStatus";

const EmployeeDashboard = ({ data, handleLogout, orgData }) => {

  if (!data) return null;

  return (
    <div className={employeeDivClass}>
      <Header data={data} handleLogout={handleLogout} orgData={orgData} />
      <EmployeeControl />
      <TaskListNo data={data} />
      <TaskStatus data={data} />
    </div>
  )
}

export default EmployeeDashboard;