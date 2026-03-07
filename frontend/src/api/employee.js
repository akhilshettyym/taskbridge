import api from "./axios";

export async function getOrganizationUsers() {
    const res = await api.get("/api/employee/get-employees");
    return res.data;
}

export async function addEmployee(payload) {
    const res = await api.post("/api/employee/add-employee", payload);
    return res.data;
}