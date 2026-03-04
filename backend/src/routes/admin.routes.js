import express from "express";
import { PERMISSIONS } from "../constants/permissions.js";
import authMiddleware from "../middleware/auth.middleware.js";
import { requirePermission } from "../middleware/permission.middleware.js";
import { reviewTaskRejectionController, updateAdminController } from "../controllers/admin.controllers.js";

const router = express.Router();

/* PATCH /api/admin/update-admin/:adminId */
router.patch("/update-admin/:adminId", authMiddleware, requirePermission(PERMISSIONS.UPDATE_ADMIN), updateAdminController);

/* PATCH /api/admin/review-task-rejection/:taskId */
router.patch("/review-task-rejection/:taskId", authMiddleware, reviewTaskRejectionController);

export default router;