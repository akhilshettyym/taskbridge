const useAdminEmployeeDetailsModal = ({ emp }) => {

    const statusStyles = {
        ACTIVE: "bg-emerald-100 text-emerald-700 border-emerald-200",
        "IN-ACTIVE": "bg-red-100 text-red-700 border-red-200",
    };

    const initials = `${emp.firstName?.[0] || ""}${emp.lastName?.[0] || ""}`;

    const handleOnClick = (e) => {
        e.stopPropagation();
    }

    return { statusStyles, initials, handleOnClick };
}

export default useAdminEmployeeDetailsModal;