import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const role = useSelector((state) => state.auth?.role);
  const token = useSelector((state) => state.auth?.token);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (role === "SUPER_ADMIN") {
    return children;
  }

  if (allowedRoles.includes(role)) {
    return children;
  }

  return <Navigate to="/" replace />;
};

export default ProtectedRoute;