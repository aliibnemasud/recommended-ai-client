import React, { useState } from 'react';
import Options from './Options';

const Questions = () => {
    const [movies, setMovies] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMovies(value)
    }

    const movieCat = {
        title: "Which type of movie you like ?",
        category: ["Action", "Thriller", "Comedy", "Romance"],
    }
    
    const categories = movieCat.category;
    
    // console.log(movies)
    



    return (
        <div>
            <div className='flex justify-between items-center max-w-7xl mx-auto mt-20'>
                <div className="shadow-xl p-5">
                    <h1 className='text-3xl'>Which type of movie you like ?</h1>
                    {
                        categories.map(cat => <Options handleChange={handleChange} cat={cat} />)
                    }
                </div>           

            </div>

        </div>
    );
};

export default Questions;