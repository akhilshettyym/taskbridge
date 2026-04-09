import { Navigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";

import { logout as logoutRedux } from "../slices/authSlice";
import { clearOrganization } from "../slices/organizationSlice";

const ProtectedRoute = ({ children, allowedRoles }) => {

  const role = useSelector((state) => state.auth?.role);
  const token = useSelector((state) => state.auth?.token);

  const location = useLocation();
  const dispatch = useDispatch();

  const shownRef = useRef(false);

  useEffect(() => {
    if (!token && !shownRef.current) {
      shownRef.current = true;
      toast.error("Please login to continue");
    }

    if (token && role !== "SUPER_ADMIN" && !allowedRoles.includes(role) && !shownRef.current) {
      shownRef.current = true;

      toast.error("You are not authorized to access this page");

      localStorage.clear();
      dispatch(logoutRedux());
      dispatch(clearOrganization());
    }
  }, [token, role, location.pathname]);

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