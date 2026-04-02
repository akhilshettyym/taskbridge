import { createContext, useState, useEffect } from "react";
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [auth, setAuth] = useState(() => {
    const token = localStorage.getItem("tb_token") || null;
    const user = JSON.parse(localStorage.getItem("tb_user") || "null");
    return { token, user };
  });

  useEffect(() => {
    if (auth?.token) localStorage.setItem("tb_token", auth.token);
    else localStorage.removeItem("tb_token");
    if (auth?.user) localStorage.setItem("tb_user", JSON.stringify(auth.user));
    else localStorage.removeItem("tb_user");
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}