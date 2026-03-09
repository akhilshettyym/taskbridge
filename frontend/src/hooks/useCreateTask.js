import { useState } from "react";
import { createTask } from "../api/tasks";
import { toast } from "react-hot-toast";

const useCreateTask = () => {
    const [loading, setLoading] = useState(false);

    const createTaskHandler = async ({ title, category, description, assignedTo, dueDate, priority }) => {
        try {
            setLoading(true);
            const payload = {
                title: title.trim(),
                category: category.trim(),
                description: description.trim(),
                assignedTo,
                dueDate: dueDate.toISOString(),
                priority: priority.toUpperCase(),
            };
            const response = await createTask(payload);
            toast.success("Task created successfully");
            return response;

        } catch (error) {
            const message = error?.response?.data?.message || "Task creation failed";
            toast.error(message);
            throw error;

        } finally {
            setLoading(false);
        }
    };

    return { createTaskHandler, loading };
};

export default useCreateTask;