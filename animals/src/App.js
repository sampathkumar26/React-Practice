import { useState } from 'react';
import AnimalShow from "./AnimalShow";
import './App.css';
function getRandomAnimals() {
    const animal = [ 'bird', 'cat', 'cow', 'dog', 'gator', 'horse']
    return animal[ Math.floor( Math.random() * animal.length ) ];
}

function App() {

    const [ animals, setAnimal ] = useState([]);

    const handleClick = () => {
        setAnimal( [ ...animals, getRandomAnimals() ] );
    };

    const renderAnimals = animals.map( (animal, index) => {
        return <AnimalShow type={ animal } key={ index } />;
    } );

    return (
        <div className='app'>
            <button onClick={handleClick}>
                Add animal
            </button>
            <div className='animal-list'>{renderAnimals}</div>
</div>
    );
}

export default App;