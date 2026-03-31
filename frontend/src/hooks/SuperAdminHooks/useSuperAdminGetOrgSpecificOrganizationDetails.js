import { useCallback, useState } from "react";
import { getSpecificOrganizationDetails } from "../../api/superadmin";
import toast from "react-hot-toast";

let organizationCache = {};

const useSuperAdminGetOrgSpecificOrganizationDetails = ({ orgId }) => {

    const [specificOrganization, setSpecificOrganization] = useState(
        orgId ? organizationCache[orgId] || null : null
    );

    const fetchSpecificOrganization = useCallback(async (force = false) => {

        if (!orgId) return;

        if (organizationCache[orgId] && !force) {
            setSpecificOrganization(organizationCache[orgId]);
            return;
        }

        try {
            const orgResponse = await getSpecificOrganizationDetails(orgId);

            organizationCache[orgId] = orgResponse?.organization || null;

            setSpecificOrganization(organizationCache[orgId]);

        } catch (error) {
            console.error("Failed to fetch Organization details", error);
            toast.error("Could not fetch organization");
        }

    }, [orgId]);

    return { specificOrganization, setSpecificOrganization, fetchSpecificOrganization };
};

export default useSuperAdminGetOrgSpecificOrganizationDetails;