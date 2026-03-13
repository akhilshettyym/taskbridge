import express from "express";
import { PERMISSIONS } from "../constants/permissions.js";
import authMiddleware from "../middleware/auth.middleware.js";
import { requirePermission } from "../middleware/permission.middleware.js";
import { requireAdmin } from "../middleware/role.middleware.js";
import { addEmployeeController } from "../controllers/EmployeeControllers/addEmployee.controller.js";
import { updateEmployeeController } from "../controllers/EmployeeControllers/updateEmployee.controller.js";
import { deactivateEmployeeController } from "../controllers/EmployeeControllers/deactivateEmployee.controller.js";
import { reactivateEmployeeController } from "../controllers/EmployeeControllers/reactivateEmployee.controller.js";
import { getOrganizationUsers } from "../controllers/EmployeeControllers/getOrgUsers.controller.js";
import { getOrganizationInactiveUsers } from "../controllers/EmployeeControllers/getOrgInactiveUsers.controller.js";

const router = express.Router();

/* POST /api/employee/add-employee */
router.post("/add-employee", authMiddleware, requirePermission(PERMISSIONS.CREATE_EMPLOYEE), addEmployeeController);

/* PATCH /api/employee/update-employee/:employeeId */
router.patch("/update-employee/:employeeId", authMiddleware, requirePermission(PERMISSIONS.UPDATE_EMPLOYEE), updateEmployeeController);

/* PATCH /api/employee/deactivate-employee/:empId */
router.patch("/deactivate-employee/:empId", authMiddleware, requireAdmin, requirePermission(PERMISSIONS.DEACTIVATE_EMPLOYEE), deactivateEmployeeController);

/* PATCH /api/employee/reactivate-employee/:empId */
router.patch("/reactivate-employee/:empId", authMiddleware, requireAdmin, requirePermission(PERMISSIONS.REACTIVATE_EMPLOYEE), reactivateEmployeeController);


/* GET /api/employee/get-employees */
router.get("/get-employees", authMiddleware, requirePermission(PERMISSIONS.VIEW_EMPLOYEES), getOrganizationUsers);

/* GET /api/employee/get-inactive-employees */
router.get("/get-inactive-employees", authMiddleware, requirePermission(PERMISSIONS.VIEW_EMPLOYEES), getOrganizationInactiveUsers);

export default router;