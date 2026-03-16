import { useState, useEffect, DatePicker, toast } from "../../constants/imports";
import EmployeeTaskListNo from "./EmployeeTaskListNo";

const MAX_ATTEMPTS = 3;
const LOCK_TIME = 5 * 60 * 1000;

const inputClass = "mt-2 w-full appearance-none bg-[#0F1412] border border-[#FFDAB3]/30 rounded-2xl px-4 py-3 text-[#FFDAB3] outline-none focus:border-[#FFDAB3] focus:ring-1 focus:ring-[#FFDAB3]/50 transition";

const EmployeeProfileDetails = ({ data, handleLogout, orgData }) => {


  return (
    <>
      <hr className="my-5 border border-[#FFDAB3]/40" />
      <h1 className="text-center font-bold text-[#FFDAB3] text-xl uppercase"> Employee Details </h1>
      <hr className="my-5 border border-[#FFDAB3]/40" />

      {/* <EmployeeTaskListNo data={employee} /> */}

      <div className="mt-5 bg-[#1B211A] p-4 rounded-2xl border border-[#FFDAB3]/30 shadow-sm">
        <div className="flex items-center justify-between gap-4 text-sm font-medium uppercase tracking-wide text-[#FFDAB3]">
          <div>
            <span className="text-[#F8F8F2]/70">ID: </span>
            <span className="font-semibold">{data?.id || "—"}</span>
          </div>
          <div>
            <span className="text-[#F8F8F2]/70">Name: </span>
            <span className="font-semibold">{data?.firstName || "—"} {data?.lastName || "—"}</span>
          </div>
          <div>
            <span className="text-[#F8F8F2]/70">Position: </span>
            <span className="font-semibold">{data?.position || "Not assigned"}</span>
          </div>
        </div>
      </div>

      <form  className="mt-6 bg-[#1B211A] p-6 rounded-2xl border border-[#FFDAB3]/40 flex flex-wrap gap-6">
        <div className="w-full md:w-[48%]">
          <label className="text-md uppercase text-[#FFDAB3]/80"> First Name </label>
          {/* <input className={inputClass} value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} /> */}

          <label className="mt-4 block text-md uppercase text-[#FFDAB3]/80"> Email </label>
          {/* <input disabled value={employee?.email} className={`${inputClass} opacity-60 cursor-not-allowed`} /> */}

          <label className="mt-4 block text-md uppercase text-[#FFDAB3]/80"> Current Password * </label>
          {/* <input type="password" className={inputClass} value={formData.currentPassword}
            onChange={(e) => setFormData({ ...formData, currentPassword: e.target.value })} /> */}
        </div>

        <div className="w-full md:w-[48%]">
          <label className="text-md uppercase text-[#FFDAB3]/80"> Last Name </label>
          {/* <input className={inputClass} value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} /> */}

          <label className="mt-4 block text-md uppercase text-[#FFDAB3]/80"> DOB </label>
          {/* <DatePicker selected={formData.dob} onChange={(date) => setFormData({ ...formData, dob: date })} dateFormat="dd/MM/yyyy" className={inputClass} /> */}

          <label className="mt-4 block text-md uppercase text-[#FFDAB3]/80"> New Password (optional) </label>
          {/* <input type="password" className={inputClass} value={formData.newPassword}
            onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })} /> */}
        </div>

        <div className="w-full flex justify-center pt-6">
          <button type="submit" className="bg-[#FFDAB3] text-[#1B211A] font-bold px-12 py-3 rounded-full uppercase"> Update Details </button>
        </div>
      </form>
    </>
  );
};

export default EmployeeProfileDetails;