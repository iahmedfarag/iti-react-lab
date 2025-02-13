import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
    element: React.ReactElement;
    redirectTo: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element, redirectTo }) => {
    const token = localStorage.getItem("token"); // Check if token exists in localStorage

    return token ? <Navigate to={redirectTo} /> : element;
};

export default ProtectedRoute;
