const TaskCount = ({ taskCount = 0, taskFail, taskComplete }) => {

    let bgColor = "bg-green-500";

    if (taskFail?.failed > 0) {
        bgColor = "bg-red-600";
    }
    else if (taskComplete?.completed >= 1) {
        bgColor = taskComplete.completed <= 1 ? "bg-yellow-300" : "bg-green-500";
    }
    else if (taskCount > 4 && taskCount < 5) {
        bgColor = "bg-orange-400";
    }
    else if (taskCount > 2 && taskCount <= 4) {
        bgColor = "bg-yellow-300";
    }
    else if (taskCount >= 6) {
        bgColor = "bg-red-600";
    }

    return (
        <span className={`h-6 w-6 flex items-center justify-center rounded-full ${bgColor} text-[#0F1412] text-xs font-semibold ml-2`}>
            {taskCount}
        </span>
    );
};

export default TaskCount;