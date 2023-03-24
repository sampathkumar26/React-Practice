import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

function Pricing () {

    const location = useLocation()

    return (
        <div>
            <h1>This is a Pricing page</h1>
            <nav>
                <Link to={location.pathname + '/free'}>Free</Link>
                <Link to={location.pathname + '/premium'}>Premium</Link>
                {/* TODO:fix the to and fro path change */}
            </nav>
            <Outlet />
        </div>
    )
}

export default Pricing