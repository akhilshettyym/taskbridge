import { taskListCategoryH6, taskListChildDiv, taskListDateSpanClass, taskListDescP, taskListInnerDiv, taskListInnerH6, taskListMainDiv, taskListNewTaskBtnDiv, taskListNewTaskBtnGreen, taskListNewTaskBtnRed, taskListTitleH2, taskListTitleSpanClass, PriorityTag } from "../../constants/imports";
import DateConversion from "../Basics/DateConversion";

const NewTask = ({ data }) => {

  const handleAcceptTask = () => {
    // These tasks should go under inProgress/active Tasks
    // Under taskNumbers : should fall under active
    // taskNumbers :  {active: 5, newTask: 6, completed: 0, failed: 0}


    // And under Tasks
    // tasks : [{id: "task-014", title: "Icon Set Review", category: "Design", priority: "Low",…},…] 0 : 
    // {id: "task-014", title: "Icon Set Review", category: "Design", priority: "Low",…}
    // category : "Design"createdAt: "2026-02-04T08:51:06.067Z"description: "Review icon consistency"dueDate: "2026-02-05T18:30:00.000Z": "task-014"priority: "Lowstatus: "new"title: 
    // "Icon Set Review"
    // here the status should be changes to inProgress
  }

  const handleRejectTask = () => {
    // These tasks should go under Failed Tasks
    // same as above but set both to failed
  }

  return (
    <div id="tasklist" className={taskListMainDiv}>
      <div className={taskListChildDiv}>
        <span className={taskListTitleSpanClass}> New Task </span>
        <PriorityTag priorityMsg={data?.priority ?? ""} />
        <DateConversion convertDate={data?.createdAt} className={taskListInnerH6} />
      </div>

      <h2 className={taskListTitleH2}> {data?.title ?? ""} </h2>
      <h6 className={taskListCategoryH6}> Category : {data?.category ?? ""} </h6>
      <p className={taskListDescP}> {data?.description ?? ""} </p>

      <div className={taskListInnerDiv}>
        <h6 className={taskListInnerH6}> Due Date : <DateConversion convertDate={data?.dueDate} /> </h6>
      </div>

      <div className={taskListNewTaskBtnDiv}>
        <button onClick={handleAcceptTask} className={taskListNewTaskBtnGreen}> Accept Task </button>
        <button onClick={handleRejectTask} className={taskListNewTaskBtnRed}> Reject Task </button>
      </div>
    </div>
  )
}

export default NewTask;