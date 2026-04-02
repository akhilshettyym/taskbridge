import { useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useSuperAdminEditTaskModal from "../../hooks/SuperAdminHooks/useSuperAdminEditTaskModal";

const SuperAdminEditTaskModal = ({ task, onClose, fetchTasks }) => {

    const { loading, orgSpecificEmployees, fetchOrgSpecificEmployees, formData, setFormData, handleChange, handleDateChange, handleUpdateTask } = useSuperAdminEditTaskModal({ task, onClose, fetchTasks });

    const renderEmployeeOptions = () => {

        if (!orgSpecificEmployees?.length) {
            return <option disabled>No employees</option>;
        }

        return orgSpecificEmployees.map((emp) => (
            <option key={emp._id} value={emp._id}>
                {emp.firstName} {emp.lastName}
            </option>
        ));
    };

    useEffect(() => {
        if (!task) return;

        setFormData({
            title: task?.title || "",
            category: task?.category || "",
            description: task?.description || "",
            priority: task?.priority || "MEDIUM",
            assignedTo:
                typeof task?.assignedTo === "object"
                    ? task?.assignedTo?._id
                    : task?.assignedTo || "",
            dueDate: task?.dueDate ? new Date(task.dueDate) : null,
        });
    }, [task]);

    useEffect(() => {
        fetchOrgSpecificEmployees();
    }, []);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 py-6">
            <div className="w-full max-w-2xl bg-[#1B211A] rounded-2xl border border-[#FFDAB3]/40 shadow-[0_0_50px_rgba(0,0,0,0.7)] max-h-[90vh] flex flex-col overflow-hidden">

                <div className="shrink-0 px-6 py-4 border-b border-[#FFDAB3]/30 flex items-center justify-between">
                    <h2 className="font-bold text-[#FFDAB3] text-lg uppercase"> Edit Task </h2>

                    <button onClick={onClose} className="text-[#FFDAB3] text-2xl hover:text-red-400"> ✕ </button>
                </div>

                <form onSubmit={handleUpdateTask} className="p-6 space-y-6">

                    <div className="grid grid-cols-6 gap-5">
                        <div className="col-span-3">
                            <label className="text-sm uppercase text-[#FFDAB3]/80"> Task Title </label>

                            <input name="title" value={formData.title} onChange={handleChange} required className="w-full bg-[#0F1412] border border-[#FFDAB3]/30 rounded-xl px-4 py-3 text-[#FFDAB3]" />
                        </div>

                        <div className="col-span-3 relative">
                            <label className="text-sm uppercase text-[#FFDAB3]/80"> Assign To </label>

                            <select name="assignedTo" value={formData.assignedTo} onChange={handleChange} className="w-full appearance-none bg-[#0F1412] border border-[#FFDAB3]/30 rounded-xl px-4 py-3 pr-10 text-[#FFDAB3]">
                                <option value="">Unassigned</option>
                                {renderEmployeeOptions()}
                            </select>

                            <span className="pointer-events-none absolute right-4 top-[50%] text-[#FFDAB3]/60"> ↓ </span>
                        </div>

                        <div className="col-span-2 relative">
                            <label className="text-sm uppercase text-[#FFDAB3]/80"> Priority </label>

                            <select name="priority" value={formData.priority} onChange={handleChange} className="w-full appearance-none bg-[#0F1412] border border-[#FFDAB3]/30 rounded-xl px-4 py-3 pr-10 text-[#FFDAB3]">
                                <option value="HIGH">High</option>
                                <option value="MEDIUM">Medium</option>
                                <option value="LOW">Low</option>
                            </select>

                            <span className="pointer-events-none absolute right-4 top-[50%] text-[#FFDAB3]/60"> ↓ </span>
                        </div>

                        <div className="col-span-2">
                            <label className="text-sm uppercase text-[#FFDAB3]/80"> Category </label>

                            <input name="category" value={formData.category} onChange={handleChange} className="w-full bg-[#0F1412] border border-[#FFDAB3]/30 rounded-xl px-4 py-3 text-[#FFDAB3]" />
                        </div>

                        <div className="col-span-2">
                            <label className="text-sm uppercase text-[#FFDAB3]/80"> Due Date </label>

                            <DatePicker selected={formData.dueDate} onChange={handleDateChange} minDate={new Date()} dateFormat="dd/MM/yyyy" className="w-full bg-[#0F1412] border border-[#FFDAB3]/30 rounded-xl px-4 py-3 text-[#FFDAB3]" />
                        </div>

                        <div className="col-span-6">
                            <label className="text-sm uppercase text-[#FFDAB3]/80"> Description </label>

                            <textarea name="description" rows={3} value={formData.description} onChange={handleChange} className="w-full bg-[#0F1412] border border-[#FFDAB3]/30 rounded-xl px-4 py-3 text-[#FFDAB3]" />
                        </div>
                    </div>

                    <div className="flex justify-end gap-4">
                        <button type="button" onClick={onClose} className="px-6 py-2 border border-[#FFDAB3]/40 text-[#FFDAB3] rounded-lg"> Cancel </button>

                        <button type="submit" disabled={loading} className="bg-[#FFDAB3] text-[#1B211A] px-8 py-2 rounded-lg font-bold"> {loading ? "Updating..." : "Update Task"} </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default SuperAdminEditTaskModal;