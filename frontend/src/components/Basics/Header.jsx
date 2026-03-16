import { useNavigate } from "react-router-dom";
import { logout } from "../../api/auth";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { getOrganizationDetails } from "../../api/organization";
import { useEffect, useMemo, useState } from "react";

const Header = () => {

    const navigate = useNavigate();

    const user = useSelector((state) => state.auth.user);
    const [organization, setOrganization] = useState(null);

    const firstName = user?.firstName || "User";
    const lastName = user?.lastName || "";
    const renderName = `${firstName} ${lastName}`.trim();

    const orgName = useMemo(() => {
        const orgId = organization?._id || organization?.id;
        const userOrgId = user?.organizationId;

        if (orgId && userOrgId && orgId === userOrgId) {
            return organization?.orgName || organization?.name;
        }

        return "Organization";

    }, [organization, user]);


    const fetchOrganization = async () => {
        try {
            const response = await getOrganizationDetails();

            if (response?.success) {
                setOrganization(response.organization || null);
            }
        } catch (error) {
            console.error("Failed to fetch organization", error);
            toast.error("Could not fetch organization details");
        }
    };

    useEffect(() => {
        fetchOrganization();
    }, []);


    const handleLogout = async () => {
        try {
            await logout();
            toast.success("You've been logged out successfully");
            navigate("/", { replace: true });
        } catch (err) {
            toast.error("Something went wrong during logout");
        }
    };

    return (
        <div className="bg-[#1B211A] p-3 rounded-2xl border border-[#FFDAB3] shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                <h1 className="ml-5 text-2xl text-[#FFDAB3] font-semibold uppercase"> {orgName} </h1>

                <div className="flex items-center gap-6">
                    {renderName && (
                        <h2 className="text-md font-medium text-[#FFDAB3] uppercase"> {renderName} </h2>
                    )}

                    <button onClick={handleLogout} className="bg-red-600 hover:bg-red-700 text-white py-2 px-5 rounded-lg text-md font-semibold transition-colors uppercase duration-200"> Logout </button>
                </div>
            </div>
        </div>
    );
};

export default Header;