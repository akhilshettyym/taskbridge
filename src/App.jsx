import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import { useContext, useEffect, useState } from "react";
import { setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    if (email === 'admin@taskbridge.com' && password === '12345') {
      setUser({ role: 'admin' });
    } else if (email === 'user@gmail.com' && password === '12345') {
      setUser({ role: 'employee' });
    } else {
      alert('Invalid credentials');
    }
  }

  // useEffect(() => {
  //   const storedUser = localStorage.getItem('user');
  //   if (storedUser) setUser(JSON.parse(storedUser));
  // }, []);

  // setLocalStorage();

  // useEffect(() => {
  //   if (user) {
  //     localStorage.setItem('user', JSON.stringify(user));
  //   }
  // }, [user]);

  const data = useContext(AuthContext);

  if (!user) {
    return <Login handleLogin={handleLogin} />;
  }


  return user.role === 'admin' ? <AdminDashboard /> : <EmployeeDashboard />;
};

export default App;