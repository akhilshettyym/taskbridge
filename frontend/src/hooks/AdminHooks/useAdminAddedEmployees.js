import { useRef, useState } from "react";

const useAdminAddedEmployees = () => {

    const prevLengthRef = useRef(0);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const handleOnClickView = () => {
        setSelectedEmployee(emp);
    }

    const handleOnCloseModal = () => {
        setSelectedEmployee(null);
    }

    return { prevLengthRef, selectedEmployee, handleOnClickView, handleOnCloseModal };

}

export default useAdminAddedEmployees;