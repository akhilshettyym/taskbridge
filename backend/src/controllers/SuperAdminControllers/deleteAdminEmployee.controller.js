import userModel from "../../models/user.model.js";

export const deleteAdminEmployeeController = async (req, res) => {
    try {
        const { empId } = req.params;

        if (!empId) {
            return res.status(400).json({
                success: false,
                message: "Employee/Admin ID is required",
            });
        }

        const user = await userModel.findById(empId);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        if (user.role !== "ADMIN" && user.role !== "EMPLOYEE") {
            return res.status(403).json({
                success: false,
                message: "You can only delete ADMIN or EMPLOYEE",
            });
        }

        if (user.employmentStatus !== "IN-ACTIVE") {
            return res.status(403).json({
                success: false,
                message: "User must be IN-ACTIVE to be deleted",
            });
        }

        await userModel.findByIdAndDelete(empId);

        return res.status(200).json({
            success: true,
            message: "User deleted successfully",
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server error while deleting user",
            error: error.message,
        });
    }
};