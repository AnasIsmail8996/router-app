import React from 'react'
import { useLoaderData} from 'react-router-dom';
import './MovieDetails.css'; 
const   MoviesDetails = () => {
    // const params=useParams();
    // console.log(params);

    const movieData=useLoaderData();
     const {
    Title,
    Year,
    imdbID,
    Type,
    Poster,
    Genre,
    Plot,
    Actors,
    Runtime,
    imdbRating
  } = movieData;
    console.log(movieData, '-----------moviedara');
  return (

    <>
                <section className="details-card">
      <img
        src={Poster !== 'N/A' ? Poster : 'https://via.placeholder.com/300x450'}
        alt={Title}
        className="details-poster"
      />
      <div className="details-info">
        <h1>{Title}</h1>
        <p><strong>Year:</strong> {Year}</p>
        <p><strong>Type:</strong> {Type}</p>
        <p><strong>Genre:</strong> {Genre}</p>
        <p><strong>Runtime:</strong> {Runtime}</p>
        <p><strong>IMDB Rating:</strong> {imdbRating}</p>
        <p><strong>Actors:</strong> {Actors}</p>
        <p><strong>Plot:</strong> {Plot}</p>
        <a href={`https://www.imdb.com/title/${imdbID}`} target="_blank" rel="noopener noreferrer">
          <button className="watch-button">View on IMDb</button>
        </a>
      </div>
    </section>
   
    </>
  )
}

export default MoviesDetails;