import { useState, useCallback } from "react";
import toast from "react-hot-toast";
import { getTaskDetails } from "../api/tasks";

let tasksCache = null;
let hasFetchedTasks = false;

const useTasksDetails = () => {

    const [tasks, setTasks] = useState(tasksCache || []);

    const fetchTasksDetails = useCallback(async (force = false) => {

        if (hasFetchedTasks && !force) return;

        try {
            const response = await getTaskDetails();

            if (response?.success) {
                tasksCache = response.tasks || [];
                hasFetchedTasks = true;
                setTasks(tasksCache);
                
            } else {
                toast.error(response?.message || "Failed to load tasks");
            }

        } catch (error) {
            console.error("Failed to fetch tasks", error);
            toast.error("Could not fetch tasks");
        }
    }, []);

    return { tasks, setTasks, fetchTasksDetails };
};

export default useTasksDetails;