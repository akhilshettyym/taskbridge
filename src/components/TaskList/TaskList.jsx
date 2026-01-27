import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = ({ data }) => {
    console.log("Data in TaskList", data);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
            {data.tasks.map((e, idx) => {
                if (e.active) {
                    return <AcceptTask key={idx} data={e} />
                }
                if (e.newTask) {
                    return <NewTask key={idx} data={e} />
                }
                if (e.completed) {
                    return <CompleteTask key={idx} data={e} />
                }
                if (e.failed) {
                    return <FailedTask key={idx} data={e} />
                }
            })}
        </div>
    )
}

export default TaskList;