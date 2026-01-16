const Createtask = () => {
    return (

        <div className="w-full flex justify-center py-10">
            <form className="w-full bg-[#1B211A] p-10 rounded-3xl border border-[#FFDAB3]/40 shadow-[0_0_40px_rgba(0,0,0,0.6)] flex flex-wrap gap-8">

                <div className="w-full md:w-[48%] flex flex-col gap-6">
                    <div>
                        <label className="text-sm uppercase tracking-wide text-[#FFDAB3]/80"> Task Title </label>
                        <input type="text" placeholder="Design dashboard UI" className="mt-2 w-full bg-[#0F1412] border border-[#FFDAB3]/30 rounded-xl px-4 py-3 text-[#F8F8F2] outline-none focus:border-[#FFDAB3] focus:ring-1 focus:ring-[#FFDAB3]/50 transition" />
                    </div>

                    <div>
                        <label className="text-sm uppercase tracking-wide text-[#FFDAB3]/80"> Due Date </label>
                        <input type="date" className="mt-2 w-full bg-[#0F1412] border border-[#FFDAB3]/30 rounded-xl px-4 py-3 text-[#F8F8F2] outline-none focus:border-[#FFDAB3] focus:ring-1 focus:ring-[#FFDAB3]/50 transition" />
                    </div>

                    <div>
                        <label className="text-sm uppercase tracking-wide text-[#FFDAB3]/80"> Assign To </label>
                        <input type="text" placeholder="Employee name" className="mt-2 w-full bg-[#0F1412] border border-[#FFDAB3]/30 rounded-xl px-4 py-3 text-[#F8F8F2] outline-none focus:border-[#FFDAB3] focus:ring-1 focus:ring-[#FFDAB3]/50 transition" />
                    </div>

                    <div>
                        <label className="text-sm uppercase tracking-wide text-[#FFDAB3]/80"> Category </label>
                        <input type="text" placeholder="Design, Development" className="mt-2 w-full bg-[#0F1412] border border-[#FFDAB3]/30 rounded-xl px-4 py-3 text-[#F8F8F2] outline-none focus:border-[#FFDAB3] focus:ring-1 focus:ring-[#FFDAB3]/50 transition" />
                    </div>

                </div>

                <div className="w-full md:w-[48%] flex flex-col">
                    <label className="text-sm uppercase tracking-wide text-[#FFDAB3]/80 mb-2"> Description </label>
                    <textarea rows="12" placeholder="Describe the task clearly so the employee understands expectations..." className="flex-1 bg-[#0F1412] border border-[#FFDAB3]/30 rounded-xl px-4 py-4 text-[#F8F8F2] outline-none resize-none focus:border-[#FFDAB3] focus:ring-1 focus:ring-[#FFDAB3]/50 transition" />
                </div>

                <div className="w-full flex justify-end pt-4">
                    <button className="bg-[#FFDAB3] text-[#1B211A] font-semibold px-10 py-3 rounded-full hover:brightness-110 active:scale-95 transition-all"> Create Task </button>
                </div>

            </form>
        </div>
    )
}

export default Createtask;