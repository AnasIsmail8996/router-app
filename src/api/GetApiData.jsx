import React from 'react'

export const GetApiData = async() => {
    try {
       const response=  await fetch('https://www.omdbapi.com/?s=titanic&page=1&apikey=e2ff7cc') 
        // fetch('http://www.omdbapi.com/?i=tt3896198&apikey=e2ff7cc=titanic&page=1')
    const data= response.json();
    return data

    } catch (error) {
        console.log(error.message);
        
    }
  return (
    <>
    </>
  )
}

