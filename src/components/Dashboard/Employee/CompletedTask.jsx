import TaskCard from "./TaskCard";

const CompletedTask = ({ data }) => {

  const completedTask = data?.tasks?.filter((e) => e.status === "completed") || [];

  return (
    <section className="w-full">
      <h2 className="mb-6 text-lg font-semibold text-[#FFDAB3] uppercase"> Completed Tasks </h2>
      <div className="bg-[#1B211A] rounded-2xl p-6 border border-[#FFDAB3]/25">
        {completedTask.length === 0 ? (
          <div className="text-center py-12 text-[#F8F8F2]/60 text-lg"> No completed tasks. </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {completedTask.map((task) => (
              <TaskCard key={task.id || task._id} task={task} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
export default CompletedTask;