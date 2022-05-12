import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import auth from "../../utils/auth";

function ProtectedRoute() {
    const location = useLocation();

    if (auth.isAuthenticated()) {
        return <Outlet />;
    } else {
        return <Navigate to="/login" replace state={{ location: location }} />;
    }
}

export default ProtectedRoute;
