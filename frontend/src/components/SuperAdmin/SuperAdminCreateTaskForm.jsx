import toast from "react-hot-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { createNewTask } from "../../api/superadmin";
import { useEffect, useState, useMemo } from "react";
import useSuperAdminGetOrgSpecificEmployeeDetails from "../../hooks/SuperAdminHooks/useSuperAdminGetOrgSpecificEmployeeDetails";

const SuperAdminCreateTaskForm = () => {

    const [dueDate, setDueDate] = useState(null);
    const [loading, setLoading] = useState(false);
    const [creationDate] = useState(new Date());

    const orgId = localStorage.getItem("orgId");

    const { orgSpecificEmployees, fetchOrgSpecificEmployees } = useSuperAdminGetOrgSpecificEmployeeDetails({ orgId });

    const handleOnChange = (date) => {
        setDueDate(date);
    };

    const activeEmployees = useMemo(() => {
        if (!orgSpecificEmployees?.length) return [];

        return orgSpecificEmployees
            .filter(
                (emp) =>
                    emp.employmentStatus === "ACTIVE" &&
                    emp.role === "EMPLOYEE"
            )
            .sort((a, b) =>
                `${a.firstName} ${a.lastName}`.localeCompare(
                    `${b.firstName} ${b.lastName}`
                )
            );
    }, [orgSpecificEmployees]);

    const handleCreateTask = async (e) => {

        e.preventDefault();
        if (loading) return;

        setLoading(true);

        try {
            const formData = new FormData(e.target);

            const title = formData.get("title")?.trim();
            const category = formData.get("category")?.trim();
            const description = formData.get("description")?.trim();
            const assignedTo = formData.get("assignedTo")?.trim();
            const priority = formData.get("priority")?.trim();

            if (!title || !category || !description || !assignedTo || !dueDate || !priority) {
                throw new Error("Please fill all required fields");
            }

            const payload = {
                title,
                category,
                description,
                assignedTo,
                dueDate: dueDate.toISOString(),
                priority
            };

            const response = await createNewTask({ orgId, payload });

            if (!response?.success) {
                throw new Error(response?.message || "Could not create task");
            }

            toast.success(response.message || "Task created successfully");
            e.target.reset();
            setDueDate(null);

        } catch (error) {
            const message = error?.response?.data?.message || error.message || "Something went wrong";
            toast.error(message);

        } finally {
            setLoading(false);
        }
    };

    const renderEmployeeOptions = () => {
        if (!activeEmployees.length) {
            return <option disabled value="">No active employees</option>;
        }

        return activeEmployees.map((emp) => (
            <option key={emp._id} value={emp._id}> {emp.firstName} {emp.lastName} </option>
        ));
    };

    useEffect(() => {
        if (orgId) {
            fetchOrgSpecificEmployees();
        }
    }, [orgId, fetchOrgSpecificEmployees]);

    return (
        <div className="w-full flex justify-center">

            <form onSubmit={handleCreateTask} className="w-full max-w-400 bg-[#111713] border border-[#FFDAB3]/30 rounded-2xl p-8 shadow-[0_0_60px_rgba(0,0,0,0.7)]">
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-[#FFDAB3] uppercase tracking-wide"> Create Task </h1>
                    <p className="text-[#FFDAB3]/60 text-sm mt-1"> Assign tasks to organization employees </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <div className="flex flex-col gap-6">
                        <div>
                            <label className="text-sm uppercase text-[#FFDAB3]/70"> Task Title </label>
                            <input required name="title" type="text" placeholder="Design dashboard UI" className="mt-2 w-full bg-[#0B0F0D] border border-[#FFDAB3]/20 rounded-xl px-4 py-3 text-[#FFDAB3]" />
                        </div>

                        <div>
                            <label className="text-sm uppercase text-[#FFDAB3]/70"> Assign To </label>
                            <select required name="assignedTo" className="mt-2 w-full bg-[#0B0F0D] border border-[#FFDAB3]/20 rounded-xl px-4 py-3 text-[#FFDAB3]">
                                <option value=""> Select employee </option> {renderEmployeeOptions()}
                            </select>
                        </div>

                        <div>
                            <label className="text-sm uppercase text-[#FFDAB3]/70"> Category </label>
                            <input required name="category" type="text" placeholder="Development" className="mt-2 w-full bg-[#0B0F0D] border border-[#FFDAB3]/20 rounded-xl px-4 py-3 text-[#FFDAB3]" />
                        </div>

                        <div>
                            <label className="text-sm uppercase text-[#FFDAB3]/70"> Creation Date </label>
                            <DatePicker selected={creationDate} disabled dateFormat="dd/MM/yyyy" wrapperClassName="w-full" className="mt-2 w-full bg-[#0B0F0D] border border-[#FFDAB3]/20 rounded-xl px-4 py-3 text-[#FFDAB3]" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div>
                            <label className="text-sm uppercase text-[#FFDAB3]/70"> Priority </label>
                            <select required name="priority" className="mt-2 w-full bg-[#0B0F0D] border border-[#FFDAB3]/20 rounded-xl px-4 py-3 text-[#FFDAB3]">
                                <option value="HIGH"> High </option>
                                <option value="MEDIUM"> Medium </option>
                                <option value="LOW"> Low </option>
                            </select>
                        </div>

                        <div>
                            <label className="text-sm uppercase text-[#FFDAB3]/70"> Task Description </label>
                            <textarea required name="description" placeholder="Enter task description" rows={5} className="mt-2 w-full bg-[#0B0F0D] border border-[#FFDAB3]/20 rounded-xl px-4 py-3 text-[#FFDAB3]" />
                        </div>

                        <div>
                            <label className="text-sm uppercase text-[#FFDAB3]/70"> Due Date </label>
                            <DatePicker selected={dueDate} onChange={handleOnChange} minDate={new Date()} placeholderText="Select due date" dateFormat="dd/MM/yyyy" wrapperClassName="w-full" className="mt-2 w-full bg-[#0B0F0D] border border-[#FFDAB3]/20 rounded-xl px-4 py-3 text-[#FFDAB3]" />
                        </div>
                    </div>

                </div>

                <div className="flex justify-center mt-12">
                    <button type="submit" disabled={loading} className="px-12 py-3 rounded-xl bg-[#FFDAB3] text-[#1B211A] font-bold uppercase hover:scale-105 active:scale-95 transition"> {loading ? "Creating..." : "Create Task"} </button>
                </div>
            </form>
        </div>
    );
};

export default SuperAdminCreateTaskForm;