import api from "./axios";

export async function createOrganization(payload) {
    const res = await api.post("/auth/create-org", payload);
    return res.data;
}

export async function logIn(payload) {
    const res = await api.post("/auth/login", payload);
    return res.data;
}

export async function logout() {
    const res = await api.post("/auth/logout");
    return res.data;
}