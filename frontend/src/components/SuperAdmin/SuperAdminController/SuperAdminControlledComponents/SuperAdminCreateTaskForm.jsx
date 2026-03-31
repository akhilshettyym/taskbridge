import { useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAdminCreateTaskForm from "../../../../hooks/adminHooks/useAdminCreateTaskForm";

const SuperAdminCreateTaskForm = () => {

    const {
        employees,
        dueDate,
        loading,
        creationDate,
        fetchEmployees,
        handleOnChange,
        handleCreateTask
    } = useAdminCreateTaskForm();

    useEffect(() => {
        fetchEmployees();
    }, []);

    const renderEmployeeOptions = () => {
        if (!employees?.length) {
            return <option disabled value="">No employees available</option>;
        }

        return employees.map((emp) => (
            <option key={emp._id || emp.id} value={emp._id || emp.id}>
                {emp.firstName} {emp.lastName}
            </option>
        ));
    };

    return (
        <div className="w-full flex justify-center py-8">

            <form
                onSubmit={handleCreateTask}
                className="w-full max-w-5xl bg-[#111713] border border-[#FFDAB3]/30 rounded-3xl p-8 shadow-[0_0_60px_rgba(0,0,0,0.7)]"
            >

                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-[#FFDAB3] uppercase tracking-wide">
                        Create Task
                    </h1>
                    <p className="text-[#FFDAB3]/60 text-sm mt-1">
                        Assign tasks to organization employees
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* LEFT */}
                    <div className="flex flex-col gap-6">

                        <div>
                            <label className="text-sm uppercase text-[#FFDAB3]/70">
                                Task Title
                            </label>
                            <input
                                required
                                name="title"
                                type="text"
                                placeholder="Design dashboard UI"
                                className="mt-2 w-full bg-[#0B0F0D] border border-[#FFDAB3]/20 rounded-xl px-4 py-3 text-[#FFDAB3] focus:border-[#FFDAB3]"
                            />
                        </div>

                        <div>
                            <label className="text-sm uppercase text-[#FFDAB3]/70">
                                Assign To
                            </label>
                            <select
                                required
                                name="assignedTo"
                                className="mt-2 w-full bg-[#0B0F0D] border border-[#FFDAB3]/20 rounded-xl px-4 py-3 text-[#FFDAB3]"
                            >
                                <option value="">Select employee</option>
                                {renderEmployeeOptions()}
                            </select>
                        </div>

                        <div>
                            <label className="text-sm uppercase text-[#FFDAB3]/70">
                                Category
                            </label>
                            <input
                                required
                                name="category"
                                type="text"
                                placeholder="Development"
                                className="mt-2 w-full bg-[#0B0F0D] border border-[#FFDAB3]/20 rounded-xl px-4 py-3 text-[#FFDAB3]"
                            />
                        </div>

                        <div>
                            <label className="text-sm uppercase text-[#FFDAB3]/70">
                                Creation Date
                            </label>
                            <DatePicker
                                selected={creationDate}
                                disabled
                                dateFormat="dd/MM/yyyy"
                                wrapperClassName="w-full"
                                className="mt-2 w-full bg-[#0B0F0D] border border-[#FFDAB3]/20 rounded-xl px-4 py-3 text-[#FFDAB3]"
                            />
                        </div>

                    </div>

                    {/* RIGHT */}
                    <div className="flex flex-col gap-6">

                        <div>
                            <label className="text-sm uppercase text-[#FFDAB3]/70">
                                Priority
                            </label>
                            <select
                                required
                                name="priority"
                                className="mt-2 w-full bg-[#0B0F0D] border border-[#FFDAB3]/20 rounded-xl px-4 py-3 text-[#FFDAB3]"
                            >
                                <option value="High">High</option>
                                <option value="Medium">Medium</option>
                                <option value="Low">Low</option>
                            </select>
                        </div>

                        <div>
                            <label className="text-sm uppercase text-[#FFDAB3]/70">
                                Task Description
                            </label>
                            <textarea
                                required
                                name="description"
                                rows={5}
                                className="mt-2 w-full bg-[#0B0F0D] border border-[#FFDAB3]/20 rounded-xl px-4 py-3 text-[#FFDAB3]"
                            />
                        </div>

                        <div>
                            <label className="text-sm uppercase text-[#FFDAB3]/70">
                                Due Date
                            </label>
                            <DatePicker
                                selected={dueDate}
                                onChange={handleOnChange}
                                minDate={new Date()}
                                placeholderText="Select due date"
                                dateFormat="dd/MM/yyyy"
                                wrapperClassName="w-full"
                                className="mt-2 w-full bg-[#0B0F0D] border border-[#FFDAB3]/20 rounded-xl px-4 py-3 text-[#FFDAB3]"
                            />
                        </div>

                    </div>

                </div>

                {/* Submit */}
                <div className="flex justify-end mt-10">
                    <button
                        type="submit"
                        disabled={loading}
                        className="px-10 py-3 rounded-xl bg-[#FFDAB3] text-[#1B211A] font-bold uppercase hover:scale-105 active:scale-95 transition"
                    >
                        {loading ? "Creating..." : "Create Task"}
                    </button>
                </div>

            </form>
        </div>
    );
};

export default SuperAdminCreateTaskForm;