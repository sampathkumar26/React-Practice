import 'bulma/css/bulma.min.css';
import { useState } from 'react';
import './App.css';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {

  const [ books, setBooks ] = useState( [] );

  function deleteBookById( id ) {
    const updatedBooks = books.filter( ( book ) => {
      return book.id !== id;
    } )

    setBooks( updatedBooks )
  }

  function createBook( title ) {
    const updatedBooks = [
      ...books, {
        id: Math.round( Math.random() * 9999 ),
        title
      }
    ];

    setBooks( updatedBooks );
  }

  function editBookById( id, newTitle ) {
    const updatedBooks = books.map( ( book ) => {
      if ( book.id === id ) {
        return { ...book, title: newTitle };
      }
      return book
    } )

    setBooks( updatedBooks );
  }

  return (
    <div className="app">
      <h1 className='has-text-centered'>Books Application</h1>
      <h1>Reading List</h1>
      <BookList books={ books } onEdit={ editBookById } onDelete={ deleteBookById } />
      <BookCreate onCreate={ createBook } />
    </div>
  );
}

export default App;
