import toast from "react-hot-toast";
import { getLocalStorage, setLocalStorage } from "../../utils/localStorage";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";


const RemoveTask = ({ taskId }) => {

    const { updateAuthData } = useContext(AuthContext);

    const handleDeleteTask = () => {
        const taskbridge = getLocalStorage() || { admin: {}, employees: [] };

        if (!taskbridge.admin || !taskbridge.employees) {
            toast.error("Invalid data structure");
            return;
        }

        let taskFound = false;
        let affectedEmployee = null;

        const updatedAdminTasks = (taskbridge.admin.tasks || []).filter(task => {
            if (task.id === taskId) {
                taskFound = true;
                return false;
            }
            return true;
        });

        const updatedEmployees = taskbridge.employees.map((emp) => {
            if (!emp.tasks) return emp;

            const updatedTasks = emp.tasks.filter((task) => {
                if (task.id === taskId) {
                    taskFound = true;
                    affectedEmployee = emp;
                    return false;
                }
                return true;
            });

            if (taskFound && affectedEmployee?.id === emp.id) {
                const newTaskCount = updatedTasks.filter(t => t.status === "new" || t.newTask).length;
                const activeCount = updatedTasks.filter(t => t.status === "active" || t.active).length;
                const completedCount = updatedTasks.filter(t => t.completed).length;
                const failedCount = updatedTasks.filter(t => t.failed).length;

                return {
                    ...emp,
                    tasks: updatedTasks,
                    taskNumbers: {
                        ...emp.taskNumbers,
                        newTask: newTaskCount,
                        active: activeCount,
                        completed: completedCount,
                        failed: failedCount,
                    }
                };
            }
            return emp;
        });

        if (!taskFound) {
            toast.error("Task not found");
            return;
        }

        const updatedTaskbridge = {
            ...taskbridge,
            admin: {
                ...taskbridge.admin,
                tasks: updatedAdminTasks,
            },
            employees: updatedEmployees,
        };

        setLocalStorage(updatedTaskbridge);
        updateAuthData(updatedTaskbridge);

        toast.success("Task removed successfully");
        console.log("✅ Task deleted from employee and admin:", taskId);
    };

    return (
        <button onClick={handleDeleteTask} className="py-1 px-4 text-sm rounded-md bg-red-500 border font-semibold border-red-600 text-[#FFDAB3] hover:bg-red-600 transition"> Delete </button>
    );
};

export default RemoveTask;