import userModel from "../models/user.model.js";
import { ROLE_PERMISSIONS } from "../constants/permissions.js";

export const createSuperAdmin = async () => {
    try {
        const firstNameFromEnv = process.env.SUPER_ADMIN_FIRST_NAME;
        const emailFromEnv = process.env.SUPER_ADMIN_EMAIL.toLowerCase();
        const passwordFromEnv = process.env.SUPER_ADMIN_PASSWORD;

        if (!emailFromEnv || !passwordFromEnv) {
            console.log("SUPER_ADMIN credentials missing");
            return;
        }

        const existingSuperAdmin = await userModel.findOne({ role: "SUPER_ADMIN" });

        if (!existingSuperAdmin) {
            await userModel.create({
                firstName: firstNameFromEnv,
                lastName: "SHETTY",
                email: emailFromEnv,
                password: passwordFromEnv,
                role: "SUPER_ADMIN",
                dateOfBirth: new Date("2003-03-29"),
                designation: "Platform Owner",
                organizationId: null,
                permissions: ROLE_PERMISSIONS["SUPER_ADMIN"] || []
            });

            console.log("Super Admin created");
        } else {
            existingSuperAdmin.firstName = firstNameFromEnv;
            existingSuperAdmin.email = emailFromEnv;
            existingSuperAdmin.password = passwordFromEnv;
            await existingSuperAdmin.save();

            console.log("Super Admin updated");
        }

    } catch (error) {
        console.error("Error creating/updating super admin:", error);
    }
};