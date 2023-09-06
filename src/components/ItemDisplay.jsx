import React from 'react';
import People from './People';
import Films from './Films';
import Starships from './Starships';
import Vehicles from './Vehicles';
import Species from './Species';
import Planets from './Planets';
    
const ItemDisplay = (props) => {

    const conditionalDisplay = () => {
        switch (props.itemType) {

            case 'people':
                return ( <People starWarsItem={props.starWarsItem} /> )

            case 'films':
                return ( <Films starWarsItem={props.starWarsItem} /> )

            case 'starships':
                return ( <Starships starWarsItem={props.starWarsItem} /> )

            case 'vehicles':
                return ( <Vehicles starWarsItem={props.starWarsItem} /> )

            case 'species':
                return ( <Species starWarsItem={props.starWarsItem} /> )

            case 'planets':
                return ( <Planets starWarsItem={props.starWarsItem} /> )

            default:
                return null
    
        }
    }

    return (
        <div className="card-body">
            <div className="card shadow">
                <div className="card-header">
                    <h3 className="text-warning-emphasis">ItemDisplay.jsx</h3>
                </div>

                <div className="card-body">
                    <ul className="list-group">
                        {conditionalDisplay()}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default ItemDisplay;