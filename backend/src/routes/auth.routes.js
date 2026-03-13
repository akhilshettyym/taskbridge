import express from "express";
import { createOrganizationController } from "../controllers/AuthControllers/createOrganization.controller.js";
import { userLoginController } from "../controllers/AuthControllers/userLogin.controller.js";
import { userLogoutController } from "../controllers/AuthControllers/userLogout.controller.js";

const router = express.Router();

/* POST /api/auth/create-org */
router.post("/create-org", createOrganizationController);

/* POST /api/auth/login */
router.post("/login", userLoginController);

/* POST /api/auth/logout */
router.post("/logout", userLogoutController);

export default router;