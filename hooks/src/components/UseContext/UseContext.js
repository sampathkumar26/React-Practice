import React, { createContext } from 'react';
import A from './A';

const data = createContext();

function UseContext() {

    const name = 'sampath';

    return (
        <div>
            <data.Provider value={ name }>
                <A />
            </data.Provider>
        </div>
    )
}

export default UseContext;
export { data };