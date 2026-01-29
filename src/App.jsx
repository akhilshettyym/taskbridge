import SignIn from "./components/Auth/SignIn";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  const authData = useContext(AuthContext);

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
    const admin = authData?.admin?.find((e) => e.email === email && e.password === password);
    if (admin) {
      setUser({ role: "admin" });
      setLoggedInUserData(admin);
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin", admin }));
      return;
    }
    const employee = authData?.employees?.find((e) => e.email === email && e.password === password);
    if (employee) {
      setUser({ role: "employee" });
      setLoggedInUserData(employee);
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", employee }));
      return
    }
    alert("Invalid credentials");
  }

  if (!user) {
    return <SignIn handleLogin={handleLogin} />;
  }

  return user.role === "admin" ? (
    <AdminDashboard data={loggedInUserData} />
  ) : (
    <EmployeeDashboard data={loggedInUserData} />
  );
};

export default App;