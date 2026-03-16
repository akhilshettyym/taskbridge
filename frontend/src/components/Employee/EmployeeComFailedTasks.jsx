import EmployeeTaskListNo from "./EmployeeTaskListNo";
import EmployeeTaskCard from "./EmployeeTaskCard";
import { useSelector } from "react-redux";
import { useCallback, useEffect, useMemo, useState } from "react";
import { getTaskDetails } from "../../api/tasks";
import toast from "react-hot-toast";

const EmployeeComFailedTasks = () => {

    const user = useSelector((state) => state.auth.user);

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

    useEffect(() => {
        fetchTasksDetails();
    }, []);

    const getMyTasks = useCallback((status) => {
        if (!user?._id) return [];

        const myId = user._id;

        return tasks.filter(task => {
            const isMine = task.assignedTo === myId;
            return status ? isMine && task.status === status : isMine;
        });
    }, [tasks, user?._id]);

    const employeeTasks = useMemo(
        () => getMyTasks(),
        [getMyTasks]);

    const employeeCompletedTasks = useMemo(
        () => getMyTasks("COMPLETED"),
        [getMyTasks]);

    const employeeFailedTasks = useMemo(
        () => getMyTasks("FAILED"),
        [getMyTasks]);

    return (
        <>
            <hr className="my-5 border border-[#FFDAB3]/40" />
            <h1 className="mt-5 font-bold text-[#FFDAB3] text-xl uppercase text-center"> Completed / Failed Tasks </h1>
            <hr className="my-5 border border-[#FFDAB3]/40" />

            <EmployeeTaskListNo tasks={employeeTasks} />

            <div className="mt-5 bg-[#1B211A] rounded-2xl p-4 border border-[#FFDAB3]/25">
                {employeeCompletedTasks.length === 0 ? (
                    <div className="text-center py-12 text-[#F8F8F2]/60 text-lg"> No tasks are accepted at the moment. </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                        {employeeCompletedTasks.map((task) => {
                            return <EmployeeTaskCard key={task.id || task._id} task={task} />
                        })}
                    </div>
                )}
            </div>

            <div className="mt-5 bg-[#1B211A] rounded-2xl p-4 border border-[#FFDAB3]/25">
                {employeeFailedTasks.length === 0 ? (
                    <div className="text-center py-12 text-[#F8F8F2]/60 text-lg"> No tasks are accepted at the moment. </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                        {employeeFailedTasks.map((task, index) => {
                            return <EmployeeTaskCard key={task.id || task._id} index={index+1} task={task} />
                        })}
                    </div>
                )}
            </div>
        </>
    );
};

export default EmployeeComFailedTasks;