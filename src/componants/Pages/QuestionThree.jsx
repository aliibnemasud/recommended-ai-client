import React from 'react';
import { useNavigate } from 'react-router-dom';

const QuestionThree = () => {

    const navigate = useNavigate();

    const handleChange = (e) => {
        localStorage.setItem('pdType', e.target.value)
    }
    return (
        <div>
            <div className="shadow-xl p-10 bg-slate-100 w-1/3 mt-10 mx-auto rounded-xl ">
                <h1 className='text-3xl my-2 font-bold'>Do you want no see some Jewelry or Electronics?</h1>

                <div className='flex mt-3 items-center'>
                    <input type="radio" value="electronics" name="moviesCategory" onChange={handleChange} className="radio radio-primary mr-2" /> <h3 className='text-xl'>Electronics</h3>
                </div>
                <div className='flex mt-3 items-center'>
                    <input type="radio" value="jewelery" name="moviesCategory" onChange={handleChange} className="radio radio-primary mr-2" /> <h3 className='text-xl'>Jewelery</h3>
                </div>
            </div>

            <div className='text-center my-10'>
                <button onClick={() => navigate('/q3')} className='btn btn-primary mr-5'>Previews</button>

                <button onClick={() => navigate('/recommended')} className='btn btn-primary'>Next</button>
            </div>
        </div>
    );
};

export default QuestionThree;