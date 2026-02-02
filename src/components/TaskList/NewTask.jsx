import { taskListCategoryH6, taskListChildDiv, taskListDateSpanClass, taskListDescP, taskListInnerDiv, taskListInnerH6, taskListMainDiv, taskListNewTaskBtnDiv, taskListNewTaskBtnGreen, taskListNewTaskBtnRed, taskListTitleH2, taskListTitleSpanClass, PriorityTag } from "../../constants/imports";

const NewTask = ({ data }) => {

  return (
    <div id="tasklist" className={taskListMainDiv}>
      <div className={taskListChildDiv}>
        <span className={taskListTitleSpanClass}> New Task </span>
        <PriorityTag priorityMsg={data?.priority || ""} />
        <span className={taskListInnerH6}> {data?.dateCreated || ""} </span>
      </div>

      <h2 className={taskListTitleH2}> {data?.title || ""} </h2>
      <h6 className={taskListCategoryH6}> Category : {data?.category || ""} </h6>
      <p className={taskListDescP}> {data?.description || ""} </p>

      <div className={taskListInnerDiv}>
        <h6 className={taskListInnerH6}> Due Date : {data?.dueDate || ""} </h6>
      </div>

      <div className={taskListNewTaskBtnDiv}>
        <button className={taskListNewTaskBtnGreen}> Accept Task </button>
        <button className={taskListNewTaskBtnRed}> Reject Task </button>
      </div>
    </div>
  )
}

export default NewTask;