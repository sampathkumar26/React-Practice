import { useState } from 'react';
import BookCreate from './components/BookCreate';
import './App.css';
import 'bulma/css/bulma.min.css'

function App() {

  const [ books, setBooks ] = useState( [] );

  function createBook( title ) {
    const updatedBooks = [
      ...books,
      {
        id: '112',
        title: title
      }
    ];

    setBooks( updatedBooks );
    console.log( books );
  }

  function editBook() {

  }

  function deleteBook() {

  }

  return (
    <div className="App">
      <h1 className='m-5 is-size-1'>Books Application</h1>
      <BookCreate onCreate={ createBook } />
    </div>
  );
}

export default App;
