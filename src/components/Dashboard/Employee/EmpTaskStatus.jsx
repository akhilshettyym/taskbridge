import Header from "../../Basics/Header";
import EmployeeControl from "./EmployeeControl";
import TaskCard from "./TaskCard";
import TaskListNo from "./TaskListNo";

const EmpTaskStatus = ({ data, handleLogout, orgData }) => {

  if (!data?.tasks?.length) {
    return (
      <div className="py-12 text-center text-[#F8F8F2]/50 text-lg"> No tasks found </div>
    );
  }

  return (
    <div className="h-screen w-full p-10">
      <Header data={data} handleLogout={handleLogout} orgData={orgData} />
      <EmployeeControl />

      <hr className="my-5 border border-[#FFDAB3]/40" />
      <h1 className="mt-5 font-bold text-[#FFDAB3] text-xl uppercase flex flex-col items-center"> Task Status </h1>
      <hr className="my-5 border border-[#FFDAB3]/40" />
      
      <TaskListNo data={data} />

      <div className="mt-5 mb-5 bg-[#1B211A] rounded-xl p-4 border border-[#FFDAB3]/25">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {data.tasks.map((task) => (
            <TaskCard key={task.id || task._id || Math.random()} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmpTaskStatus;