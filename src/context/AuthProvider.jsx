import { createContext } from "react";
import { useEffect, useState, getLocalStorage } from "../constants/imports";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState({
        organization: null,
        admin: null,
        employees: []
    });

    useEffect(() => {
        const data = getLocalStorage();
        if (data) {
            setUserData(data);
        }
    }, []);

    return (
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;