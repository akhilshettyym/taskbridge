import { Header, TaskListNo, TaskList, employeeDivClass } from "../../constants/imports";

const EmployeeDashboard = ({ data, handleLogout }) => {

  if (!data) return null;

  return (
    <div className={employeeDivClass}>
      <Header data={data} handleLogout={handleLogout} />
      <TaskListNo data={data} />
      <TaskList data={data} />
    </div>
  )
}

export default EmployeeDashboard;