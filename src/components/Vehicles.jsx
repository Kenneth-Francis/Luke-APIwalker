import React from 'react';

const Vehicles = (props) => {
    return (
        props.starWarsItem.map(
            (eachItem, idx) => {
                return (
                    <>
                        <li key={idx} className='list-group-item fs-5'>
                            Name: {eachItem.name}
                        </li>
                        <li key={idx} className='list-group-item fs-5'>
                            Model: {eachItem.model}
                        </li>
                        <li key={idx} className='list-group-item fs-5'>
                            Manufacturer: {eachItem.manufacturer}
                        </li>
                        <li key={idx} className='list-group-item fs-5'>
                            Passengers: {eachItem.passengers}
                        </li>
                    </>
                )
            }
        )
    )
}

export default Vehicles;