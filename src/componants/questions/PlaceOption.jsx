import React from 'react';

const PlaceOption = ({cat, setPalacCatecory}) => {
    return (
        <div className='flex mt-3 items-center'>
            <input type="radio" value={cat} name="moviesCategory" onClick={(e) => setPalacCatecory(e.target.value)} className="radio radio-primary mr-2" /> <h3 className='text-xl'>{cat}</h3>
        </div>
    );
};

export default PlaceOption;