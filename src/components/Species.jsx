import React from 'react';

const Species = (props) => {
    return (
        props.starWarsItem.map(
            (eachItem, idx) => {
                return (
                    <>
                        <li key={idx} className='list-group-item fs-5'>
                            Name: {eachItem.name}
                        </li>
                        <li key={idx} className='list-group-item fs-5'>
                            Classification: {eachItem.classification}
                        </li>
                        <li key={idx} className='list-group-item fs-5'>
                            Designation: {eachItem.designation}
                        </li>
                        <li key={idx} className='list-group-item fs-5'>
                            Average Lifespan: {eachItem.average_lifespan}
                        </li>
                    </>
                )
            }
        )
    )
}

export default Species;