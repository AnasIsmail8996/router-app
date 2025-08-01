import React from 'react';
import { NavLink } from 'react-router-dom';
import img from './images/alladin_600x450_moviespg_mobile_7_d097b99b.jpeg'
const Home = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Left Column - Image */}
        <div className="col-md-6">
          <img
            src={img}
            alt="Movies"
            className="img-fluid rounded"
          />
        </div>

        {/* Right Column - Text and Button */}
        <div className="col-md-6 text-center text-md-left mt-4 mt-md-0">
          <h1>Unlimited Movies and TV Shows</h1>
          <NavLink to='/movie'>
            
          <a href="/movies" className="btn btn-primary mt-3">
           Watch Movies
          </a>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;

