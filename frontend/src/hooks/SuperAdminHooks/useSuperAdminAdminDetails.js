import { useState } from "react";
import toast from "react-hot-toast";
import { deleteAdminEmployee } from "../../api/superadmin";

const useSuperAdminAdminDetails = ({ refreshAdmins }) => {

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

    return { selectedAdmin, setSelectedAdmin, showUpdateModal, setShowUpdateModal, localAdmins, setLocalAdmins, removingId, setRemovingId, handleUpdateClick, handleRefresh, handleRemoveAdmin };
}

export default useSuperAdminAdminDetails;