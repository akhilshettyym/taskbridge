import orgModel from "../../models/org.model.js";

export const updateOrganizationController = async (req, res) => {

    try {
        const loggedInUser = req.user;

        // if (loggedInUser.role !== "ADMIN") {
        //     return res.status(403).json({
        //         success: false,
        //         message: "Only admins can update organization details",
        //     });
        // }

        if (loggedInUser.role !== "ADMIN" && loggedInUser.role !== "SUPER_ADMIN") {
            return res.status(403).json({
                success: false,
                message: "Only admins can update organization details",
            });
        }

        // const organization = await orgModel.findById(loggedInUser.organizationId);

        const orgId =
            loggedInUser.role === "SUPER_ADMIN"
                ? req.params.orgId
                : loggedInUser.organizationId;

        const organization = await orgModel.findById(orgId);

        if (!organization) {
            return res.status(404).json({
                success: false,
                message: "Organization not found",
            });
        }

        if (organization.status !== "ACTIVE") {
            return res.status(400).json({
                success: false,
                message: "Only active organizations can be updated",
            });
        }

        const { orgName, orgDomain, orgCountry, orgDescription } = req.body;

        if (orgName === undefined && orgDomain === undefined && orgCountry === undefined && orgDescription === undefined) {
            return res.status(400).json({
                success: false,
                message: "No fields provided for update",
            });
        }

        if (orgDomain && orgDomain !== organization.orgDomain) {
            const existingDomain = await orgModel.findOne({ orgDomain });
            if (existingDomain) {
                return res.status(409).json({
                    success: false,
                    message: "Organization domain already exists",
                });
            }
            organization.orgDomain = orgDomain;
        }

        if (orgName !== undefined) organization.orgName = orgName;
        if (orgCountry !== undefined) organization.orgCountry = orgCountry;
        if (orgDescription !== undefined) organization.orgDescription = orgDescription;

        await organization.save();

        return res.status(200).json({
            success: true,
            message: "Organization updated successfully",
            organization,
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error updating organization",
            error: error.message,
        });
    }
};