import { useNavigate } from "react-router-dom";
import { signupMainDiv, signupCreateOrgBtn } from "../constants/imports";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className={`${signupMainDiv} flex items-center justify-center relative overflow-hidden`}>
      <div className="absolute -top-32 -left-32 w-125 h-125 bg-[#FFDAB3]/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-125 h-125 bg-[#FFDAB3]/5 rounded-full blur-3xl" />

      <div className="relative w-full max-w-2xl text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-widest text-[#FFDAB3] uppercase">
          TaskBridge
        </h1>

        <p className="mt-4 text-[#FFDAB3]/70 text-sm uppercase tracking-[0.3em]"> Organization & Task Management </p>

        <div className="mt-8 flex justify-center">
          <div className="w-24 h-px bg-[#FFDAB3]/30" />
        </div>

        <div className="mt-10 space-y-3 text-[#FFDAB3]/65 text-sm leading-relaxed">
          <p>Create and manage organizations effortlessly.</p>
          <p>Assign tasks, track progress, and stay aligned.</p>
          <p>Designed for clarity, control, and persistence.</p>
        </div>

        <div className="mt-14">
          <button onClick={() => navigate("/signin")} className={`${signupCreateOrgBtn} px-20 py-4 tracking-widest`}> Enter Workspace
          </button>
        </div>

        <p className="mt-6 text-xs text-[#FFDAB3]/50 uppercase tracking-wide cursor-pointer hover:text-[#FFDAB3] transition" onClick={() => navigate("/signup")}> New organization? Create one → </p>
      </div>
    </div>
  );
};

export default Landing;