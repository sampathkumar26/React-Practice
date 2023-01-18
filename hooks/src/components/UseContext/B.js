import React, { useContext } from 'react';
import { data } from './UseContext';

function B() {
    const name = useContext( data );
    return (
        <div>My name is { name }</div>
    )
}



export default B