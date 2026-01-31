import { AuthContext, PriorityTag, TaskCount, useContext, allTaskChildDiv, allTaskChildInnerDiv, allTaskChildH2, allTaskMainDiv, allTaskMainH1, allTaskChildInnerH2, allTaskTasksDiv, allTaskDivSpan, allTaskDivDiv } from "../../constants/imports";

const AllTask = () => {

    const authData = useContext(AuthContext);

    return (
        <div className={allTaskMainDiv}>
            <h1 className={allTaskMainH1}>Employee Details :</h1>
            {authData?.employees.map((empDet, empIndex) => {
                const authTasks = empDet.tasks;
                return (
                    <div key={empDet.id || empIndex} className={allTaskChildDiv}>
                        <div className={allTaskChildInnerDiv}>
                            <h2 className={allTaskChildH2}>{empDet?.firstname || "Employee"}</h2>

                            <h2 className={allTaskChildInnerH2}> In-progress Tasks :
                                <TaskCount taskCount={empDet?.taskNumbers.active ?? 0} />
                            </h2>

                            <h2 className={allTaskChildInnerH2}> New Tasks :
                                <TaskCount taskCount={empDet?.taskNumbers.newTask ?? 0} />
                            </h2>

                            <h2 className={allTaskChildInnerH2}> Completed Tasks :
                                <TaskCount taskCount={empDet?.taskNumbers.completed ?? 0} taskComplete={empDet?.taskNumbers} />
                            </h2>

                            <h2 className={allTaskChildInnerH2}> Failed Tasks :
                                <TaskCount taskCount={empDet?.taskNumbers.failed ?? 0} taskFail={empDet?.taskNumbers} />
                            </h2>

                            <h2 className={allTaskChildInnerH2}> Total Number Of Tasks :
                                <TaskCount taskCount={empDet?.tasks.length ?? 0} />
                            </h2>
                        </div>

                        {authTasks?.map((task, taskIndex) => {
                            const renderActivity = task.active === true ? "Active" : "" || task.newTask === true ? "New Task" : "" || task.completed === true ? "Completed" : "" || task.failed === true ? "Failed" : "";
                            return (
                                <div key={task.id || taskIndex} className={allTaskTasksDiv}>
                                    <span className={allTaskDivSpan}>{task.title}</span>
                                    <span className={allTaskDivSpan}>{task.category}</span>
                                    <span className={allTaskDivSpan}>{renderActivity}</span>
                                    <span className={allTaskDivSpan}>{task.dateCreated}</span>
                                    <span className={allTaskDivSpan}>{task.dueDate}</span>
                                    <div className={allTaskDivDiv}>
                                        <PriorityTag priorityMsg={task.priority} />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default AllTask;