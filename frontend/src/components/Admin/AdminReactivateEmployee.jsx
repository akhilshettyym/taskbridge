import { ConfirmModal } from "../../constants/imports";
import useAdminReactivateEmployee from "../../hooks/AdminHooks/useAdminReactivateEmployee";

const AdminReactivateEmployee = ({ empId, refreshEmployees }) => {

    const { loading, showConfirm, onHandleReactivate, handleOnClickReactivate, handleOnCancel } = useAdminReactivateEmployee({ empId, refreshEmployees });

    return (
        <>
            <button onClick={handleOnClickReactivate} className="py-1 px-5 text-sm rounded-md bg-green-500 border font-semibold border-green-600 text-[#FFDAB3] hover:bg-green-600 transition whitespace-nowrap"> Reactivate </button>

            <ConfirmModal isOpen={showConfirm} title="Reactivate Employee" disabled={loading} message="Are you sure you want to Reactivate this Employee ?" onCancel={handleOnCancel} onConfirm={onHandleReactivate} btnTitle={loading ? "Reactivating..." : "Reactivate"} confirmBtnClass="bg-green-600 border-green-600 hover:bg-green-700" />
        </>
    );
};

export default AdminReactivateEmployee;