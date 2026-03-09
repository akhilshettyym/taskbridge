import api from "./axios";

export async function updateAdmin(payload) {
    const res = await api.patch("/admin/update-admin/:adminId", payload);
    return res.data;
}

export async function reviewRejection(payload) {
    const res = await api.patch("/admin/review-task-rejection/:taskId", payload);
    return res.data;
}