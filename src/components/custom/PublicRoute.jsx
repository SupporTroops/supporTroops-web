import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import auth from "../../utils/auth";

function PublicRoute() {
    const location = useLocation();

    if (auth.isAuthenticated()) {
        return (
            <Navigate to="/dashboard" replace state={{ location: location }} />
        );
    } else {
        return <Outlet />;
    }
}

export default PublicRoute;
