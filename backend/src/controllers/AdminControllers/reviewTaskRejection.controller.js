import taskModel from "../../models/task.model.js";

export const reviewTaskRejectionController = async (req, res) => {
    
    try {
        const { taskId } = req.params;
        const { decision, adminReason, reassignTo } = req.body;
        const loggedInUser = req.user;

        if (loggedInUser.role !== "ADMIN") {
            return res.status(403).json({
                success: false,
                message: "Only admin can review rejection"
            });
        }

        const task = await taskModel.findOne({
            _id: taskId,
            organizationId: loggedInUser.organizationId
        });

        if (!task || task.status !== "REJECTION_REQUESTED") {
            return res.status(400).json({
                success: false,
                message: "No rejection pending for this task"
            });
        }

        if (decision === "APPROVED") {

            task.rejection.status = "APPROVED";

            if (reassignTo) {
                task.assignedTo = reassignTo;
                task.status = "NEW";
            } else {
                task.status = "FAILED";
            }

        } else if (decision === "REJECTED") {

            if (!adminReason) {
                return res.status(400).json({
                    success: false,
                    message: "Admin reason required"
                });
            }

            task.rejection.status = "REJECTED";
            task.rejection.adminReason = adminReason;

            task.status = "NEW";
        }

        task.rejection.reviewedBy = loggedInUser._id;
        task.rejection.reviewedAt = new Date();

        await task.save();

        return res.status(200).json({
            success: true,
            message: "Rejection reviewed successfully",
            task
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error reviewing rejection",
            error: error.message
        });
    }
};