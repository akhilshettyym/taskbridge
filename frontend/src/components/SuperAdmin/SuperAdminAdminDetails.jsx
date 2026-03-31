import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { deleteAdminEmployee } from "../../api/superadmin";
import SuperAdminUpdateAdminModal from "./SuperAdminUpdateAdminModal";
import AdminDeactivateEmployee from "../Admin/AdminDeactivateEmployee";
import AdminReactivateEmployee from "../Admin/AdminReactivateEmployee";

const SuperAdminAdminDetails = ({ admins = [], refreshAdmins }) => {

    const [selectedAdmin, setSelectedAdmin] = useState(null);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [localAdmins, setLocalAdmins] = useState([]);
    const [removingId, setRemovingId] = useState(null);

    const handleUpdateClick = (admin) => {
        setSelectedAdmin(admin);
        setShowUpdateModal(true);
    };

    const handleRefresh = (updatedAdmin) => {
        setLocalAdmins(prev =>
            prev.map(a =>
                a._id === updatedAdmin._id ? updatedAdmin : a
            )
        );
        setShowUpdateModal(false);
    };

    const handleRemoveAdmin = async (empId) => {

        if (removingId) return;
        setRemovingId(empId);

        try {

            const response = await deleteAdminEmployee({ empId });

            if (!response?.success) {
                throw new Error(response?.message || "Failed to remove admin");
            }

            setLocalAdmins(prev => prev.filter(a => a._id !== empId));

            toast.success("Admin removed successfully");

            refreshAdmins?.();

        } catch (error) {

            let msg = "Something went wrong while removing admin";

            if (error?.response?.data?.message) {
                msg = error.response.data.message;
            } else if (error?.message) {
                msg = error.message;
            }

            toast.error(msg);

        } finally {
            setRemovingId(null);
        }
    };

    useEffect(() => {
        setLocalAdmins(admins);
    }, [admins]);

    return (
        <div className="space-y-5">

            {localAdmins.map((admin) => {

                const isActive = admin.employmentStatus === "ACTIVE";

                return (
                    <div key={admin._id} className="group relative bg-linear-to-br from-[#0F1412] to-[#141A17] border border-[#FFDAB3]/20 hover:border-[#FFDAB3]/40 rounded-2xl p-6 transition-all duration-300 shadow-lg hover:shadow-[#FFDAB3]/5">
                        <div className="flex justify-between items-start">

                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <h2 className="text-[#FFDAB3] text-xl font-semibold"> {admin.firstName} {admin.lastName} </h2>

                                    <span className={`text-xs px-2 py-1 rounded-full border ${isActive
                                        ? "border-green-400 text-green-400"
                                        : "border-red-400 text-red-400"
                                        }`}>
                                        {admin.employmentStatus}
                                    </span>
                                </div>

                                <div className="grid grid-cols-2 gap-x-10 gap-y-1 text-sm">
                                    <p className="text-[#FFDAB3]/70"> Email: {admin.email} </p>
                                    <p className="text-[#FFDAB3]/70"> Role: {admin.role} </p>
                                    <p className="text-[#FFDAB3]/60"> Designation: {admin.designation} </p>
                                    <p className="text-[#FFDAB3]/60"> Org ID: {admin.organizationId} </p>
                                    <p className="text-[#FFDAB3]/50 text-sm"> DOB: {new Date(admin.dateOfBirth).toLocaleDateString()} </p>
                                    <p className="text-[#FFDAB3]/50 text-sm"> Created: {new Date(admin.createdAt).toLocaleDateString()} </p>
                                </div>
                            </div>

                            <div className="flex justify-end gap-3 mt-auto pt-4 text-sm">
                                <button onClick={() => handleUpdateClick(admin)} className="px-4 py-2 rounded-lg bg-[#FFDAB3] text-[#1B211A] font-semibold hover:scale-105 transition"> Update </button>

                                {isActive ? (
                                    <AdminDeactivateEmployee empId={admin._id} refreshEmployees={() => refreshAdmins?.()} />
                                ) : (
                                    <>
                                        <AdminReactivateEmployee empId={admin._id} refreshEmployees={() => refreshAdmins?.()} />
                                        <button onClick={() => handleRemoveAdmin(admin._id)} disabled={removingId === admin._id} className={`px-4 py-1 rounded-lg border transition-colors duration-200 ${removingId === admin._id
                                            ? "border-red-400/40 text-red-400/50 cursor-not-allowed"
                                            : "border-red-400 text-red-400 hover:bg-red-500 hover:text-white"
                                            }`}>
                                            {removingId === admin._id ? "Removing..." : "Remove"}
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                );
            })}

            {showUpdateModal && (
                <SuperAdminUpdateAdminModal admin={selectedAdmin} onClose={() => setShowUpdateModal(false)} onUpdated={handleRefresh} />
            )}

        </div>
    );
};

export default SuperAdminAdminDetails;