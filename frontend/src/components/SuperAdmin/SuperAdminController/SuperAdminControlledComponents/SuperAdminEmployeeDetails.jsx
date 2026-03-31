import { useState, useMemo } from "react";
import AdminAddedEmployees from "../../../Admin/AdminAddedEmployees";
import AdminInactiveEmployees from "../../../Admin/AdminInactiveEmployees";

const SuperAdminEmployeeDetails = ({ employees = [], refreshEmployees }) => {

    const [activeTab, setActiveTab] = useState("active");

    const activeEmployees = useMemo(
        () => employees.filter(emp => emp.employmentStatus === "ACTIVE"),
        [employees]
    );

    const inactiveEmployees = useMemo(
        () => employees.filter(emp => emp.employmentStatus === "IN-ACTIVE"),
        [employees]
    );

    return (
        <div>
            <div className="flex gap-4 mt-2 mb-5">
                <button
                    onClick={() => setActiveTab("active")}
                    className={`px-5 py-2 rounded-md uppercase text-sm font-semibold transition
                        ${activeTab === "active"
                            ? "bg-[#FFDAB3] text-[#1B211A]"
                            : "text-[#FFDAB3] border border-[#FFDAB3]/40 hover:bg-[#FFDAB3]/10"
                        }`} >
                    Active Employees
                </button>

                <button
                    onClick={() => setActiveTab("inactive")}
                    className={`px-5 py-2 rounded-md uppercase text-sm font-semibold transition
                        ${activeTab === "inactive"
                            ? "bg-[#FFDAB3] text-[#1B211A]"
                            : "text-[#FFDAB3] border border-[#FFDAB3]/40 hover:bg-[#FFDAB3]/10"
                        }`}>
                    Inactive Employees
                </button>
            </div>

            {activeTab === "active" && (
                <AdminAddedEmployees employees={activeEmployees} refreshEmployees={refreshEmployees} />
            )}

            {activeTab === "inactive" && (
                <AdminInactiveEmployees inactiveEmp={inactiveEmployees} refreshEmployees={refreshEmployees} />
            )}
        </div>
    );
};

export default SuperAdminEmployeeDetails;