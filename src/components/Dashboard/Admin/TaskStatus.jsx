import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import Header from "../../Basics/Header";
import AdminControl from "./AdminControl";
import PriorityTag from "../../Basics/PriorityTag";
import DateConversion from "../../Basics/DateConversion";
import RemoveTask from "../../Basics/RemoveTask";

const TaskStatus = ({ data, handleLogout, orgData }) => {
  const authData = useContext(AuthContext);
  const employees = authData?.employees ?? [];

  return (
    <div className="h-screen w-full p-10 overflow-auto">
      <Header data={data} handleLogout={handleLogout} orgData={orgData} />
      <AdminControl />

      <div className="pb-10">
        <h1 className="mt-5 font-semibold text-[#FFDAB3] text-xl uppercase"> Tasks Status </h1>

        {employees.length === 0 ? (
          <p className="mt-5 text-[#F8F8F2]/70"> No employees or tasks found. </p>
        ) : (
          employees.map((emp) => (
            <div key={emp.id} className="mt-5">
              <div className="flex items-center gap-4 mb-5">
                <hr className="flex-1 border border-[#FFDAB3]/40" />
              </div>

              <div className="bg-[#1B211A] rounded-xl p-4 border border-[#FFDAB3]/25">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {emp.tasks?.length === 0 ? (
                    <div className="col-span-full text-center py-8 text-[#F8F8F2]/60"> No tasks assigned yet </div>
                  ) : (
                    emp.tasks.map((task) => (
                      <div key={task.id} className="bg-[#FFDAB3]/10 rounded-xl border border-[#FFDAB3]/30 hover:border-[#FFDAB3]/50 transition-colors flex flex-col h-full">
                        <div className="px-2 py-2 border-b border-[#FFDAB3]/20">
                          <div className="flex items-center justify-between gap-2 px-4 py-2 bg-[#1B211A] rounded-lg border border-[#FFDAB3]/25">
                            <h3 className="text-[#FFDAB3] font-medium text-md leading-tight line-clamp-2 flex-1 uppercase"> {task.title} </h3>
                            <PriorityTag priorityMsg={task.priority} />
                          </div>
                        </div>

                        <div className="px-4 py-4 flex-1 flex flex-col gap-3 text-md text-[#F8F8F2]/80">
                          <div className="flex justify-between items-center uppercase">
                            <span>Status</span>
                            <span className={`px-6 py-1 rounded-full text-sm font-bold uppercase border ${{
                              pending: "bg-amber-100 text-amber-700 border-amber-200",
                              "in-progress": "bg-blue-100 text-blue-700 border-blue-200",
                              completed: "bg-emerald-100 text-emerald-700 border-emerald-200"
                            }[task.status] ||
                              "bg-gray-100 text-gray-600 border-gray-200"}`} >
                              {task.status}
                            </span>
                          </div>

                          <div className="flex justify-between">
                            <span>Category</span>
                            <span className="font-medium capitalize text-[#FFDAB3]"> {task.category} </span>
                          </div>

                          <div className="flex justify-between text-sm text-[#F8F8F2]/60">
                            <span> Created:{" "} <DateConversion convertDate={task?.createdAt} /> </span>
                            <span> Due:{" "} <DateConversion convertDate={task?.dueDate} /> </span>
                          </div>

                          <div className="text-sm text-[#F8F8F2]/70 leading-relaxed">
                            <span className="block text-[#FFDAB3]/80"> Description </span>
                            {task?.description || "No description provided"}
                          </div>
                        </div>
                        <div className="border-[#FFDAB3]/20 items-center justify-between text-xs" >
                          <div className="px-2 py-2 border-b border-[#FFDAB3]/20">
                            <div className="flex items-center justify-between gap-2 px-4 py-2 bg-[#1B211A] rounded-lg border border-[#FFDAB3]/25">
                              <span className="text-[#F8F8F2]/60 text-sm"> Task ID: {task.id} </span>
                              <RemoveTask taskId={task.id} />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );

};

export default TaskStatus;