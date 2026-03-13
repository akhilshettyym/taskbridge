import userModel from "../../models/user.model.js";

export const reactivateEmployeeController = async (req, res) => {

    try {
        const { empId } = req.params;
        const { organizationId } = req.user;

        if (!empId) {
            return res.status(400).json({
                success: false,
                message: "Invalid employee ID"
            });
        }

        const employee = await userModel.findOne({
            _id: empId,
            organizationId
        });

        if (!employee)
            return res.status(404).json({
                success: false,
                message: "Employee not found or not authorized"
            });

        if (employee.role === "ADMIN")
            return res.status(400).json({
                success: false,
                message: "Cannot reactivate organization admin"
            });

        if (employee.employmentStatus === "ACTIVE")
            return res.status(400).json({
                success: false,
                message: "Employee is already active"
            });

        employee.employmentStatus = "ACTIVE";
        await employee.save();

        return res.status(200).json({
            success: true,
            message: "Employee reactivated successfully"
        });

    } catch (error) {
        console.error("Reactivate employee error:", error);

        return res.status(500).json({
            success: false,
            message: "Error reactivating employee"
        });
    }
};