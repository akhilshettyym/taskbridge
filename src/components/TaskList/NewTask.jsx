const NewTask = () => {
  return (
    <div id="tasklist" className="h-[85%] w-90 p-6 bg-[#1B211A] rounded-2xl border border-[#FFDAB3]/30 shadow-md py-5 mt-10">
      <div className="flex justify-between items-center">
        <span className="text-xs px-4 py-1 rounded-full bg-[#FFDAB3]/15 text-[#FFDAB3] uppercase tracking-wide"> Low </span>
        <span className="text-xs text-[#F8F8F2]/70"> 29 Oct 1967 </span>
      </div>

      <h2 className="mt-5 text-xl font-semibold text-[#F8F8F2]"> PartyTown implementation... </h2>
      <p className="text-sm mt-3 text-[#F8F8F2]/70 leading-relaxed"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>

      <div className="flex justify-between mt-10">
        <button className="bg-green-500 py-2 px-2 text-sm rounded-md w-full"> Accept Task </button>
        {/* <button className="bg-red-500 py-1 px-2 text-sm rounded-md"> Mark as Failed </button> */}
        {/* Reject task can be added or reason for rejection */}
      </div>
    </div>
  )
}

export default NewTask;