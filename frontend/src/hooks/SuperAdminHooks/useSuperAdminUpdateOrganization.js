import { useState } from "react";
import toast from "react-hot-toast";
import { updateOrganization } from "../../api/organization";

const useSuperAdminUpdateOrganization = ({ refreshOrganization }) => {

    const orgId = localStorage.getItem("orgId");
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        orgName: "",
        orgCountry: "",
        orgDomain: "",
        orgDescription: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleUpdateOrganization = async (e) => {

        e.preventDefault();
        if (loading) return;

        setLoading(true);

        try {

            const payload = {
                orgName: formData.orgName.trim(),
                orgCountry: formData.orgCountry.trim(),
                orgDomain: formData.orgDomain.trim(),
                orgDescription: formData.orgDescription.trim()
            };

            if (!orgId) throw new Error("Organization Id missing");

            const response = await updateOrganization({ orgId, ...payload });

            if (!response?.success) {
                throw new Error(response?.message || "Failed to update organization");
            }

            toast.success("Organization updated successfully");
            refreshOrganization();

        } catch (error) {

            const msg =
                error.response?.data?.message ||
                error.message ||
                "Failed to update organization";

            toast.error(msg);
            console.error(error);

        } finally {
            setLoading(false);
        }
    };

    return { orgId, loading, setLoading, formData, setFormData, handleChange, handleUpdateOrganization };
}

export default useSuperAdminUpdateOrganization;