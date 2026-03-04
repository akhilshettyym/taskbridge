import express from "express";
import { PERMISSIONS } from "../constants/permissions.js";
import authMiddleware from "../middleware/auth.middleware.js";
import { requirePermission } from "../middleware/permission.middleware.js";
import { addEmployeeController, deactivateEmployeeController } from "../controllers/employee.controllers.js";

const router = express.Router();

/* POST /api/employee/add-employee */
router.post("/add-employee", authMiddleware, requirePermission(PERMISSIONS.CREATE_EMPLOYEE), addEmployeeController);

/* PATCH /api/employee/deactivate-employee/:employeeId */
router.patch("/deactivate-employee/:employeeId", authMiddleware, requirePermission(PERMISSIONS.DEACTIVATE_EMPLOYEE), deactivateEmployeeController);

export default router;