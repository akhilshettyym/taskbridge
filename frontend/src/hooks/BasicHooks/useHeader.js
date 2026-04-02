import toast from "react-hot-toast";
import { logoutUser } from "../../api/auth";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { logout as logoutRedux } from "../../slices/authSlice";
import { clearOrganization } from "../../slices/organizationSlice";

const useHeader = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();

    const user = useSelector((state) => state.auth.user);
    const organization = useSelector((state) => state.organization?.data);

    const firstName = user?.firstName || "User";
    const lastName = user?.lastName || "";
    const renderName = `${firstName} ${lastName}`.trim();

    const isAdminControl = location.pathname.startsWith("/superadmin/control");
    const isSuperAdmin = useSelector((state) => state.auth?.user?.role === "SUPER_ADMIN");
    const showExitOrg = isAdminControl && isSuperAdmin;

    const handleLogout = async () => {
        try {
            await logoutUser();
            dispatch(logoutRedux());
            dispatch(clearOrganization());

            toast.success("You've been logged out successfully");
            navigate("/", { replace: true });

        } catch (err) {
            toast.error("Something went wrong during logout");
        }
    };

    const handleExitOrg = () => {
        localStorage.removeItem("orgId");
        navigate("/superadmin/superadmin-dashboard");
    };

    return { organization, renderName, handleLogout, handleExitOrg, showExitOrg };
}

export default useHeader;