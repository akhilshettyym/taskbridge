import toast from "react-hot-toast";
import { useState, useCallback } from "react";
import { getAlltasksDetails } from "../api/superadmin";

let cachedTasks = null;
let hasFetchedTasks = false;

const useAllTasksDetails = () => {

    const [allTasks, setAllTasks] = useState(cachedTasks || []);

    const fetchAllTasks = useCallback(async (force = false) => {

        if (hasFetchedTasks && !force) return;

        try {
            const response = await getAlltasksDetails();
            cachedTasks = response?.tasks || [];
            hasFetchedTasks = true;
            setAllTasks(cachedTasks);

        } catch (error) {
            console.error("Failed to fetch task details", error);
            toast.error("Could not fetch tasks");
        }

    }, []);

    return { allTasks, setAllTasks, fetchAllTasks };
};

export default useAllTasksDetails;