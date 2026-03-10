import api from "./axios";

export async function createTask(payload) {
    const res = await api.post("/tasks/create-task", payload);
    return res.data;
}

// export async function updateTask(payload) {
//     const res = await api.patch("/tasks/update-task/", payload);
//     return res.data;
// }

export async function updateTask({ taskId, ...data }) {
    if (!taskId) throw new Error("taskId is required");

    try {
        const res = await api.patch(`/tasks/update-task/${taskId}`, data);
        return res.data;
    } catch (err) {
        if (err.response?.status === 404) {
            throw new Error("Task not found");
        }
        if (err.response?.status === 403) {
            throw new Error("You don't have permission to update this task");
        }
        throw err;
    }
}

export async function acceptTask() {
    const res = await api.patch("/tasks/accept-task/:taskId",);
    return res.data;
}

export async function requestRejection(payload) {
    const res = await api.patch("/tasks/reject-task/:taskId", payload);
    return res.data;
}

export async function markAsCompleted() {
    const res = await api.patch("/tasks/mark-as-completed/:taskId");
    return res.data;
}

export async function markAsFailed() {
    const res = await api.patch("/tasks/mark-as-failed/:taskId");
    return res.data;
}

export async function deleteTask() {
    const res = await api.delete("/tasks/delete-task/:taskId");
    return res.data;
}


export async function getTaskDetails() {
    const res = await api.get("/tasks/get-tasks-details");
    return res.data;
}