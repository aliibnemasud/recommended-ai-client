import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PlaceOption from '../questions/PlaceOption';

const QuestionOne = () => {
    const [palacCatecory, setPalacCatecory] = useState("");
    const navigate = useNavigate();
    const placeData = {
        title: "Which type of movie you like ?",
        category: ["ocean", "mountain", "forest", "adventure"]
    }

    useEffect(() => {
        localStorage.setItem('palacCatecory', palacCatecory)
    }, [palacCatecory])


    return (
        <div>
            <div>
                <div className="shadow-xl p-10 bg-slate-100 w-1/3 mt-10 mx-auto rounded-xl ">
                    <h1 className='text-3xl my-2 font-bold'>Favorite place, you want go ?</h1>
                    {
                        placeData?.category?.map(cat => <PlaceOption cat={cat} setPalacCatecory={setPalacCatecory} />)
                    }
                </div>

                <div className='text-center my-10'>
                    <button onClick={() => navigate('/')} className='btn btn-primary mr-5'>Previews</button>

                    <button onClick={() => navigate('/q3')} className='btn btn-primary'>Next</button>
                </div>
            </div>
        </div>
    );
};

export default QuestionOne;