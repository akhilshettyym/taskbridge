import CompleteOrg from "./components/pages/CompleteOrg";
import { SignIn, SignUp, EmployeeDashboard, AdminDashboard, useContext, useEffect, useState, AuthContext, Routes, Route, Navigate } from "./constants/imports";
import { getOrganizationData } from "./utils/localStorage";

const App = () => {

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

    const employee = authData?.employees?.find((e) => e.email === email && e.password === password);
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
      <Routes>
        <Route path="/" element={!user ? <SignIn handleLogin={handleLogin} /> : <Navigate to="/dashboard" />} />
        <Route path="/signin" element={!user ? <SignIn handleLogin={handleLogin} /> : <Navigate to="/dashboard" />} />
        <Route path="/signup" element={!user ? <SignUp /> : <Navigate to="/dashboard" />} />
        <Route path="/complete-org" element={<CompleteOrg />} />

        <Route path="/dashboard" element={
          !user ? (
            <Navigate to="/" />
          ) : user.role === "admin" ? (
            <AdminDashboard data={loggedInUserData} handleLogout={handleLogout} orgData={orgData} />
          ) : (
            <EmployeeDashboard data={loggedInUserData} handleLogout={handleLogout} orgData={orgData} />
          )}
        />
      </Routes>
    </>
  );
};

export default App;