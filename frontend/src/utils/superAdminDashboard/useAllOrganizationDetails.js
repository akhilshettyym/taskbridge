import { useState, useCallback } from "react";
import toast from "react-hot-toast";
import { getAllOrganizationDetails } from "../../api/superadmin";

let cachedOrganizations = null;
let hasFetchedOrganizations = false;

const useAllOrganizationDetails = () => {

    const [allOrganization, setAllOrganization] = useState(cachedOrganizations || []);

    const fetchAllOrganization = useCallback(async (force = false) => {

        if (hasFetchedOrganizations && !force) return;

        try {
            const response = await getAllOrganizationDetails();
            cachedOrganizations = response?.organizations || [];
            hasFetchedOrganizations = true;
            setAllOrganization(cachedOrganizations);

        } catch (error) {
            console.error("Failed to fetch Organization details", error);
            toast.error("Could not fetch organizations");
        }

    }, []);

    return { allOrganization, setAllOrganization, fetchAllOrganization };
};

export default useAllOrganizationDetails;