import { useState } from "react";
import toast from "react-hot-toast";
import { reviewRejection } from "../../api/admin";

const useAdminRejectRejectionModal = ({ task, onClose, onSuccess }) => {

    const [reason, setReason] = useState("");
    const [loading, setLoading] = useState(false);

    const wordCount = reason.trim().split(/\s+/).filter(Boolean).length;
    const lineCount = reason.split("\n").filter(Boolean).length;
    const isValid = /^[a-zA-Z\s\n.,'-]+$/.test(reason) && (wordCount >= 15 || lineCount >= 2);

    const taskId = task._id || task.id;

    const handleSubmit = async () => {
        if (!isValid) return;

        try {
            setLoading(true);

            await reviewRejection({
                taskId: taskId,
                decision: "REJECTED",
                adminReason: reason
            });

            onSuccess();
            onClose();

        } catch (error) {
            console.error(error);
            toast.error(error?.response?.data?.message || "Error rejecting request");

        } finally {
            setLoading(false);
        }
    };

    const handleOnChangeSetReason = (e) => {
        setReason(e.target.value);
    }

    return { reason, loading, wordCount, lineCount, isValid, taskId, handleSubmit, handleOnChangeSetReason };
}

export default useAdminRejectRejectionModal;