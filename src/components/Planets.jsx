import React from 'react';

const Planets = (props) => {
    return (
        props.starWarsItem.map(
            (eachItem, idx) => {
                return (
                    <>
                        <li key={idx} className='list-group-item fs-5'>
                            Name: {eachItem.name}
                        </li>
                        <li key={idx} className='list-group-item fs-5'>
                            Gravity: {eachItem.gravity}
                        </li>
                        <li key={idx} className='list-group-item fs-5'>
                            Climate: {eachItem.climate}
                        </li>
                        <li key={idx} className='list-group-item fs-5'>
                            Population: {eachItem.population}
                        </li>
                    </>  
                )
            }
        )
    )

}

export default Planets;