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
        <hr className="my-5 border border-[#FFDAB3]/40" />
        <h1 className="mt-5 font-bold text-[#FFDAB3] text-xl uppercase flex flex-col items-center"> Task Status </h1>
        <hr className="my-5 border border-[#FFDAB3]/40" />

        {employees.length === 0 ? (
          <p className="mt-5 text-[#F8F8F2]/70"> No employees or tasks found. </p>
        ) : (
          employees.map((emp) => (
            <div key={emp.id} className="mt-5">

              <div className="bg-[#1B211A] rounded-2xl p-4 border border-[#FFDAB3]/25">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {emp.tasks?.length === 0 ? (
                    <div className="col-span-full text-center py-8 text-[#F8F8F2]/60"> No tasks assigned yet </div>
                  ) : (
                    emp.tasks.map((task) => (
                      <div key={task.id} className="bg-[#FFDAB3]/10 rounded-2xl border border-[#FFDAB3]/30 hover:border-2 border-[#FFDAB3]/50 transition-colors flex flex-col h-full">
                        <div className="px-2 py-2 border-b border-[#FFDAB3]/20">
                          <div className="flex items-center justify-between gap-2 px-4 py-2 bg-[#1B211A] rounded-2xl border border-[#FFDAB3]/25">
                            <h3 className="text-[#FFDAB3] font-medium text-md leading-tight line-clamp-2 flex-1 uppercase"> {task.title} </h3>
                            <PriorityTag priorityMsg={task.priority} />
                          </div>
                        </div>

                        <div className="px-4 py-3 flex-1 flex flex-col gap-2 text-[#F8F8F2]/80">
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-[#F8F8F2]/80 uppercase">Status</span>
                            <span className={`px-4 rounded-2xl text-sm font-bold uppercase border ${{
                              pending: "bg-amber-100 text-amber-700 border-amber-200",
                              "in-progress": "bg-blue-100 text-blue-700 border-blue-200",
                              completed: "bg-emerald-100 text-emerald-700 border-emerald-200"
                            }[task.status] ||
                              "bg-gray-100 text-gray-600 border-gray-200"}`}>
                              {task.status}
                            </span>
                          </div>

                          <div className="flex justify-between text-sm text-[#F8F8F2]/60">
                            <span className="font-medium text-[#F8F8F2]/80">Category :</span>
                            <span className="font-medium text-[#FFDAB3]"> {task.category} </span>
                          </div>

                          <div className="flex justify-between text-sm text-[#F8F8F2]/60">
                            <span className="font-medium text-[#F8F8F2]/80"> Created :{" "} <span className="font-medium text-[#FFDAB3]"><DateConversion convertDate={task?.createdAt} /></span> </span>
                            <span className="font-medium text-[#F8F8F2]/80"> Due :{" "} <span className="font-medium text-[#FFDAB3]"><DateConversion convertDate={task?.dueDate} /></span></span>
                          </div>

                          <div className="text-sm leading-relaxed">
                            <span className="font-medium text-[#F8F8F2]/80">Description :</span>
                            <span className="ml-2 text-[#FFDAB3]">
                              {task?.description || "No description provided"}
                            </span>
                          </div>

                          <div className="text-sm text-[#F8F8F2]/70 leading-relaxed">
                            <span>
                              Assigned to : {" "}
                              <strong className="text-[#FFDAB3]/90 text-md uppercase">
                                {employees.find(e => e.id === task.assignedTo)?.firstName || "Unassigned"}{" "}
                                {employees.find(e => e.id === task.assignedTo)?.lastName || ""}
                              </strong>
                            </span>
                          </div>
                        </div>

                        <div className="border-[#FFDAB3]/20 items-center justify-between text-xs" >
                          <div className="px-2 py-2 border-b border-[#FFDAB3]/20">
                            <div className="flex items-center justify-between gap-2 px-4 py-2 bg-[#1B211A] rounded-2xl border border-[#FFDAB3]/25">
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