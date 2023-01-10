import { useState } from 'react';
import './App.css'
import searchImages from './api';
import ImageList from './Components/ImageList';
import SearchBar from './Components/SearchBar';

const App = () => {

    const [images, setImages] = useState([])

    const handleSubmit = async (term) => {
        const result = await searchImages( term );
        setImages(result);
    };

    return (
        <div className='search'>
            <div className='title'>Image Searcher</div>
            <SearchBar onSubmit={ handleSubmit } />
            <ImageList images={images} />
        </div>
    );
}

export default App;