import { Button, Input } from 'antd';
import React, { useRef, useState } from 'react';

function UseRef() {

    const [ name, setName ] = useState( '' );

    const inputName = useRef( null );

    function displayName() {
        const name = inputName.current.input.value;
        setName( name );
    }

    return (
        <div>
            <Input placeholder="Basic usage" style={ { height: 60 } } ref={ inputName } />
            <h1>My name is { name }</h1>
            <Button onClick={ displayName }>Click</Button>
        </div>
    )
}

export default UseRef;