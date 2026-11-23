import React from "react";
import { Navigate } from "react-router-dom";

const isAdmin = false;

function ProtectedRoute({ children }) {
    if (!isAdmin) {
        return <Navigate to ="/" replace />
    }

    return children;
}

export default ProtectedRoute;