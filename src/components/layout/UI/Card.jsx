import React from 'react';
import './Card.css'; // Import custom CSS
import { NavLink } from 'react-router-dom';
// import './Card.css'
const Card = ({ currMovie }) => {
  const { Poster, imdbID, Title, Year, Type } = currMovie;

  return (
    <div className="movie-card">
        <a href={`https://www.imdb.com/title/${imdbID}`} target="_blank" rel="noopener noreferrer">
      <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/300x450"} alt={Title} className="movie-poster" />
        </a>
      <div className="movie-info">
        <h2 className="movie-title">{Title}</h2>
        <p className="movie-details">Year: {Year}</p>
        <p className="movie-details">Type: {Type}</p>
        <p className="movie-id">IMDB ID: {imdbID}</p>
         <NavLink to={`/movie/${imdbID}`}>
          <button className="watch-button">Watch Now</button>

         </NavLink>

        
      </div>
    </div>
  );
};

export default Card;
