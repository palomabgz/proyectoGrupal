import { useState, createContext, useEffect } from "react";

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [isLogged, setIsLogged] = useState( () => {
        const store = localStorage.getItem('isLogged')
        return store ? store : false
    });

    useEffect(() => {
        localStorage.setItem('isLogged', isLogged)
    }, [isLogged])

    return (
        <AuthContext.Provider value={{ isLogged, setIsLogged }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider