import React, { useState } from 'react';

function BookEdit( { book, onEdit, onSubmit } ) {

    const [ title, setTitle ] = useState( book.title )

    const handleChange = ( e ) => {
        setTitle( e.target.value );
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        onSubmit( book.id, title )
    }

    return (
        <form onSubmit={ handleSubmit }>
            <label>Title</label>
            <input className="input" value={ title } onChange={ handleChange } />
            <button className="button is-primary mt-3">save</button>
        </form>
    );
}

export default BookEdit;