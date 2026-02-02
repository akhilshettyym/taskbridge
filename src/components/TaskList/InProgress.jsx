import { taskListCategoryH6, taskListChildDiv, taskListDateSpanClass, taskListDescP, taskListInnerDiv, taskListInnerH6, taskListInProBtnDiv, taskListInProBtnGreen, taskListInProBtnRed, taskListMainDiv, taskListTitleH2, taskListTitleSpanClass, PriorityTag } from "../../constants/imports";

const InProgress = ({ data }) => {

  return (
    <div id="tasklist" className={taskListMainDiv}>
      <div className={taskListChildDiv}>
        <span className={taskListTitleSpanClass}> Task In Progress </span>
        <PriorityTag priorityMsg={data?.priority || ""} />
        <span className={taskListInnerH6}> {data?.dateCreated || ""} </span>
      </div>

      <h2 className={taskListTitleH2}> {data?.title || ""} </h2>
      <h6 className={taskListCategoryH6}> Category : {data?.category || ""} </h6>
      <p className={taskListDescP}> {data?.description || ""} </p>

      <div className={taskListInnerDiv}>
        <h6 className={taskListInnerH6}> Due Date : {data?.dueDate || ""} </h6>
      </div>

      <div className={taskListInProBtnDiv}>
        <button className={taskListInProBtnGreen}> Mark as Completed </button>
        <button className={taskListInProBtnRed}> Mark as Failed </button>
      </div>
    </div>
  );
};

export default InProgress;