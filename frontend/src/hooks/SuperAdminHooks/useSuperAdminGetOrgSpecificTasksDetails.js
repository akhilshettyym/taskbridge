import toast from "react-hot-toast";
import { useCallback, useState } from "react";
import { getOrganizationSpecificTasksDetails } from "../../api/superadmin";

let tasksCache = {};

const useSuperAdminGetOrgSpecificTasksDetails = ({ orgId }) => {

    const [orgSpecificTasks, setOrgSpecificTasks] = useState(
        orgId ? tasksCache[orgId] || null : null
    );

    const fetchOrgSpecificTasks = useCallback(async (force = false) => {

        if (!orgId) return;

        if (tasksCache[orgId] && !force) {
            setOrgSpecificTasks(tasksCache[orgId]);
            return;
        }

        try {
            const orgResponse = await getOrganizationSpecificTasksDetails(orgId);

            tasksCache[orgId] = orgResponse?.tasks || null;

            setOrgSpecificTasks(tasksCache[orgId]);

        } catch (error) {
            console.error("Failed to fetch tasks details", error);
            toast.error("Could not fetch tasks");
        }

    }, [orgId]);

    return { orgSpecificTasks, setOrgSpecificTasks, fetchOrgSpecificTasks };
};

export default useSuperAdminGetOrgSpecificTasksDetails;