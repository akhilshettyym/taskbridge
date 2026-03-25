import { useMemo, useState } from "react";
import { getOrganizationUsers } from "../../api/employee";
import toast from "react-hot-toast";
import { getOrganizationDetails } from "../../api/organization";
import { getTaskDetails } from "../../api/tasks";

const useAdminProfileDetails = () => {

    const [employees, setEmployees] = useState([]);
    const [organization, setOrganization] = useState({});
    const [activeTab, setActiveTab] = useState("organization");

    const [tasks, setTasks] = useState([]);

    const fetchTasksDetails = async () => {
        try {
            const response = await getTaskDetails();
            if (response?.success) {
                setTasks(response.tasks || []);
            } else {
                toast.error(response?.message || "Failed to load tasks");
            }
        } catch (error) {
            console.error("Failed to fetch tasks", error);
            toast.error("Could not fetch tasks");
        }
    };

    const fetchOrganization = async () => {
        try {
            const orgResponse = await getOrganizationDetails();
            setOrganization(orgResponse?.organization || {});
        } catch (error) {
            console.error("Failed to fetch Organization details", error);
            toast.error("Could not fetch organization");
        }
    };

    const fetchEmployees = async () => {
        try {
            const response = await getOrganizationUsers();
            setEmployees(response?.users || []);
        } catch (error) {
            console.error("Failed to fetch employees", error);
            toast.error("Could not fetch employees");
        }
    };

    const refreshOrgData = async () => {
        await Promise.all([
            fetchOrganization()
        ]);
    };

    const refreshAdminData = async () => {
        await Promise.all([
            fetchEmployees()
        ]);
    };

    const admin = useMemo(
        () => employees.find((emp) => emp.role === "ADMIN"),
        [employees]
    );

    const formattedDOB = admin?.dateOfBirth ? new Date(admin.dateOfBirth).toLocaleDateString() : "";

    const orgCountry = {
        IN: "India",
        US: "United States",
        UK: "United Kingdom",
        CA: "Canada"
    }[organization?.orgCountry];

    const handleOnClickActiveOrg = () => {
        setActiveTab("organization");
    }

    const handleOnClickActiveAdmin = () => {
        setActiveTab("admin");
    }

    return { tasks, organization, admin, activeTab, formattedDOB, orgCountry, refreshOrgData, refreshAdminData, fetchEmployees, fetchTasksDetails, fetchOrganization, handleOnClickActiveOrg, handleOnClickActiveAdmin };
}

export default useAdminProfileDetails;