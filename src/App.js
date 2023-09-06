import {useState} from 'react';
import axios from 'axios';
import SearchButton from './components/SearchButton';
import ItemDisplay from './components/ItemDisplay';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Error from './components/Error';



function App() {
    const navigate = useNavigate();

    const [itemType, setItemType] = useState('')

    const [starWarsItem, setStarWarsItem] = useState([]);

    const getStarWarsItem = (itemType, itemId) => {

        setItemType(itemType);

        axios.get(`https://swapi.dev/api/${itemType}/${itemId}`)
            .then(res => {
                console.log([res.data])
                setStarWarsItem([res.data]);
                navigate(`/${itemType}/${itemId}`);
            })
            .catch(err => navigate('/error'));
        };
        

    return (
        <div className='App container col m-auto w-25'>
            <h3>Star Wars API Search</h3>
            
            <SearchButton getStarWarsItem={getStarWarsItem} />

            <Routes>
                <Route path='/:itemType/:itemId' element={ <ItemDisplay starWarsItem={starWarsItem} itemType={itemType} />} />
                <Route path='/error' element={ <Error  />} />
            </Routes>

        </div>
    );
}

export default App;
