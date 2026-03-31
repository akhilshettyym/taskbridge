import { useState } from "react";
import toast from "react-hot-toast";
import { addAdmin } from "../../api/superadmin";
import "react-datepicker/dist/react-datepicker.css";
import { DatePicker, PasswordToggle } from "../../constants/imports";

const SuperAdminAddMoreAdmins = ({ refreshAdmins, onAdded }) => {

    const [dob, setDob] = useState(null);
    const [loading, setLoading] = useState(false);

    const orgId = localStorage.getItem("orgId");

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

    return (
        <div className="w-full flex justify-center">
            <form onSubmit={handleAddAdmin} className="w-full bg-[#1B211A] p-8 rounded-2xl border border-[#FFDAB3]/40 shadow-[0_0_40px_rgba(0,0,0,0.6)] flex flex-wrap gap-8">
                <div className="w-full flex justify-between items-center">
                    <h2 className="text-xl uppercase tracking-wide text-[#FFDAB3]"> Add Admin Details </h2>
                </div>

                <div className="w-full md:w-[48%] flex flex-col gap-6">
                    <div>
                        <label className="text-md uppercase tracking-wide text-[#FFDAB3]/80"> First Name </label>
                        <input name="firstName" required className="mt-2 w-full bg-[#0F1412] border border-[#FFDAB3]/30 rounded-2xl px-4 py-3 text-[#FFDAB3]" placeholder="Enter first name" />
                    </div>

                    <div>
                        <label className="text-md uppercase tracking-wide text-[#FFDAB3]/80"> Email </label>
                        <input name="email" type="email" required className="mt-2 w-full bg-[#0F1412] border border-[#FFDAB3]/30 rounded-2xl px-4 py-3 text-[#FFDAB3]" placeholder="Enter email" />
                    </div>

                    <div className="mt-2">
                        <label className="text-md uppercase tracking-wide text-[#FFDAB3]/80 mr-10"> Date of Birth </label>

                        <DatePicker selected={dob} onChange={setDob} placeholderText="DD/MM/YYYY" dateFormat="dd/MM/yyyy" maxDate={new Date()} showYearDropdown scrollableYearDropdown yearDropdownItemNumber={80} className="mt-6 w-full bg-[#0F1412] border border-[#FFDAB3]/30 rounded-2xl px-4 py-3 text-[#FFDAB3]" />

                        <input type="hidden" name="dateOfBirth" value={dob ? dob.toISOString() : ""} />
                    </div>

                    <div>
                        <label className="text-md uppercase tracking-wide text-[#FFDAB3]/80"> Organization ID </label>
                        <input name="organizationId" value={orgId || ""} readOnly className="mt-2 w-full bg-[#0F1412] border border-[#FFDAB3]/30 rounded-2xl px-4 py-3 text-[#FFDAB3]" />
                    </div>
                </div>

                <div className="w-full md:w-[48%] flex flex-col gap-6">
                    <div>
                        <label className="text-md uppercase tracking-wide text-[#FFDAB3]/80"> Last Name </label>
                        <input name="lastName" required className="mt-2 w-full bg-[#0F1412] border border-[#FFDAB3]/30 rounded-2xl px-4 py-3 text-[#FFDAB3]" placeholder="Enter last name" />
                    </div>

                    <div>
                        <label className="text-md uppercase tracking-wide text-[#FFDAB3]/80"> Password </label>

                        <PasswordToggle name="password" placeholder="Create password" className="mt-2 w-full bg-[#0F1412] border border-[#FFDAB3]/30 rounded-2xl px-4 py-3 text-[#FFDAB3]" iconClassName="top-[55%]" />
                    </div>

                    <div>
                        <label className="text-md uppercase tracking-wide text-[#FFDAB3]/80"> Designation </label>
                        <input name="designation" required className="mt-2 w-full bg-[#0F1412] border border-[#FFDAB3]/30 rounded-2xl px-4 py-3 text-[#FFDAB3]" placeholder="Enter designation" />
                    </div>
                </div>

                <div className="w-full flex flex-col items-center pt-2">
                    <button type="submit" disabled={loading} className="bg-[#FFDAB3] text-[#1B211A] font-bold px-12 py-3 rounded-full uppercase"> {loading ? "Adding..." : "Add Admin"} </button>
                </div>
            </form>
        </div>
    );
};

export default SuperAdminAddMoreAdmins;