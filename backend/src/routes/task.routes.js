import express from "express";
import { PERMISSIONS } from "../constants/permissions.js";
import authMiddleware from "../middleware/auth.middleware.js";
import { acceptTaskController, createTaskController, deleteTaskController, markAsCompletedController, requestTaskRejectionController, updateTaskController } from "../controllers/task.controllers.js";
import { requirePermission } from "../middleware/permission.middleware.js";

const router = express.Router();

/* POST /api/tasks/create-task */
router.post("/create-task", authMiddleware, requirePermission(PERMISSIONS.CREATE_TASK), createTaskController);

/* PATCH /api/tasks/update-task/:taskId */
router.patch("/update-task/:taskId", authMiddleware, requirePermission(PERMISSIONS.UPDATE_TASK), updateTaskController);

/* DELETE /api/tasks/delete-task/:taskId */
router.delete("/delete-task/:taskId", authMiddleware, requirePermission(PERMISSIONS.DELETE_TASK), deleteTaskController);

/* accept-task, reject-task,  mark-as-completed, mark-as-failed*/

/* PATCH /api/tasks/accept-task/:taskId */
router.patch("/accept-task/:taskId", authMiddleware, requirePermission(PERMISSIONS.ACCEPT_TASK), acceptTaskController);

/* PATCH /api/tasks/reject-task/:taskId */
router.patch("/reject-task/:taskId", authMiddleware, requirePermission(PERMISSIONS.REJECT_TASK), requestTaskRejectionController);

/* PATCH /api/tasks/mark-as-completed/:taskId */
router.patch("/mark-as-completed/:taskId", authMiddleware, requirePermission(PERMISSIONS.MARK_AS_COMPLETED), markAsCompletedController);

/* PATCH /api/tasks/mark-as-failed/:taskid */
// router.patch("/mark-as-failed/:taskId");

export default router;