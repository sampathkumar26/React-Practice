import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute () {
    const isLogged = true;

    return (
        <div>
            {isLogged ? <Outlet /> : <Navigate to='/login' />}
        </div>
    )
}

export default ProtectedRoute