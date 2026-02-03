import RegisterOrg from "./components/Pages/RegisterOrg";
import Landing from "./components/Pages/Landing";
import { SignIn, SignUp, EmployeeDashboard, AdminDashboard, useContext, useEffect, useState, AuthContext, Routes, Route, Navigate } from "./constants/imports";
import { getOrganizationData } from "./utils/localStorage";
// import { Toaster } from "react-hot-toast";
// import toast from "react-hot-toast";


const App = () => {

  // useEffect(() => {
  //   toast.error("Toast system working");
  // }, []);

  const authData = useContext(AuthContext);
  const orgData = getOrganizationData();

  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

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
      setUser({ role: "admin" });
      setLoggedInUserData(authData.admin);
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin", admin: authData.admin }));
      return;
    }

    const employee = authData?.employees?.find((e) =>
      e.email === email && e.password === password
    )

    if (employee) {
      setUser({ role: "employee" });
      setLoggedInUserData(employee);
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", employee }));
      return;
    }
    alert("Invalid credentials");
  };

  const handleLogout = () => {
    localStorage.setItem("loggedInUser", "");
    window.location.reload();
  }

  return (
    <>
      {/* <Toaster position="top-right" toastOptions={{ style: { background: "#1B211A", color: "#FFDAB3", borderRadius: "12px", border: "1px solid rgba(255,218,179,0.2)"}}}/> */}
      <Routes>
        <Route path="/" element={!user ? <Landing /> : <Navigate to="/dashboard" />} />
        <Route path="/signin" element={!user ? <SignIn handleLogin={handleLogin} /> : <Navigate to="/dashboard" />} />
        <Route path="/signup" element={!user ? <SignUp /> : <Navigate to="/dashboard" />} />
        <Route path="/register-org" element={<RegisterOrg />} />

        <Route path="/dashboard" element={
          !user ? (
            <Navigate to="/" />
          ) : user.role === "admin" ? (
            <AdminDashboard data={loggedInUserData} handleLogout={handleLogout} orgData={orgData} />
          ) : (
            <EmployeeDashboard data={loggedInUserData} handleLogout={handleLogout} orgData={orgData} />
          )
        }
        />
      </Routes>
    </>

  );
};

export default App;