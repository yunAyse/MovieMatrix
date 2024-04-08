import {useEffect, useState} from "react";

import MovieCard from "./MovieCard";
import './App.css';
import searchIcon from './search.svg';

const App = () => {

  const [movies, setMovies] = useState([]);

  const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
  const API_URL = `http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}`;

  const movie1 = {
    "Title": "Batman: The Animated Series",
    "Year": "1992–1995",
    "imdbID": "tt0103359",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZmVkNDc3YjQtZDMzOS00MTNjLTljNzUtZDhjYWQxMmVlNjE5XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_SX300.jpg"
}

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

    useEffect(()=> {
    searchMovies('Spiderman');
  },[]);
  
  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input 
          placeholder="Search for movies"
          value='Batman'
          onChange={() => {}}
        />
        <img
          src={searchIcon}
          alt='search'
          onClick={()=>{}}
        />
      </div>

      {
        movies?.length > 0
        ? (
          <div className="container">
           {movies.map((movie) => (
            <MovieCard movie={movie}/>
           ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )
      }
    </div>
  );
};

export default App;
