import { createContext, useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface AuthContextProps {
    token: string | null;
    login: (newToken: string) => void;
    logout: () => void;
    isAuthenticated: boolean;
}

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [token, setToken] = useState<string | null>(localStorage.getItem("token"));
    const navigate = useNavigate();
    const login = (newToken: string) => {
        setToken(newToken);
        localStorage.setItem("token", newToken);
        navigate("/");
    };

    const logout = () => {
        setToken(null);
        localStorage.removeItem("token");
    };

    return <AuthContext.Provider value={{ token, login, logout, isAuthenticated: !!token }}>{children}</AuthContext.Provider>;
};
