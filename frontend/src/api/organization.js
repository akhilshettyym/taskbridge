import api from "./axios";

export async function approveOrganization() {
    const res = await api.patch("/org/approve-org/:orgID");
    return res.data;
}

export async function rejectOrganization() {
    const res = await api.patch("/org/reject-org/:orgID");
    return res.data;
}

export async function revokeOrganization() {
    const res = await api.patch("/org/revoke-org/:orgID");
    return res.data;
}

export async function reActivateOrganization() {
    const res = await api.patch("/org/re-activate-org/:orgID");
    return res.data;
}

export async function updateOrganization() {
    const res = await api.patch("/org/update-organization/:orgID");
    return res.data;
}

export async function getOrganizationDetails() {
    const res = await api.get("/org/get-organization-details");
    return res.data;
}