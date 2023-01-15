import React, { useState } from 'react';

function UseState() {

    const [ count, setCount ] = useState( 0 );

    function decrementCount() {
        setCount( prevCount => prevCount - 1 )
    }

    function incrementCount() {
        setCount( prevCount => prevCount + 1 )
    }


    return (
        <div className='container'>
            <button className="button is-primary is-outlined" onClick={ decrementCount }>-</button>
            <h1 className="content is-large">{ count }</h1>
            <button className="button is-primary is-outlined" onClick={ incrementCount }>+</button>
        </div>
    )
}

export default UseState;