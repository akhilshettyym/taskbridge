import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import { requireSuperAdmin } from "../middleware/role.middleware.js";
import { approveOrganization, reactivateOrganization, rejectOrganization, revokeOrganization } from "../controllers/organization.controller.js";

const router = express.Router();

/* PATCH /api/org/approve/:orgId */
router.patch("/approve/:orgId", authMiddleware, requireSuperAdmin, approveOrganization);

/* PATCH /api/org/reject/:orgId */
router.patch("/reject/:orgId", authMiddleware, requireSuperAdmin, rejectOrganization);

/* PATCH /api/org/revoke/:orgId */
router.patch("/revoke/:orgId", authMiddleware, requireSuperAdmin, revokeOrganization);

/* PATCH /api/org/re-activate/:orgId */
router.patch("/re-activate/:orgId", authMiddleware, requireSuperAdmin, reactivateOrganization);

export default router;