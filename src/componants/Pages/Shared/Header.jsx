import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className=' bg-black flex items-center justify-between px-36'>
            <h1 className='text-3xl text-white font-bold  uppercase text-center py-10'>Welcome to Ai Recommendation</h1>
            <div>
                <Link to="/" className='btn btn-link text-white'>Home</Link>
                <Link to="/recommended" className='btn btn-link text-white'>Recommended Page</Link>
            </div>
        </div>
    );
};

export default Header;