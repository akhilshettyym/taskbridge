import api from "./axios";

export async function addEmployee(payload) {
    const res = await api.post("/employee/add-employee", payload);
    return res.data;
}

export async function updateEmployee(payload) {
    const res = await api.patch("/employee/update-employee/:employeeId");
    return res.data;
}

export async function deactivateEmployee() {
    const res = await api.patch("/employee/deactivate-employee/:employeeId");
    return res.data;
} 

export async function getOrganizationUsers() {
    const res = await api.get("/employee/get-employees");
    return res.data;
}