import toast from "react-hot-toast";
import { useState, useCallback } from "react";
import { getOrganizationDetails } from "../api/organization";

let organizationCache = null;
let hasFetchedOrganization = false;

const useOrganizationDetails = () => {

    const [organization, setOrganization] = useState(organizationCache || []);

    const fetchOrganization = useCallback(async (force = false) => {

        if (hasFetchedOrganization && !force) return;

        try {
            const orgResponse = await getOrganizationDetails();
            organizationCache = orgResponse?.organization || [];
            hasFetchedOrganization = true;
            setOrganization(organizationCache);

        } catch (error) {
            console.error("Failed to fetch Organization details", error);
            toast.error("Could not fetch organization");
        }
    }, []);

    return { organization, setOrganization, fetchOrganization };
};

export default useOrganizationDetails;