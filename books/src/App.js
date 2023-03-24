import { useContext, useEffect } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import BooksContext from './context/books';

function App() {
  const { fetchBooks } = useContext( BooksContext );

  useEffect( () => {
    fetchBooks();
  }, [] );

  return (
    <div className="app">
      <center><h1>Books Application</h1></center>
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
