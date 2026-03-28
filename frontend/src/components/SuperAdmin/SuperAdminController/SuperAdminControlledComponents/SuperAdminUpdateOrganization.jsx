import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { updateOrganization } from "../../../../api/organization";

const SuperAdminUpdateOrganization = ({ organization, refreshOrganization }) => {

    const [loading, setLoading] = useState(false);
    const orgId = localStorage.getItem("orgId");

    const [formData, setFormData] = useState({
        orgName: "",
        orgCountry: "",
        orgDomain: "",
        orgDescription: ""
    });

    useEffect(() => {
        if (organization) {
            setFormData({
                orgName: organization.orgName || "",
                orgCountry: organization.orgCountry || "",
                orgDomain: organization.orgDomain || "",
                orgDescription: organization.orgDescription || ""
            });
        }
    }, [organization]);

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

    return (
        <form onSubmit={handleUpdateOrganization} className="w-full bg-[#1B211A] p-8 rounded-2xl border border-[#FFDAB3]/40 flex flex-wrap gap-8">

            <div className="w-full">
                <h2 className="text-xl uppercase text-[#FFDAB3]"> Update Organization </h2>
            </div>

            <div className="w-full md:w-[48%]">
                <label className="text-[#FFDAB3]/80 uppercase text-sm"> Organization Name </label>
                <input name="orgName" value={formData.orgName} onChange={handleChange} className="mt-2 w-full bg-[#0F1412] border border-[#FFDAB3]/30 rounded-xl px-4 py-3 text-[#FFDAB3]" />
            </div>

            <div className="w-full md:w-[48%]">
                <label className="text-[#FFDAB3]/80 uppercase text-sm"> Organization Domain </label>
                <input name="orgDomain" value={formData.orgDomain} onChange={handleChange} className="mt-2 w-full bg-[#0F1412] border border-[#FFDAB3]/30 rounded-xl px-4 py-3 text-[#FFDAB3]" />
            </div>

            <div className="w-full">
                <label className="text-[#FFDAB3]/80 uppercase text-sm"> Organization Country </label>

                <select name="orgCountry" value={formData.orgCountry} onChange={handleChange} className="mt-2 w-full bg-[#0F1412] border border-[#FFDAB3]/30 rounded-xl px-4 py-3 text-[#FFDAB3]">
                    <option value="IN"> INDIA </option>
                    <option value="US"> USA </option>
                    <option value="CA"> CANADA </option>
                    <option value="UK"> UNITED KINGDOM </option>
                </select>
            </div>

            <div className="w-full">
                <label className="text-[#FFDAB3]/80 uppercase text-sm"> Description </label>

                <textarea rows={4} name="orgDescription" value={formData.orgDescription} onChange={handleChange} className="mt-2 w-full bg-[#0F1412] border border-[#FFDAB3]/30 rounded-xl px-4 py-3 text-[#FFDAB3]" />
            </div>

            <div className="w-full flex justify-center">
                <button disabled={loading} className="bg-[#FFDAB3] text-black px-10 py-3 rounded-full font-semibold"> {loading ? "Updating..." : "Update Organization"} </button>
            </div>

        </form>
    );
};

export default SuperAdminUpdateOrganization;