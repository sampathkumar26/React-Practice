import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login () {

    const [name, setName] = useState( '' );
    const navigate = useNavigate();

    function handleSubmit ( e ) {
        e.preventDefault();
        if ( name === 'sampath' ) {
            navigate( '/user/Sampath' )
        }
        else {
            navigate( '/about' )
        }
    }
    return (
        <div>
            <h1>This is a Login Page</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' onChange={( e ) => { setName( e.target.value ) }} />
            </form>
        </div>
    )
}

export default Login