import { Link, useLocation } from "react-router-dom";
import { FiGrid, FiClipboard, FiUsers, FiBarChart2, FiBarChart } from "react-icons/fi";

const AdminControl = () => {
    const { pathname } = useLocation();

    const navItems = [
        { label: "Dashboard", path: "/admin/dashboard", icon: <FiGrid size={18} /> },
        { label: "Created Tasks", path: "/admin/tasks", icon: <FiClipboard size={18} /> },
        { label: "Task Status", path: "/admin/status", icon: <FiBarChart2 size={18} /> },
        { label: "Employee Details", path: "/admin/employees", icon: <FiUsers size={18} /> },
        { label: "Employee Management", path: "/admin/management", icon: <FiBarChart size={18} /> }
    ];

    return (
        <div className="mt-6">
            <div className="bg-[#1B211A]/80 backdrop-blur-md rounded-2xl px-4 py-3 shadow-lg">
                <div className="flex flex-wrap items-center gap-3">
                    <h1 className="ml-5 mr-5 text-[#FFDAB3] text-md uppercase"> Admin Dashboard </h1>
                    {navItems.map((item) => {
                        const isActive = pathname === item.path;

                        return (
                            <Link key={item.path} to={item.path} className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold uppercase tracking-wide transition-all duration-200 ${isActive
                                    ? "bg-[#FFDAB3] text-[#1B211A] shadow-md"
                                    : "text-[#FFDAB3] hover:bg-[#FFDAB3]/10 hover:shadow"
                                } `}>
                                <span className="opacity-90">{item.icon}</span>
                                <span>{item.label}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default AdminControl;