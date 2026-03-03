import express from "express";
import protect from "../middleware/auth.middleware.js";
import allowRoles from "../middleware/role.middleware.js";
import { addEmployeeController } from "../controllers/employee.controllers.js";

const router = express.Router();

router.post("/add-employee", protect, allowRoles("ADMIN"), addEmployeeController );

export default router;