import React from 'react';
import './Movies.css';

const Movies = ({ movie }) => {
   
    return (
        <div>
            <img className=' movieImage rounded-xl' src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`} alt="" />
            <h3 className='mt-5 font-medium '>{movie?.title}</h3>
            <div className='flex justify-between mt-2'>
                <p className=' font-semibold text-primary'>{(movie?.release_date).split("-", 1)}</p>
                <p className="font-bold">{movie?.vote_average}</p>
            </div>
        </div>
    );
};

export default Movies;