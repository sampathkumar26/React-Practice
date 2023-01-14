import React, { useState, useEffect } from 'react'

function UseEffectHook() {

    const [ counter, setCounter ] = useState( 0 );

    useEffect( () => {

        return () => {
            console.log( counter );
        }
    }, [ counter ] )


    return (
        <div className='App'>
            <p>{ counter }</p>
            <button onClick={ () => { setCounter( counter + 1 ) } }>increment</button>
        </div>
    )
}

export default UseEffectHook