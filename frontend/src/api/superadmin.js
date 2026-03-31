import { handleApiError, validateId, validatePayload } from "./helpers/apiHelpers";
import api from "./instance/axios";

export async function getAllOrganizationDetails() {
    const res = await api.get(`${import.meta.env.VITE_API_SUPERADMIN_GET_ALL_ORGANIZATIONS}`);
    return res.data;
}

export async function getSpecificOrganizationDetails(orgId) {
    validateId(orgId, "Organization ID");

    const res = await api.get(`${import.meta.env.VITE_API_SUPERADMIN_GET_SPECIFIC_ORGANIZATIONS}/${orgId}`);
    return res.data;
}

export async function getOrganizationSpecificEmployeeDetails(orgId) {
    validateId(orgId, "Organization ID");

    const res = await api.get(`${import.meta.env.VITE_API_SUPERADMIN_GET_SPECIFIC_EMPLOYEES}/${orgId}`);
    return res.data;
}

export async function getOrganizationSpecificTasksDetails(orgId) {
    validateId(orgId, "Organization ID");

    const res = await api.get(`${import.meta.env.VITE_API_SUPERADMIN_GET_SPECIFIC_TASKS}/${orgId}`);
    return res.data;
}

export async function getAllEmployeesDetails() {
    const res = await api.get(`${import.meta.env.VITE_API_SUPERADMIN_GET_ALL_EMPLOYEES}`);
    return res.data;
}

export async function getAlltasksDetails() {
    const res = await api.get(`${import.meta.env.VITE_API_SUPERADMIN_GET_ALL_TASKS}`);
    return res.data;
}

export async function approveOrganization(orgId) {
    validateId(orgId, "Organization ID");

    const res = await api.patch(`${import.meta.env.VITE_API_SUPERADMIN_APPROVE_ORGANIZATION}/${orgId}`);
    return res.data;
}

export async function rejectOrganization(orgId) {
    validateId(orgId, "Organization ID");

    const res = await api.patch(`${import.meta.env.VITE_API_SUPERADMIN_REJECT_ORGANIZATION}/${orgId}`);
    return res.data;
}

export async function revokeOrganization(orgId) {
    validateId(orgId, "Organization ID");

    const res = await api.patch(`${import.meta.env.VITE_API_SUPERADMIN_REVOKE_ORGANIZATION}/${orgId}`);
    return res.data;
}

export async function reActivateOrganization(orgId) {
    validateId(orgId, "Organization ID");

    const res = await api.patch(`${import.meta.env.VITE_API_SUPERADMIN_RE_ACTIVATE_ORGANIZATION}/${orgId}`);
    return res.data;
}

export async function deleteRejectedOrganization({ orgId }) {
    validateId(orgId, "Organization ID");

    try {
        const res = await api.delete(`${import.meta.env.VITE_API_SUPERADMIN_DELETE_ORGANIZATION}/${orgId}`);
        return res.data;

    } catch (error) {
        handleApiError(error);
    }
}

export async function addAdmin(payload) {
    validatePayload(payload);

    try {
        const res = await api.post(`${import.meta.env.VITE_API_SUPERADMIN_ADD_ADMIN}`, payload);
        return res.data;

    } catch (error) {
        handleApiError(error);
        throw error;
    }
}

export async function deleteAdminEmployee({ empId }) {
    validateId(empId, "Emp ID");

    try {
        const res = await api.delete(`${import.meta.env.VITE_API_SUPERADMIN_DELETE_ADMIN_EMPLOYEE}/${empId}`);
        return res.data;

    } catch (error) {
        handleApiError(error);
    }
}

export async function createNewTask({ orgId, payload }) {
    validatePayload(payload);

    const res = await api.post(`${import.meta.env.VITE_API_SUPERADMIN_CREATE_TASK}/${orgId}`, payload );

    return res.data;
}

export async function updateNewTask({ orgId, taskId, payload }) {
  validatePayload(payload);

  const res = await api.patch(`${import.meta.env.VITE_API_SUPERADMIN_UPDATE_TASK}/org/${orgId}/task/${taskId}`, payload );

  return res.data;
}