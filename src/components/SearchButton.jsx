import React from 'react';
import {useState} from 'react';

const SearchButton = (props) => {

    const [itemType, setItemType] = useState('');
    const [itemId, setItemId] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();

        props.getStarWarsItem(itemType, itemId);
    }

    return (
        <div className="card-body">
            <div className="card shadow">

                <div className="card-header">
                    <h3 className="text-primary-emphasis">SearchButton.jsx</h3>
                </div>

                <div className="card-body m-auto">
                    <form onSubmit={handleSubmit}>

                        <select className="form-select" name='itemType' onChange={(e) => setItemType(e.target.value)}>
                            <option defaultValue >Select Category</option>
                            <option value='people'>People</option>
                            <option value='films'>Films</option>
                            <option value='starships'>Starships</option>
                            <option value='vehicles'>Vehicles</option>
                            <option value='species'>Species</option>
                            <option value='planets'>Planets</option>
                        </select>

                        <div className="mb-3">
                            <label className="form-label fs-5">Search For: </label>
                            <input className="form-control" name="itemId" type="number" onChange={(e) => setItemId(e.target.value)}></input>
                        </div>

                        <input className="form-control btn btn-info w-50 float-end" type="submit" value="Search" />

                    </form>
                </div>
            
            </div>
        </div>
    )
}

export default SearchButton;