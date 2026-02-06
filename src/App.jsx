import RegisterOrg from "./components/Auth/RegisterOrg";
import Landing from "./components/Landing";
import { SignIn, SignUp, EmployeeDashboard, AdminDashboard, useContext, useEffect, useState, AuthContext, Routes, Route, Navigate, EmployeeDetails } from "./constants/imports";
import { getOrganizationData } from "./utils/localStorage";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import CreatedTasks from "./components/Dashboard/Admin/CreatedTasks";
import Dashboard from "./components/Dashboard/Admin/Dashboard";
import TaskStatus from "./components/Dashboard/Admin/TaskStatus";
import { useNavigate } from "react-router-dom";
import EmployeeManagement from "./components/Dashboard/Admin/EmployeeManagement";

const App = () => {

  const navigate = useNavigate();

  const authData = useContext(AuthContext);
  const orgData = getOrganizationData();

  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const parsedUser = JSON.parse(loggedInUser);
      setUser({ role: parsedUser.role });

      if (parsedUser.role === "employee") {
        setLoggedInUserData(parsedUser.employee);
      }
      if (parsedUser.role === "admin") {
        setLoggedInUserData(parsedUser.admin);
      }
    }
  }, []);

  const handleLogin = (email, password) => {
    if (authData?.admin && email === authData.admin.email && password === authData.admin.password) {
      toast.success(`Welcome back ${authData?.admin?.firstName}`);
      setUser({ role: "admin" });
      setLoggedInUserData(authData.admin);
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin", admin: authData.admin }));
      return;
    }

    const employee = authData?.employees?.find((e) =>
      e.email === email && e.password === password
    )

    if (employee) {
      toast.success(`Welcome back ${employee?.firstName}`);
      setUser({ role: "employee" });
      setLoggedInUserData(employee);
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", employee }));
      return;
    }
    toast.error("Invalid username or password. Please try again");
  };

  const handleLogout = () => {
    setUser(null);
    setLoggedInUserData(null);
    localStorage.removeItem("loggedInUser");
    navigate("/");
  };

  const getDashboardRoute = (user) => {
    if (!user) return "/";
    if (user.role === "admin") return "/admin/dashboard";
    return "/dashboard";
  };

  const AdminRoute = ({ children }) => {
    if (!user) return <Navigate to="/" />;
    if (user.role !== "admin") return <Navigate to="/dashboard" />;
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

        <Route path="/admin/dashboard" element={<AdminRoute><Dashboard data={loggedInUserData} handleLogout={handleLogout} orgData={orgData} /></AdminRoute>} />
        <Route path="/admin/tasks" element={<CreatedTasks data={loggedInUserData} handleLogout={handleLogout} orgData={orgData} />} />
        <Route path="/admin/status" element={<TaskStatus data={loggedInUserData} handleLogout={handleLogout} orgData={orgData} />} />
        <Route path="/admin/employees" element={<EmployeeDetails data={loggedInUserData} handleLogout={handleLogout} orgData={orgData} />} />
        <Route path="/admin/management" element={<EmployeeManagement data={loggedInUserData} handleLogout={handleLogout} orgData={orgData} />} />

        <Route path="/dashboard" element={
          !user ? (
            <Navigate to="/" />
          ) : user.role === "employee" ? (
            <EmployeeDashboard data={loggedInUserData} handleLogout={handleLogout} orgData={orgData} />
          ) : (
            <Navigate to="/admin/dashboard" />
          )} />
      </Routes>
    </>
  );
};

export default App;