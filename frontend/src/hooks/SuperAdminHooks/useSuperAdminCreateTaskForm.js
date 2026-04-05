import toast from "react-hot-toast";
import { useState, useMemo } from "react";
import { createNewTask } from "../../api/superadmin";
import useSuperAdminGetOrgSpecificEmployeeDetails from "../../hooks/SuperAdminHooks/useSuperAdminGetOrgSpecificEmployeeDetails";


const useSuperAdminCreateTaskForm = () => {

    const orgId = localStorage.getItem("orgId");

    const [dueDate, setDueDate] = useState(null);
    const [loading, setLoading] = useState(false);
    const [creationDate] = useState(new Date());

    const { orgSpecificEmployees, fetchOrgSpecificEmployees } = useSuperAdminGetOrgSpecificEmployeeDetails({ orgId });

    const handleOnChange = (date) => {
        setDueDate(date);
    };

    const activeEmployees = useMemo(() => {
        if (!orgSpecificEmployees?.length) return [];

        return orgSpecificEmployees
            .filter(
                (emp) =>
                    emp.employmentStatus === "ACTIVE" &&
                    emp.role === "EMPLOYEE"
            )
            .sort((a, b) =>
                `${a.firstName} ${a.lastName}`.localeCompare(
                    `${b.firstName} ${b.lastName}`
                )
            );
    }, [orgSpecificEmployees]);

    const handleCreateTask = async (e) => {

        e.preventDefault();
        if (loading) return;

        setLoading(true);

        try {
            const formData = new FormData(e.target);

            const title = formData.get("title")?.trim();
            const category = formData.get("category")?.trim();
            const description = formData.get("description")?.trim();
            const assignedTo = formData.get("assignedTo")?.trim();
            const priority = formData.get("priority")?.trim();

            if (!title || !category || !description || !assignedTo || !dueDate || !priority) {
                throw new Error("Please fill all required fields");
            }

            const payload = {
                title,
                category,
                description,
                assignedTo,
                dueDate: dueDate.toISOString(),
                priority
            };

            const response = await createNewTask({ orgId, payload });

            if (!response?.success) {
                throw new Error(response?.message || "Could not create task");
            }

            toast.success(response.message || "Task created successfully");
            e.target.reset();
            setDueDate(null);

        } catch (error) {
            const message = error?.response?.data?.message || error.message || "Something went wrong";
            toast.error(message);

        } finally {
            setLoading(false);
        }
    };

    return { orgId, dueDate, setDueDate, loading, setLoading, creationDate, orgSpecificEmployees, fetchOrgSpecificEmployees, handleOnChange, activeEmployees, handleCreateTask };
}

export default useSuperAdminCreateTaskForm;