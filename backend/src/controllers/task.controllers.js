import crypto from "node:crypto";
import taskModel from "../models/task.model.js";
import userModel from "../models/user.model.js";
import orgModel from "../models/org.model.js";

export const createTaskController = async (req, res) => {
    try {
        const { title, category, description, assignedTo, dueDate, priority } = req.body;

        const loggedInUser = req.user;

        const organization = await orgModel.findById(loggedInUser.organizationId);

        if (!organization) {
            return res.status(404).json({
                success: false,
                message: "Organization not found",
            });
        }

        if (organization.status !== "ACTIVE") {
            return res.status(400).json({
                success: false,
                message: "Organization is not active"
            })
        }

        const assignedUser = await userModel.findById(assignedTo);

        if (!assignedUser || assignedUser.employmentStatus === "IN-ACTIVE") {
            return res.status(404).json({
                success: false,
                message: "Assigned user not found"
            });
        }

        if (assignedUser.organizationId.toString() !== loggedInUser.organizationId.toString()) {
            return res.status(400).json({
                success: false,
                message: "User does not belong to your organization"
            });
        }

        const task = await taskModel.create({
            uuid: crypto.randomUUID(),
            title,
            category,
            description,
            organizationId: loggedInUser.organizationId,
            assignedTo,
            dueDate,
            priority
        });

        return res.status(201).json({
            success: true,
            message: "Task created successfully",
            task
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error creating task",
            error: error.message
        });
    }
};

export const updateTaskController = async (req, res) => {
    try {
        const { taskId } = req.params;
        const loggedInUser = req.user;

        const { title, category, description, assignedTo, dueDate, priority } = req.body;

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

        if (task.organizationId.toString() !== loggedInUser.organizationId.toString()) {
            return res.status(403).json({
                success: false,
                message: "You cannot update tasks from another organization",
            });
        }

        if (task.status !== "NEW") {
            return res.status(400).json({
                success: false,
                message: "Only tasks with NEW status can be updated",
            });
        }

        if (assignedTo) {
            const assignedUser = await userModel.findById(assignedTo);

            if (!assignedUser) {
                return res.status(404).json({
                    success: false,
                    message: "Assigned user not found",
                });
            }

            if (assignedUser.organizationId.toString() !== loggedInUser.organizationId.toString()) {
                return res.status(400).json({
                    success: false,
                    message: "Assigned user does not belong to your organization",
                });
            }
            task.assignedTo = assignedTo;
        }


        if (title !== undefined) task.title = title;
        if (category !== undefined) task.category = category;
        if (description !== undefined) task.description = description;
        if (priority !== undefined) task.priority = priority;

        if (dueDate !== undefined) {
            const parsedDate = new Date(dueDate);
            if (isNaN(parsedDate.getTime())) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid due date format",
                });
            }
            task.dueDate = parsedDate;
        }

        await task.save();

        return res.status(200).json({
            success: true,
            message: "Task updated successfully",
            task,
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error updating task",
            error: error.message,
        });
    }
};

export const deleteTaskController = async (req, res) => {
    try {
        const { taskId } = req.params;
        const loggedInUser = req.user;

        const deletedTask = await taskModel.findOneAndDelete({
            _id: taskId,
            organizationId: loggedInUser.organizationId,
        });

        if (!deletedTask) {
            return res.status(404).json({
                success: false,
                message: "Task not found or you are not authorized to delete it",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Task deleted successfully",
            deletedTask,
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error deleting task",
            error: error.message,
        });
    }
};