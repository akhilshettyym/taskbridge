import PriorityTag from "../Basics/PriorityTag";

const NewTask = ({ data }) => {
  console.log("data", data);
  return (
    <div id="tasklist" className="h-[85%] w-100 p-6 bg-[#1B211A] rounded-2xl border border-[#FFDAB3]/30 shadow-md py-5 mt-10">
      <div className="flex justify-between items-center">
        <span className="text-xs px-4 py-1 rounded-sm bg-[#DCD9D6]/15 text-[#ffffff] tracking-wide"> New Task </span>
        <PriorityTag priorityMsg={data?.priority || ""} />
        <span className="text-xs text-[#F8F8F2]/70"> {data?.dateCreated || ""} </span>
      </div>

      <h2 className="mt-5 text-xl font-semibold text-[#F8F8F2]"> {data?.title || ""} </h2>
      <h6 className="mt-1 text-sm text-[#F8F8F2]"> Category : {data?.category || ""} </h6>
      <p className="text-sm mt-3 text-[#F8F8F2]/70 leading-relaxed"> {data?.description || ""} </p>

      <div className="mt-5 text-right">
        <h6 className="text-xs text-[#F8F8F2]/70"> Due Date : {data?.dueDate || ""} </h6>
      </div>

      <div className="flex justify-between mt-5">
        <button className="bg-green-500 py-2 px-2 text-sm w-1/2 mr-1 rounded-md"> Accept Task </button>
        <button className="bg-red-500 py-2 px-2 text-sm  w-1/2 ml-1 rounded-md"> Reject Task </button>
      </div>
    </div>
  )
}

export default NewTask;