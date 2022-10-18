import React from 'react';
import './Movies.css';

const Places = ({place}) => {
    return (
        <div className='p-3 shadow-md rounded-xl'>
            <img className='placeImg rounded-xl' src={place.thumbnail} alt="" />
            <h1 className=' my-3 font-bold'>{place.name}</h1>
            <p className='my-3'>{(place?.desc).slice(0,50)}</p>
            <a target="_blank" href={place?.link} className='btn btn-primary btn-sm '>More Details</a>
        </div>
    );
};

export default Places;