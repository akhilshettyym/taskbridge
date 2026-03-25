import { useState } from "react";
import { getOrganizationInactiveUsers, getOrganizationUsers } from "../../api/employee";
import toast from "react-hot-toast";
import { getTaskDetails } from "../../api/tasks";

const useAdminEmployeeManager = () => {

    const [tasks, setTasks] = useState([]);
    const [employees, setEmployees] = useState([]);
    const [inactiveEmp, setInactiveEmp] = useState([]);
    const [activeTab, setActiveTab] = useState("active");

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

    const fetchEmployees = async () => {
        try {
            const response = await getOrganizationUsers();
            setEmployees(response?.users || []);
        } catch (error) {
            console.error("Failed to fetch employees", error);
            toast.error("Could not fetch employees");
        }
    };

    const fetchInactiveEmployees = async () => {
        try {
            const response = await getOrganizationInactiveUsers();
            setInactiveEmp(response?.users || []);
        } catch (error) {
            console.error("Failed to fetch IN-ACTIVE employees", error);
            toast.error("Could not fetch IN-ACTIVE employees");
        }
    };

    const refreshEmployeesData = async () => {
        await Promise.all([
            fetchEmployees(),
            fetchInactiveEmployees()
        ]);
    };

    const handleOnClickActiveTab = () => {
        setActiveTab("active");
    }

    const handleOnClickInActiveTab = () => {
        setActiveTab("inactive")
    }

    return { tasks, activeTab, employees, inactiveEmp, setInactiveEmp, setEmployees, fetchEmployees, fetchTasksDetails, fetchInactiveEmployees, refreshEmployeesData, handleOnClickActiveTab, handleOnClickInActiveTab };

}

export default useAdminEmployeeManager;