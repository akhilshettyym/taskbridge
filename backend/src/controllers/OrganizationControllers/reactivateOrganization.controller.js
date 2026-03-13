import orgModel from "../../models/org.model.js";

export const reactivateOrganization = async (req, res) => {

    try {
        const { orgId } = req.params;

        const organization = await orgModel.findById(orgId);

        if (!organization) {
            return res.status(404).json({
                success: false,
                message: "Organization not found",
            });
        }

        if (organization.status !== "REVOKED") {
            return res.status(400).json({
                success: false,
                message: "Organization is not in REVOKED state",
            });
        }

        organization.status = "ACTIVE";
        await organization.save();

        return res.status(200).json({
            success: true,
            message: "Organization re-activated successfully",
            organization
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error re-activating organization"
        });
    }
};