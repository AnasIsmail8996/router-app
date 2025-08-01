import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Home from './pages/Home';
import About from './pages/About';
import Movie from './pages/Movie';
import Contact, { contactData } from './pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorPage from './pages/ErorrPage';
import { GetApiData } from './api/Getapidata';
import MoviesDetails from './components/layout/UI/MoviesDetails';
import {getMoviesDetails} from './api/GetMoviesDetails';

const App = () => {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<AppLayout />,
      errorElement:<ErrorPage/>,
      children:[
{
      path:'/',
      element:<Home/>
    },
      {
      path:'/about',
      element:<About/>
    },
      {
      path:'/movie',
      element:<Movie/>,
      loader:GetApiData
    },
      {
      path:'/movie/:movieID',
      element:<MoviesDetails/>,
      loader:getMoviesDetails
    },
      {
       path: "/contact",
  element: <Contact />,
  action: contactData
    }
      ]
    },
    
    
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App;
