import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
  
    useEffect(() => {
        const loggedIn = localStorage.getItem("isLoggedIn") === "true";
        const storedUsername = localStorage.getItem("username");
        if (loggedIn) {
            setIsLoggedIn(true);
            setUsername(storedUsername || "");
        }
    }, []);
  
    const login = (username) => {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("username", username ?? "default");
      setIsLoggedIn(true);
      setUsername(username);
    };
  
    const logout = () => {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("username");
      setIsLoggedIn(false);
      setUsername("");
    };
    

    return (
        <AuthContext.Provider value={{ isLoggedIn, username, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;