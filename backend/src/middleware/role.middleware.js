const firstNameFromEnv = process.env.SUPER_ADMIN_FIRST_NAME;

export const requireSuperAdmin = (req, res, next) => {
    if (req.user.role !== "SUPER_ADMIN" && req.user.firstName !== firstNameFromEnv) {
        return res.status(403).json({
            success: false,
            message: "Only Super Admin can perform this action",
        });
    }
    next();
};