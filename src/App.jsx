import Login from "./components/Auth/Login";
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
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === "admin@taskbridge.com" && password === "12345") {
      setUser({ role: "admin" });
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin", admin }));
    } else if (authData && authData.employees) {
      const employee = authData.employees.find((e) => email === e.email && e.password === password);
      if (employee) {
        setUser({ role: "employee" });
        setLoggedInUserData(employee);
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", employee }));
      } else {
        alert("Invalid credentials");
      }
    }
  };

  if (!user) {
    return <Login handleLogin={handleLogin} />;
  }

  return user.role === "admin" ? (
    <AdminDashboard />
  ) : (
    <EmployeeDashboard data={loggedInUserData} />
  );
};

export default App;