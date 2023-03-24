import React from 'react'
import { Link } from 'react-router-dom'

function NavMenu () {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to='/pricing'>Pricing</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavMenu