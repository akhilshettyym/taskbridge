import { useState } from "react";
import toast from "react-hot-toast";
import { reviewRejection } from "../../api/admin";

const useAdminTaskDetailsModal = ({ task, onClose, fetchTasksDetails }) => {

    if (!task) return null;

    const [showRejectModal, setShowRejectModal] = useState(false);
    const [approving, setApproving] = useState(false);

    const failureReason = task?.taskLifeCycle?.failure?.reason;
    const failedAt = task?.taskLifeCycle?.failure?.failedAt;

    const isRequestRejection = task.status === "REJECTION_REQUESTED";
    const status = task?.status?.toLowerCase();

    const statusStyles = {
        new: "bg-amber-100 text-amber-700 border-amber-200",
        inprogress: "bg-blue-100 text-blue-700 border-blue-200",
        completed: "bg-emerald-100 text-emerald-700 border-emerald-200",
        failed: "bg-red-100 text-red-700 border-red-200",
        rejection_requested: "bg-red-200 text-red-800 border-red-400",
    };

    const handleOpenRejectModal = () => setShowRejectModal(true);
    const handleCloseRejectModal = () => setShowRejectModal(false);

    const handleApprove = async () => {
        try {
            setApproving(true);

            await reviewRejection({
                taskId: task._id || task.id,
                decision: "APPROVED"
            });

            fetchTasksDetails?.();
            onClose();

        } catch (error) {
            toast.error(error);

        } finally {
            setApproving(false);
        }
    };

    const handleOnClick = (e) => {
        e.stopPropagation();
    }

    const handleOnSuccess = () => {
        fetchTasksDetails?.();
        onClose();
    }

    return { showRejectModal, approving, failureReason, failedAt, isRequestRejection, status, statusStyles, handleOpenRejectModal, handleCloseRejectModal, handleApprove, handleOnClick, handleOnSuccess };
}

export default useAdminTaskDetailsModal;