import cron from "node-cron";
import userModel from "../models/user.model.js";

const startInactiveEmployeeCleanupJob = () => {

    cron.schedule("0 0 * * *", async () => {

        try {
            const thirtyDaysAgo = new Date();
            thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

            const result = await userModel.deleteMany({
                employmentStatus: "IN-ACTIVE",
                employmentStatusChangedAt: { $lte: thirtyDaysAgo },
                role: { $ne: "ADMIN" }
            });

            if (result.deletedCount > 0) {
                console.log(`${result.deletedCount} inactive employees permanently deleted`);
            }

        } catch (error) {
            console.error("Inactive employee cleanup cron failed:", error.message);
        }
    });
};

export default startInactiveEmployeeCleanupJob;