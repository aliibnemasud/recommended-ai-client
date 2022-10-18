import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Movies from './Movies';
import Options from './Options';
import PlaceOption from './PlaceOption';
import Places from './Places';
import Product from './Product';

const Questions = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    
    const [page, setPage] = useState(1);
    const [places, setPlaces] = useState([])   
    const [products, setProducts] = useState([]);
     

    const [loading, setLoading] = useState(true);   

    const moviesCat = localStorage.getItem('moviesCat');
    const palacCatecory = localStorage.getItem('palacCatecory');
    const gender = localStorage.getItem('gender');
    const pdType = localStorage.getItem('pdType');
    


    useEffect(() => {
        fetchPopularMovies();
        fetchPlaces();
        fetchProduct();

        if (parseInt(moviesCat) === 0) {
            //setFilter(popularMovies);
            // setLoading(false);
            return
        }        
    }, [moviesCat, page])

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

    const placeData = {
        title: "Which type of movie you like ?",
        category: ["ocean", "mountain", "forest", "adventure"]
    }

    const fetchPopularMovies = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=a3ee5851ca3c6a69b6707e5a2a86acf4&language=en-US&page=${page}`);
        setPopularMovies(data.results);
        setLoading(false);
    }

    const fetchPlaces = async () => {
        const places = await axios.get('places.json');
        setPlaces(places.data)
    }

    const fetchProduct = async () => {
        const products = await axios.get('https://fakestoreapi.com/products');        
        setProducts(products.data)
    }   

    // Place Filter

    const placeFilterr = places.filter(place => (place.category) === palacCatecory);
    const filter = popularMovies.filter((movies) => movies.genre_ids.includes(parseInt(moviesCat)));

    // Product Filter

    const loadProducts = products.filter(pd => pd.category === gender );
    const pdTypes = products.filter(pd => pd.category === pdType );


    if (loading) {
        return <h1>Loading.....</h1>
    }

    return (
        <div>
            
            <div className='max-w-7xl mx-auto'>
                <h1 className='text-3xl my-10 font-bold'>Recommended Movies for you</h1>
                <div className='grid grid-cols-6 gap-8'>
                    {
                        filter.map(movie => <Movies movie={movie} />)
                    }
                </div>

                <div className="text-center my-5">
                    <button className='btn btn-primary btn-sm mr-3 mt-4' onClick={() => setPage(page - 1)}>Previous</button>
                    <button className='btn btn-primary btn-sm my-5' onClick={() => setPage(page + 1)}>Next</button>
                </div>
            </div>

            <div className='max-w-7xl mx-auto'>
                <h1 className='text-3xl my-10 font-bold'>You can explore this Places</h1>
                <div className='grid grid-cols-4 gap-8'>
                    {
                        placeFilterr?.map((place) => <Places place={place} />)
                    }
                </div>
            </div>

            <div className='max-w-7xl mx-auto'>
                <h1 className='text-3xl my-10 font-bold'>Products You May Like</h1>
                <div className='grid grid-cols-4 gap-8'>

                   {
                    loadProducts.map(product => <Product product={product} />)
                   } 
                   
                </div>
            </div>

            <div className='max-w-7xl mx-auto'>
                <h1 className='text-3xl my-10 font-bold'>You may like this products also.</h1>
                <div className='grid grid-cols-4 gap-8'>

                   {
                    pdTypes.map(product => <Product product={product} />)
                   } 
                   
                </div>
            </div>


            

        </div>
    );
};

export default Questions;