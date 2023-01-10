import { useState } from "react";
import Note from './Note'

function Notes() {
    const [ notes, setNotes ] = useState( [] );
    const [ curNote, setCurNote ] = useState('');

    
    function updateNote(event){
        setCurNote( event.target.value );
    }
    
    function addNote(){
        const newNote = [ ...notes, curNote ];
        setNotes( newNote );
    }

  return (
    <div className="App">
          <p>Notes App</p>
          <input type='text' onChange={ updateNote }></input>
          
          <button onClick={ addNote }>Submit</button><br/>
          <ul>
              {
                  notes.map( ( note,i ) => {
                      return <li key={i}><Note note={ note }></Note></li>
                  } ) 
              }
          </ul>
    </div>
  );
}

export default Notes;