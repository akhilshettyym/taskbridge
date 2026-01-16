import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import { useEffect } from "react";
import { setLocalStorage } from "./utils/localStorage";

const App = () => {

  useEffect(() => {
    setLocalStorage();
  },[]);

  return (
    <>
      <Login />
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
    </>
  )
}

export default App;