import { taskListCategoryH6, taskListChildDiv, taskListCompBtnClass, taskListCompBtnDiv, taskListDateSpanClass, taskListDescP, taskListInnerDiv, taskListInnerH6, taskListMainDiv, taskListTitleH2, taskListTitleSpanClass, PriorityTag } from "../../constants/imports";
import DateConversion from "../Basics/DateConversion";

const CompletedTask = ({ data }) => {

  return (
    <div id="tasklist" className={taskListMainDiv}>
      <div className={taskListChildDiv}>
        <span className={taskListTitleSpanClass}> Completed Task </span>
        <PriorityTag priorityMsg={data?.priority} />
        <DateConversion convertDate={data?.createdAt} className={taskListInnerH6} />
      </div>

      <h2 className={taskListTitleH2}> {data?.title ?? ""} </h2>
      <h6 className={taskListCategoryH6}> Category : {data?.category ?? ""} </h6>
      <p className={taskListDescP}> {data?.description ?? ""} </p>

      <div className={taskListInnerDiv}>
        <h6 className={taskListInnerH6}> Due Date : <DateConversion convertDate={data?.dueDate}/> </h6>
      </div>

      <div className={taskListCompBtnDiv}>
        <button className={taskListCompBtnClass}> Completed </button>
      </div>
    </div>
  )
}

export default CompletedTask;