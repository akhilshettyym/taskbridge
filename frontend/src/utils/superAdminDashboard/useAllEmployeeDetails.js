import { useState, useCallback } from "react";
import toast from "react-hot-toast";
import { getAllEmployeesDetails } from "../../api/superadmin";

let cachedEmployees = null;
let hasFetchedEmployees = false;

const useAllEmployeeDetails = () => {

    const [allEmployees, setAllEmployees] = useState(cachedEmployees || []);

    const fetchAllEmployees = useCallback(async (force = false) => {

        if (hasFetchedEmployees && !force) return;

        try {
            const response = await getAllEmployeesDetails();
            cachedEmployees = response?.employees || [];
            hasFetchedEmployees = true;
            setAllEmployees(cachedEmployees);

        } catch (error) {
            console.error("Failed to fetch Employees details", error);
            toast.error("Could not fetch employees");
        }

    }, []);

    return { allEmployees, setAllEmployees, fetchAllEmployees };
};

export default useAllEmployeeDetails;