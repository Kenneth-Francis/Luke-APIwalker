import React from 'react';

const People = (props) => {
    console.log(props.starWarsItem);
    return (
        props.starWarsItem.map(
            (eachItem, idx) => {
                return (
                    <>
                        <li key={idx} className='list-group-item fs-5'>
                            Name: {eachItem.name}
                        </li>
                        <li key={idx} className='list-group-item fs-5'>
                            Height: {eachItem.height}
                        </li>
                        <li key={idx} className='list-group-item fs-5'>
                            Mass: {eachItem.mass}
                        </li>
                        <li key={idx} className='list-group-item fs-5'>
                            Birth Year: {eachItem.birth_year}
                        </li>
                    </>
                )
            }
        )
    )

}

export default People;