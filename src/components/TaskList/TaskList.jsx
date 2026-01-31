import InProgress from "./InProgress";
import CompletedTask from "./CompletedTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = ({ data }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {data.tasks.map((e, idx) => {
                if (e.active) {
                    return <InProgress key={idx} data={e} />
                }
                if (e.newTask) {
                    return <NewTask key={idx} data={e} />
                }
                if (e.completed) {
                    return <CompletedTask key={idx} data={e} />
                }
                if (e.failed) {
                    return <FailedTask key={idx} data={e} />
                }
            })}
        </div>
    )
}

export default TaskList;