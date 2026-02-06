import RegisterOrg from "./components/Auth/RegisterOrg";
import Landing from "./components/Landing";
import { SignIn, SignUp, EmployeeDashboard, AdminDashboard, useContext, useEffect, useState, AuthContext, Routes, Route, Navigate, EmployeeDetails, NewTask, InProgress, CompletedTask, FailedTask } from "./constants/imports";
import { getOrganizationData } from "./utils/localStorage";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import CreatedTasks from "./components/Dashboard/Admin/CreatedTasks";
import Dashboard from "./components/Dashboard/Admin/Dashboard";
import TaskStatus from "./components/Dashboard/Admin/TaskStatus";
import EmployeeManagement from "./components/Dashboard/Admin/EmployeeManagement";
import EmpTaskStatus from "./components/Dashboard/Employee/EmpTaskStatus";
import TaskLifeCycle from "./components/Dashboard/Employee/TaskLifeCycle";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  const authData = useContext(AuthContext);
  const orgData = getOrganizationData();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      const parsed = JSON.parse(storedUser);
      setUser({ role: parsed.role });
    }
  }, []);


  const loggedInUserData = (() => {
    if (!user || !authData) return null;

    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (user.role === "admin") {
      return authData?.admin ?? null;
    }

    if (user.role === "employee") {
      return authData?.employees?.find(
        (e) => e.email === storedUser?.employee?.email
      ) ?? null;
    }
    return null;
  })();


  const handleLogin = (email, password) => {
    if (authData?.admin && email === authData.admin.email && password === authData.admin.password) {
      toast.success(`Welcome back ${authData.admin.firstName}`);
      setUser({ role: "admin" });
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin", admin: authData.admin }));
      return;
    }

    const employee = authData?.employees?.find(
      (e) => e.email === email && e.password === password
    );

    if (employee) {
      toast.success(`Welcome back ${employee.firstName}`);
      setUser({ role: "employee" });
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", employee }));
      return;
    }

    toast.error("Invalid username or password. Please try again");
  };


  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("loggedInUser");
    toast.success("Logged out successfully");
    navigate("/");
  };


  const getDashboardRoute = (user) => {
    if (!user) return "/";
    if (user.role === "admin") return "/admin/dashboard";
    return "/employee/taskstatus";
  };

  const AdminRoute = ({ children }) => {
    if (!user) return <Navigate to="/" />;
    if (user.role !== "admin") return <Navigate to="/employee/taskstatus" />;
    return children;
  };

  return (
    <>
      <Toaster position="top-right" toastOptions={{ style: { background: "#1B211A", color: "#FFDAB3", borderRadius: "12px", border: "1px solid rgba(255,218,179,0.2)" } }} />

      <Routes>
        <Route path="/" element={!user ? <Landing /> : <Navigate to={getDashboardRoute(user)} />} />
        <Route path="/signin" element={!user ? <SignIn handleLogin={handleLogin} /> : <Navigate to={getDashboardRoute(user)} />} />
        <Route path="/signup" element={!user ? <SignUp /> : <Navigate to={getDashboardRoute(user)} />} />
        <Route path="/register-org" element={<RegisterOrg />} />

        <Route path="/admin/dashboard" element={<AdminRoute> {loggedInUserData && (<Dashboard data={loggedInUserData} handleLogout={handleLogout} orgData={orgData} />)} </AdminRoute>} />
        <Route path="/admin/tasks" element={loggedInUserData && (<CreatedTasks data={loggedInUserData} handleLogout={handleLogout} orgData={orgData} />)} />
        <Route path="/admin/status" element={loggedInUserData && (<TaskStatus data={loggedInUserData} handleLogout={handleLogout} orgData={orgData} />)} />
        <Route path="/admin/employees" element={loggedInUserData && (<EmployeeDetails data={loggedInUserData} handleLogout={handleLogout} orgData={orgData} />)} />
        <Route path="/admin/management" element={loggedInUserData && (<EmployeeManagement data={loggedInUserData} handleLogout={handleLogout} orgData={orgData} />)} />
        <Route path="/employee/taskstatus" element={
          user?.role === "employee" && loggedInUserData ? (
            <EmpTaskStatus data={loggedInUserData} handleLogout={handleLogout} orgData={orgData} />
          ) : (
            <Navigate to="/" />
          )} />

        <Route path="/employee/newtasks" element={loggedInUserData && (<NewTask data={loggedInUserData} handleLogout={handleLogout} orgData={orgData} />)} />
        <Route path="/employee/inprogress" element={loggedInUserData && (<InProgress data={loggedInUserData} handleLogout={handleLogout} orgData={orgData} />)} />
        <Route path="/employee/tasklifecycle" element={loggedInUserData && (<TaskLifeCycle data={loggedInUserData} handleLogout={handleLogout} orgData={orgData} />)} />
      </Routes>
    </>
  );
};

export default App;