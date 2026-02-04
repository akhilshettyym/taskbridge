import { InProgress, CompletedTask, FailedTask, NewTask, taskListMainCompDiv } from "../../constants/imports";

const TaskList = ({ data }) => {

    
    return (
        <div className={taskListMainCompDiv}>
            {data.tasks.map((e, idx) => {
                
                if (e?.status === "inProgress") {
                    return <InProgress key={idx} data={e} />
                }
                if (e?.status === "new") {
                    return <NewTask key={idx} data={e} />
                }
                if (e?.status === "completed") {
                    return <CompletedTask key={idx} data={e} />
                }
                if (e?.status === "failed") {
                    return <FailedTask key={idx} data={e} />
                }
            })}
        </div>
    )
}

export default TaskList;