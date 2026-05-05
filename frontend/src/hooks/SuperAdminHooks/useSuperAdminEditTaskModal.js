import { useState } from "react";
import toast from "react-hot-toast";
import { updateNewTask } from "../../api/superadmin";
import useSuperAdminGetOrgSpecificEmployeeDetails from "../../hooks/SuperAdminHooks/useSuperAdminGetOrgSpecificEmployeeDetails";

const useSuperAdminEditTaskModal = ({ task, onClose, fetchTasks }) => {

    const orgId = localStorage.getItem("orgId");

    const [loading, setLoading] = useState(false);

    const { orgSpecificEmployees, fetchOrgSpecificEmployees } = useSuperAdminGetOrgSpecificEmployeeDetails({ orgId });

    const [formData, setFormData] = useState({
        title: "",
        category: "",
        description: "",
        priority: "MEDIUM",
        assignedTo: "",
        dueDate: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleDateChange = (date) => {
        setFormData((prev) => ({ ...prev, dueDate: date }));
    };

    const handleUpdateTask = async (e) => {
        e.preventDefault();

        if (loading) return;

        setLoading(true);

        try {
            const payload = {
                title: formData.title?.trim(),
                category: formData.category?.trim(),
                description: formData.description?.trim(),
                assignedTo: formData.assignedTo || null,
                priority: formData.priority,
                dueDate: formData.dueDate
                    ? formData.dueDate.toISOString()
                    : null,
            };

            const taskId = task?._id || task?.id;

            const response = await updateNewTask({ orgId, taskId, payload });

            if (!response?.success) {
                throw new Error(response?.message);
            }

            toast.success("Task updated successfully");
            await fetchTasks?.();
            onClose();

        } catch (error) {
            const msg = error?.response?.data?.message || error.message || "Failed to update task";
            toast.error(msg);

        } finally {
            setLoading(false);
        }
    };

    return { orgId, loading, setLoading, orgSpecificEmployees, fetchOrgSpecificEmployees, formData, setFormData, handleChange, handleDateChange, handleUpdateTask };
}

export default useSuperAdminEditTaskModal;