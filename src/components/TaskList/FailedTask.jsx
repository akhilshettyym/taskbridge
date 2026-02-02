import { taskListCategoryH6, taskListChildDiv, taskListDateSpanClass, taskListDescP, taskListFailedBtnClass, taskListFailedBtnDiv, taskListInnerDiv, taskListInnerH6, taskListMainDiv, taskListTitleH2, taskListTitleSpanClass, PriorityTag } from "../../constants/imports";

const FailedTask = ({ data }) => {

  return (
    <div id="tasklist" className={taskListMainDiv}>
      <div className={taskListChildDiv}>
        <span className={taskListTitleSpanClass}> Failed Task </span>
        <PriorityTag priorityMsg={data?.priority || ""} />
        <span className={taskListDateSpanClass}> {data?.dateCreated || ""} </span>
      </div>

      <h2 className={taskListTitleH2}> {data?.title || ""} </h2>
      <h6 className={taskListCategoryH6}> Category : {data?.category || ""} </h6>
      <p className={taskListDescP}> {data?.description || ""} </p>

      <div className={taskListInnerDiv}>
        <h6 className={taskListInnerH6}> Due Date : {data?.dueDate || ""} </h6>
      </div>

      <div className={taskListFailedBtnDiv}>
        <button className={taskListFailedBtnClass}> Failed </button>
      </div>
    </div>
  )
}

export default FailedTask;