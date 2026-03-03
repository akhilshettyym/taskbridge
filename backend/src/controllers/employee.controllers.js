import userModel from "../models/user.model.js";

const addEmployeeController = async (req, res) => {
    try {
        const { firstName, lastName, email, password, dateOfBirth, designation } = req.body;

        if (!firstName || !lastName || !email || !password || !dateOfBirth || !designation) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        if (password.length < 8) {
            return res.status(400).json({
                success: false,
                message: "Password must be at least 8 characters",
            });
        }

        const parsedDOB = new Date(dateOfBirth);
        if (isNaN(parsedDOB.getTime())) {
            return res.status(400).json({
                success: false,
                message: "Invalid date format. Use YYYY-MM-DD",
            });
        }

        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "Email already exists",
            });
        }

        if (!req.user?.organizationId) {
            return res.status(400).json({
                success: false,
                message: "Admin does not belong to an organization",
            });
        }

        const newEmployee = await userModel.create({
            firstName,
            lastName,
            email,
            password,
            dateOfBirth: parsedDOB,
            designation,
            role: "EMPLOYEE",
            organizationId: req.user.organizationId,
            permissions: ["task:view", "task:update"],
        });

        return res.status(201).json({
            success: true,
            message: "Employee added successfully",
            employee: newEmployee,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server error while adding employee",
        });
    }
};

export { addEmployeeController };