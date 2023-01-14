import { useRef } from "react";

function Form() {

    const inputName = useRef( null );

    function handleSubmitForm( e ) {
        e.preventDefault();
        const name = inputName.current.value;
        console.log( name );
    }

    return (
        <div className="App">
            <form onSubmit={ handleSubmitForm }>
                <input type='text' ref={ inputName } />
                <br />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default Form;
