import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Options from '../questions/Options';
import PlaceOption from '../questions/PlaceOption';

const Home = () => {

    const [moviesCat, setMoviesCat] = useState(0);
    const navigate = useNavigate();

    const handleChange = (e) => {
        //const { name, value } = e.target;
        //setMoviesCat(e.target.value);        
        localStorage.setItem('moviesCat', e.target.value)
    }
    const movieCat = {
        title: "Which type of movie you like ?",
        /* category: ["Action", "Horror", "Comedy", "Romance", "Crime"],
        category_value: [28, 27, 35, 10749, 80], */
        category: [
            {
                id: 28,
                name: "Action"
            },
            {
                id: 27,
                name: "Horror"
            },
            {
                id: 35,
                name: "Comedy"
            },
            {
                id: 10749,
                name: "Romance"
            },
            {
                id: 80,
                name: "Crime"
            },
        ]
    }
    return (
        <div>
            <div className="shadow-xl p-10 bg-slate-100 w-1/3 mt-10 mx-auto rounded-xl">
                <h1 className='text-3xl my-2 font-bold'>Which type of movie you like ?</h1>
                {
                    movieCat?.category?.map(cat => <Options handleChange={handleChange} cat={cat} />)
                }
            </div>

            <button onClick={() => navigate('/q2')} className='btn btn-primary block my-10 mx-auto'>Next</button>
        </div>
    );
};

export default Home;