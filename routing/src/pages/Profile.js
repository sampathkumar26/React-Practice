import React from 'react';
import { useParams } from 'react-router-dom';

function Profile () {
    const parameters = useParams();
    return (
        <h1>profile with id - {parameters.userId}</h1>
    )
}

export default Profile