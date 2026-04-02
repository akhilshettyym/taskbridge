import toast from "react-hot-toast";
import { useState, useCallback } from "react";
import { getOrganizationUsers } from "../api/employee";

let employeesCache = null;
let hasFetchedEmployees = false;

const useEmployeesDetails = () => {

    const [employees, setEmployees] = useState(employeesCache || []);

    const fetchEmployees = useCallback(async (force = false) => {

        if (hasFetchedEmployees && !force) return;

        try {
            const response = await getOrganizationUsers();

            if (response?.success) {
                employeesCache = response.users || [];
                hasFetchedEmployees = true;
                setEmployees(employeesCache);

            } else {
                toast.error(response?.message || "Failed to load employees");
            }

        } catch (error) {
            console.error("Failed to fetch employees:", error);
            toast.error("Could not fetch employees");
        }
    }, []);

    return { employees, setEmployees, fetchEmployees };
};

export default useEmployeesDetails;