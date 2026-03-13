import userModel from "../../models/user.model.js";

export const deactivateEmployeeController = async (req, res) => {

    try {
        const { empId } = req.params;
        const loggedInUser = req.user;

        const employee = await userModel.findOne({
            _id: empId,
            organizationId: loggedInUser.organizationId,
        });

        if (!employee) {
            return res.status(404).json({
                success: false,
                message: "Employee not found or not authorized",
            });
        }

        if (employee.role === "ADMIN") {
            return res.status(400).json({
                success: false,
                message: "Cannot remove organization admin",
            });
        }

        if (employee.employmentStatus === "IN-ACTIVE") {
            return res.status(400).json({
                success: false,
                message: "Employee already removed",
            });
        }

        employee.employmentStatus = "IN-ACTIVE";
        employee.employmentStatusChangedAt = new Date();
        await employee.save();

        return res.status(200).json({
            success: true,
            message: "Employee removed successfully",
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error removing employee",
            error: error.message,
        });
    }
};