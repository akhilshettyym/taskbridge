import { useState } from 'react';

const Login = ({ handleLogin }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    console.log(`Email is ${email}`);
    console.log(`Password is ${password}`);

    setEmail("");
    setPassword("");
  }

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-[#0F1412] gap-6">
      <h4 className="text-3xl font-semibold text-[#FFDAB3]"> Login </h4>
      <div className="bg-[#1B211A] border border-[#FFDAB3]/40 rounded-3xl p-14 shadow-[0_0_40px_rgba(0,0,0,0.6)]">
        <form onSubmit={submitHandler} className="flex flex-col items-center justify-center gap-5">
          <input value={email} onChange={(e) => setEmail(e.target.value)} required type="email" placeholder="Enter your Email" className="w-80 bg-[#0F1412] border border-[#FFDAB3]/30 rounded-full px-5 py-3 text-[#F8F8F2] outline-none placeholder:text-gray-400 focus:border-[#FFDAB3] focus:ring-1 focus:ring-[#FFDAB3]/50 transition" />
          <input value={password} onChange={(e) => setPassword(e.target.value)} required type="password" placeholder="Enter password" className="w-80 bg-[#0F1412] border border-[#FFDAB3]/30 rounded-full px-5 py-3 text-[#F8F8F2] outline-none placeholder:text-gray-400 focus:border-[#FFDAB3] focus:ring-1 focus:ring-[#FFDAB3]/50 transition" />
          <button className="mt-4 w-full bg-[#FFDAB3] text-[#1B211A] font-semibold py-3 rounded-full hover:brightness-110 active:scale-95 transition-all"> Login </button>
        </form>
      </div>
    </div>
  )
}

export default Login;