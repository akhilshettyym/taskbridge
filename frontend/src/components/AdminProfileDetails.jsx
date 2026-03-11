import { useMemo } from "react";
import { useState, useEffect, Header, AdminControl, toast } from "../constants/imports";
import { getOrganizationUsers } from "../api/employee";
import { getOrganizationDetails } from "../api/organization";

const MAX_ATTEMPTS = 3;
const LOCK_TIME = 5 * 60 * 1000;

const inputClass = "mt-2 w-full appearance-none bg-[#0F1412] border border-[#FFDAB3]/30 rounded-2xl px-4 py-3 text-[#FFDAB3] outline-none focus:border-[#FFDAB3] focus:ring-1 focus:ring-[#FFDAB3]/50 transition";

const disabledInput = `${inputClass} opacity-60 cursor-not-allowed`;

const AdminProfileDetails = ({ data, handleLogout, orgData }) => {

    const [taskbridge, setTaskbridge] = useState(
        JSON.parse(localStorage.getItem("taskbridge"))
    );

    const [employees, setEmployees] = useState([]);
    const [organization, setOrganization] = useState([]);

    const admin = useMemo(() => employees.find((emp) => emp.role === "ADMIN"), [employees]);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        currentPassword: "",
        newPassword: "",
    });

    const [orgForm, setOrgForm] = useState({
        name: "",
        category: "",
        description: "",
    });

    const [lockInfo, setLockInfo] = useState(null);

    useEffect(() => {
        if (!admin || !organization) return;

        setFormData({
            firstName: admin.firstName || "",
            lastName: admin.lastName || "",
            currentPassword: "",
            newPassword: "",
        });

        setOrgForm({
            name: organization.name || "",
            category: organization.category || "",
            description: organization.description || "",
        });

        const lock = JSON.parse(
            localStorage.getItem(`pwd-lock-${admin.id}`)
        );
        setLockInfo(lock);
    }, [admin, organization]);

    const isLocked = () =>
        lockInfo && Date.now() < lockInfo.lockUntil;

    const recordFailedAttempt = () => {
        const attempts = (lockInfo?.attempts || 0) + 1;

        if (attempts >= MAX_ATTEMPTS) {
            const lock = {
                attempts,
                lockUntil: Date.now() + LOCK_TIME,
            };
            localStorage.setItem(
                `pwd-lock-${admin.id}`,
                JSON.stringify(lock)
            );
            setLockInfo(lock);
            toast.error("Too many wrong attempts. Locked for 5 minutes.");
        } else {
            const lock = { attempts };
            localStorage.setItem(
                `pwd-lock-${admin.id}`,
                JSON.stringify(lock)
            );
            setLockInfo(lock);
            toast.error(`Wrong password (${attempts}/3)`);
        }
    };

    const clearLock = () => {
        localStorage.removeItem(`pwd-lock-${admin.id}`);
        setLockInfo(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isLocked()) {
            toast.error("Password update locked. Try again later.");
            return;
        }

        if (!formData.currentPassword) {
            toast.error("Current password is required");
            return;
        }

        if (formData.currentPassword !== admin.password) {
            recordFailedAttempt();
            return;
        }

        clearLock();

        const updatedAdmin = {
            ...admin,
            firstName: formData.firstName.trim(),
            lastName: formData.lastName.trim(),
        };

        let passwordChanged = false;

        if (formData.newPassword) {
            updatedAdmin.password = formData.newPassword;
            passwordChanged = true;
        }

        const updatedOrganization = {
            ...organization,
            name: orgForm.name.trim(),
            category: orgForm.category.trim(),
            description: orgForm.description.trim(),
        };

        const updatedStore = {
            ...taskbridge,
            admin: updatedAdmin,
            organization: updatedOrganization,
        };

        localStorage.setItem("taskbridge", JSON.stringify(updatedStore));
        setTaskbridge(updatedStore);

        toast.success("Details updated successfully");

        if (passwordChanged) {
            toast("Password changed. Please login again.");
            handleLogout();
        }
    };





    const fetchEmployees = async () => {
        try {
            const response = await getOrganizationUsers();
            setEmployees(response?.users || []);
        } catch (error) {
            console.error("Failed to fetch employees", error);
            toast.error("Could not fetch employees");
        }
    };

    const fetchOrganization = async () => {
        try {
            const orgResponse = await getOrganizationDetails();
            setOrganization(orgResponse?.organization);
        } catch (error) {
            console.error("Failed to fetch Organization details", error);
            toast.error("Could not fetch organization");
        }
    };

    const formattedDOB = admin?.dateOfBirth ? new Date(admin.dateOfBirth).toLocaleDateString() : "";

    const orgCountry = {
        IN: "India",
        US: "United States",
        UK: "United Kingdom",
        CA: "Canada"
    }[organization?.orgCountry];

    useEffect(() => {
        fetchEmployees();
        fetchOrganization();
    }, []);


    return (
        <>
            <hr className="my-5 border border-[#FFDAB3]/40" />
            <h1 className="text-center font-bold text-[#FFDAB3] text-xl uppercase"> Admin Details </h1>
            <hr className="my-5 border border-[#FFDAB3]/40" />


            <div className="w-full bg-[#1B211A] p-10 justify-center rounded-2xl border border-[#FFDAB3]/40 shadow-[0_0_40px_rgba(0,0,0,0.6)] flex flex-wrap gap-8 mb-10">
                <div className="w-full flex justify-between items-center">
                    <h2 className="text-xl uppercase tracking-wide text-[#FFDAB3]"> Organization and Admin details </h2>
                </div>

                <div className="w-full md:w-[48%] flex flex-col gap-6">
                    <div className="flex flex-col">
                        <label className="text-md uppercase tracking-wider text-[#FFDAB3]/60"> Org Name : <span className="text-lg font-semibold text-[#FFDAB3]">{organization?.orgName} </span> </label>
                    </div>

                    <div className="flex flex-col">
                        <label className="text-md uppercase tracking-wider text-[#FFDAB3]/60"> Org Country : <span className="text-lg font-semibold text-[#FFDAB3]"> {orgCountry} </span> </label>
                    </div>

                    <div className="flex flex-col">
                        <label className="text-md uppercase tracking-wider text-[#FFDAB3]/60"> Admin Name : <span className="text-lg capitalize font-semibold text-[#FFDAB3]"> {admin ? `${admin.firstName} ${admin.lastName}` : ""} </span></label>
                    </div>

                    <div className="flex flex-col">
                        <label className="text-md uppercase tracking-wider text-[#FFDAB3]/60"> Admin DOB : <span className="text-lg font-semibold text-[#FFDAB3]">{formattedDOB}</span></label>
                    </div>
                </div>

                <div className="w-full md:w-[48%] flex flex-col gap-6">
                    <div className="flex flex-col">
                        <label className="text-md uppercase tracking-wider text-[#FFDAB3]/60"> Org Domain : <span className="text-lg lowercase font-semibold text-[#FFDAB3]"> {organization?.orgDomain} </span></label>
                    </div>

                    <div className="flex flex-col">
                        <label className="text-md uppercase tracking-wider text-[#FFDAB3]/60"> Admin Email : <span className="text-lg lowercase font-semibold text-[#FFDAB3]"> {admin?.email} </span></label>
                    </div>

                    <div className="flex flex-col">
                        <label className="text-md uppercase tracking-wider text-[#FFDAB3]/60"> Admin Designation : <span className="text-lg font-semibold text-[#FFDAB3]"> {admin?.designation} </span></label>
                    </div>

                    <div className="flex flex-col">
                        <label className="text-md uppercase tracking-wider text-[#FFDAB3]/60"> Org Description : <span className="text-lg capitalize font-semibold text-[#FFDAB3]"> {organization?.orgDescription} </span> </label>
                    </div>
                </div>
            </div>



            <form onSubmit={handleSubmit} className="bg-[#1B211A] p-6 rounded-2xl border border-[#FFDAB3]/40 flex flex-wrap gap-6">
                <div className="w-full md:w-[48%]">
                    <label className="uppercase text-[#FFDAB3]/80">First Name</label>
                    <input className={inputClass} value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />

                    <label className="mt-4 block uppercase text-[#FFDAB3]/80"> Email </label>
                    <input disabled value={admin?.email} className={disabledInput} />
                </div>

                <div className="w-full md:w-[48%]">
                    <label className="uppercase text-[#FFDAB3]/80">Last Name</label>
                    <input className={inputClass} value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
                </div>

                <div className="w-full border-t border-[#FFDAB3]/30 pt-6">
                    <h2 className="text-[#FFDAB3] font-bold uppercase mb-4"> Organization Details </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <label className="uppercase text-[#FFDAB3]/80">Name</label>
                            <input className={inputClass} value={orgForm.name} onChange={(e) => setOrgForm({ ...orgForm, name: e.target.value })} />
                        </div>

                        <div>
                            <label className="uppercase text-[#FFDAB3]/80">Category</label>
                            <input className={inputClass} value={orgForm.category} onChange={(e) => setOrgForm({ ...orgForm, category: e.target.value })} />
                        </div>

                        <div>
                            <label className="uppercase text-[#FFDAB3]/80"> Created At </label>
                            <input disabled value={organization?.createdAt} className={disabledInput} />
                        </div>
                    </div>

                    <div className="mt-4">
                        <label className="uppercase text-[#FFDAB3]/80">Description</label>
                        <textarea rows={3} className={inputClass} value={orgForm.description} onChange={(e) => setOrgForm({ ...orgForm, description: e.target.value })} />
                    </div>
                </div>

                <div className="w-full flex justify-center pt-6">
                    <button type="submit" className="bg-[#FFDAB3] text-[#1B211A] font-bold px-12 py-3 rounded-full uppercase"> Update Details </button>
                </div>
            </form>
        </>
    );
};

export default AdminProfileDetails;