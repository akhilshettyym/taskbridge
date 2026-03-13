import express from "express";
import { PERMISSIONS } from "../constants/permissions.js";
import authMiddleware from "../middleware/auth.middleware.js";
import { requirePermission } from "../middleware/permission.middleware.js";
import { requireAdmin, requireEmployee } from "../middleware/role.middleware.js";
import { createTaskController } from "../controllers/TaskControllers/createTask.controller.js";
import { updateTaskController } from "../controllers/TaskControllers/updateTask.controller.js";
import { deleteTaskController } from "../controllers/TaskControllers/deleteTask.controller.js";
import { acceptTaskController } from "../controllers/TaskControllers/acceptTask.controller.js";
import { requestTaskRejectionController } from "../controllers/TaskControllers/requestTaskRejection.controller.js";
import { markTaskAsCompletedController } from "../controllers/TaskControllers/markTaskAsCompleted.controller.js";
import { markTaskAsFailedController } from "../controllers/TaskControllers/markTaskAsFailed.controller.js";
import { getTaskDetailsController } from "../controllers/TaskControllers/getTaskDetails.controller.js";

const router = express.Router();

/* POST /api/tasks/create-task */
router.post("/create-task", authMiddleware, requireAdmin, requirePermission(PERMISSIONS.CREATE_TASK), createTaskController);

/* PATCH /api/tasks/update-task/:taskId */
router.patch("/update-task/:taskId", authMiddleware, requireAdmin, requirePermission(PERMISSIONS.UPDATE_TASK), updateTaskController);

/* DELETE /api/tasks/delete-task/:taskId */
router.delete("/delete-task/:taskId", authMiddleware, requireAdmin, requirePermission(PERMISSIONS.DELETE_TASK), deleteTaskController);

/* PATCH /api/tasks/accept-task/:taskId */
router.patch("/accept-task/:taskId", authMiddleware, requireEmployee, requirePermission(PERMISSIONS.ACCEPT_TASK), acceptTaskController);

/* PATCH /api/tasks/reject-task/:taskId */
router.patch("/reject-task/:taskId", authMiddleware, requireEmployee, requirePermission(PERMISSIONS.REQUEST_REJECT_TASK), requestTaskRejectionController);

/* PATCH /api/tasks/mark-as-completed/:taskId */
router.patch("/mark-as-completed/:taskId", authMiddleware, requireEmployee, requirePermission(PERMISSIONS.MARK_AS_COMPLETED), markTaskAsCompletedController);

/* PATCH /api/tasks/mark-as-failed/:taskId */
router.patch("/mark-as-failed/:taskId", authMiddleware, requireEmployee, requirePermission(PERMISSIONS.MARK_AS_FAILED), markTaskAsFailedController);


/* GET /api/tasks/get-tasks-details */
router.get("/get-tasks-details", authMiddleware, requirePermission(PERMISSIONS.VIEW_TASKS), getTaskDetailsController);

export default router;