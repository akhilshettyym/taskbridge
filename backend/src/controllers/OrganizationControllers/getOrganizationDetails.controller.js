import orgModel from "../../models/org.model.js";

export const getOrganizationDetails = async (req, res) => {

    try {
        const organizationId = req.user.organizationId;

        if (!organizationId) {
            return res.status(400).json({
                success: false,
                message: "Organization ID not found for user"
            });
        }

        const organization = await orgModel.findById(organizationId).select("uuid orgName orgDomain orgCountry orgDescription status createdAt");

        if (!organization) {
            return res.status(404).json({
                success: false,
                message: "Organization not found"
            });
        }

        return res.status(200).json({
            success: true,
            organization
        });

    } catch (error) {

        console.error("Get organization details error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to fetch organization details"
        });
    }
};