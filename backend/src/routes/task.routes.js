import express from "express";
import { PERMISSIONS } from "../constants/permissions.js";
import authMiddleware from "../middleware/auth.middleware.js";
import { createTaskController, deleteTaskController, updateTaskController } from "../controllers/task.controllers.js";
import { requirePermission } from "../middleware/permission.middleware.js";

const router = express.Router();

/* POST /api/tasks/create-task */
router.post("/create-task", authMiddleware, requirePermission(PERMISSIONS.CREATE_TASK), createTaskController);

/* PATCH /api/tasks/update-task/:taskId */
router.patch("/update-task/:taskId", authMiddleware, requirePermission(PERMISSIONS.UPDATE_TASK), updateTaskController);

/* DELETE /api/tasks/delete-task/:taskId */
router.delete("/delete-task/:taskId", authMiddleware, requirePermission(PERMISSIONS.DELETE_TASK), deleteTaskController);

export default router;