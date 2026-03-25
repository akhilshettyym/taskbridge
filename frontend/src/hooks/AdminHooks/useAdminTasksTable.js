import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getTaskDetails } from "../../api/tasks";
import { setAllTasks } from "../../slices/taskSlice";
import toast from "react-hot-toast";

const useAdminTasksTable = () => {

    const dispatch = useDispatch();

    const tasks = useSelector((state) => state.tasks.tasks);

    const [editingTask, setEditingTask] = useState(null);

    const fetchTasksDetails = async () => {
        try {
            const response = await getTaskDetails();

            if (response?.success) {
                dispatch(setAllTasks(response.tasks || []));
            } else {
                toast.error(response?.message || "Failed to fetch tasks");
            }

        } catch (error) {
            console.error(error);
            toast.error("Failed to fetch tasks");
        }
    };

    const handleOnClickEdit = (task) => {
        if (task.status === "NEW") {
            setEditingTask(task);
        }
    };

    const handleCloseEditModal = () => {
        setEditingTask(null);
    };

    const handleTaskUpdated = (updatedTask) => {
        setEditingTask(updatedTask);
    };

    return { fetchTasksDetails, tasks, editingTask, handleOnClickEdit, handleCloseEditModal, handleTaskUpdated };
};

export default useAdminTasksTable;