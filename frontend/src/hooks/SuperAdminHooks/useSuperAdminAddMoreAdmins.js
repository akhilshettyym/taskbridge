import { useState } from "react";
import toast from "react-hot-toast";
import { addAdmin } from "../../api/superadmin";

const useSuperAdminAddMoreAdmins = ({ refreshAdmins, onAdded }) => {

    const orgId = localStorage.getItem("orgId");

    const [dob, setDob] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleAddAdmin = async (e) => {

        e.preventDefault();
        if (loading) return;

        setLoading(true);

        try {
            const formData = new FormData(e.target);

            const payload = {
                firstName: formData.get("firstName")?.trim(),
                lastName: formData.get("lastName")?.trim(),
                email: formData.get("email")?.trim().toLowerCase(),
                password: formData.get("password"),
                dateOfBirth: formData.get("dateOfBirth"),
                designation: formData.get("designation"),
                organizationId: orgId,
            };

            const response = await addAdmin(payload);

            if (!response?.success) {
                throw new Error(response?.message || "Failed to add admin");
            }

            toast.success(response.message || "Admin added successfully");
            refreshAdmins?.();
            onAdded?.();
            e.target.reset();
            setDob(null);

        } catch (error) {
            const message = error?.response?.data?.message || error.message || "Something went wrong";
            toast.error(message);

        } finally {
            setLoading(false);
        }
    };

    return { dob, setDob, loading, setLoading, orgId, handleAddAdmin };
}

export default useSuperAdminAddMoreAdmins;