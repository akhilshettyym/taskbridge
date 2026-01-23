import { createContext, useState } from "react";
import { getLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [userData, setUserData] = useState(null);

    const data = getLocalStorage();
    console.log("data", data.admin);
    

    return (
        <div>
            <AuthContext.Provider value={"AKHIL"}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider;