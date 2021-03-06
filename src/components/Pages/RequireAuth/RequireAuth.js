import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";

const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();

    if (loading) {
        return (
            <div className="flex justify-center h-full items-center">
                <div
                    className="spinner-border animate-spin inline-block w-8 h-8 border-4 border-slate-600 rounded-full"
                    role="status"
                >
                    <span className="visually-hidden"></span>
                </div>
            </div>
        );
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAuth;
