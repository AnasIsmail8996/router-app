import React from 'react'
import errorGif from './images/404-error-page-svg-animation.gif';
import { NavLink, useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate=useNavigate()


  const handleError=()=>{
    navigate(-1)
  }
    return (
    <>
    <div style={{display:'flex', flexDirection:'column', flex:'wrap', justifyContent:'center', alignItems:'center'}}>

    <img src={errorGif} alt="404 Error Page" />

    {/* <NavLink>
        <a to="/"  className='btn btn-primary' >Back To Home</a>
    </NavLink> */}

    <button onClick={handleError} className='btn btn-dark'>Go Back</button>
    </div>
    </>
  )
}

export default ErrorPage;