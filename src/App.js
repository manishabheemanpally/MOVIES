import React, { useState } from 'react'; 
import { useEffect } from 'react'; 
import './App.css'; 
import MovieCard from './MovieCard'; 
  
const API_URL = 'https://www.omdbapi.com/?apikey=45f0782a&s=war'; 
const App = () => { 
    const [movies, setMovies] = useState([]); 
    const [searchTerm, setSearchTerm] = useState([]); 
    const searchMovies = async (title) => { 
        const response = await fetch(`${API_URL}&s=${title}`); 
        const data = await response.json(); 
        setMovies(data.Search); 
    } 
    useEffect(() => { 
        searchMovies(' '); 
    }, []); 
    return ( 
        <div className="app"> 
            <h1>MOVIES</h1> 
  
            <div className="search"> 
                <input 
                    placeholder="Search for Movies"
                    value={searchTerm} 
                    onChange={(e) => { setSearchTerm(e.target.value) }} 
                /> 
                
                    <i class="fa fa-search" aria-hidden="true">
                    
          </i>
            </div> 
  
            { 
                movies?.length > 0 
                    ? (<div className="container"> 
                        {movies.map((movie) => ( 
                            <MovieCard movie={movie} /> 
                        ))} 
                    </div>) : ( 
                        <div className="empty"> 
                            <h2>No Movies found</h2> 
                        </div> 
                    ) 
            } 
        </div> 
    ); 
} 
export default App;