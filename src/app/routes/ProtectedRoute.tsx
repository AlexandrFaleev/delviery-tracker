import {Navigate} from "react-router";
import * as React from "react";

const ProtectedRoute = ({children}: React.PropsWithChildren) => {
    const isAuthenticated = !!localStorage.getItem('token');

    if (!isAuthenticated) {
        return <Navigate to="/login" replace/>
    }
    return children;
}

export default ProtectedRoute