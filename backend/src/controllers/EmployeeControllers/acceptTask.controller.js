import taskModel from "../../models/task.model.js";

export const acceptTaskController = async (req, res) => {

    try {
        const { taskId } = req.params;
        const loggedInUser = req.user;

        const task = await taskModel.findOne({
            _id: taskId,
            organizationId: loggedInUser.organizationId,
        });

        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found",
            });
        }

        if (task.assignedTo.toString() !== loggedInUser._id.toString()) {
            return res.status(403).json({
                success: false,
                message: "You are not authorized to accept this task",
            });
        }

        if (task.status !== "NEW") {
            return res.status(400).json({
                success: false,
                message: "Only NEW tasks can be accepted",
            });
        }

        task.status = "IN_PROGRESS";

        await task.save();

        return res.status(200).json({
            success: true,
            message: "Task accepted and moved to IN_PROGRESS",
            task,
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error accepting the task",
            error: error.message,
        });
    }
};