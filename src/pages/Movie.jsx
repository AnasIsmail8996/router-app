import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Card from '../components/layout/UI/Card';

const Movie = () => {
  const moviesData=useLoaderData();
  console.log(moviesData);
  
  return (
    <>
      <ul className="card-grid">

        {moviesData && moviesData.Search.map((currMovie)=>  {
          return <Card  key={currMovie.imdbID}  currMovie={currMovie}/>
        })}
        </ul>
     
    </>
  )
}

export default Movie
