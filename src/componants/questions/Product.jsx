import React from 'react';

const Product = ({ product }) => {    
    return (
        <div className='shadow-md rounded-xl p-10'>
            <img className='mx-auto w-1/2 h-1/2 my-4' src={product?.image} alt="" />
            <h2 className='font-bold'>{product.title}</h2>
            <div className='flex justify-between mt-3'>
                <h3 className=' text-primary font-bold'>$ {product.price}</h3>
                <h3 className=' text-primary font-bold'>{product.rating.rate}</h3>
            </div>
            <button className='btn btn-primary btn-sm mt-3 text-center block'>Buy Now</button>
        </div>
    );
};

export default Product;