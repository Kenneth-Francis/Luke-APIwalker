import React from 'react';

const Films = (props) => {
    return (
        props.starWarsItem.map(
            (eachItem, idx) => {
                return (
                    <>
                        <li key={idx} className='list-group-item fs-5'>
                            Title: {eachItem.title}
                        </li>
                        <li key={idx} className='list-group-item fs-5'>
                            Release Date: {eachItem.release_date}
                        </li>
                        <li key={idx} className='list-group-item fs-5'>
                            Director: {eachItem.director}
                        </li>
                        <li key={idx} className='list-group-item fs-5'>
                            Episode ID: {eachItem.episode_id}
                        </li>
                    </>
                )
            }
        )
    )
}

export default Films;