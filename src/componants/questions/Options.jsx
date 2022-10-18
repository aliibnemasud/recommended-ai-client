import React from 'react';

const Options = ({handleChange, cat}) => {
    return (
        <div className='flex mt-3 items-center'>
            <input type="radio" value={cat.id} name="moviesCategory" onChange={handleChange} className="radio radio-primary mr-2" /> <h3 className='text-xl'>{cat.name}</h3>
        </div>
    );
};

export default Options;