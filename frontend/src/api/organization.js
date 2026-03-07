import api from "./axios";

export async function getOrganizationDetails() {
    const res = await api.get("/api/org/get-organization-details");
    return res.data;
}