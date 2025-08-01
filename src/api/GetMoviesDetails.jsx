// import React from 'react'

// export const getMoviesDetails =async ({params}) => {
// const id= params.movieID;
// console.log(params,'-----params');

//       try {
//        const response=  await fetch(`http://www.omdbapi.com/?i=${params.id}&page=1&apikey=e2ff7cc`)
                                     //  https://www.omdbapi.com/?i=${id}&apikey=e2ff7cc 
//         // fetch('http://www.omdbapi.com/?i=tt3896198&apikey=e2ff7cc=titanic&page=1')
//     const data= response.json();
//     return data

//     } catch (error) {
//         console.log(error.message);
        
//     }
//   return (
//     <>
    
//     </>
//   )
// }

export const getMoviesDetails = async ({ params }) => {
  const id = params.movieID;
  console.log(params, '-----params');

  try {
    const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=e2ff7cc`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
    throw new Error("Failed to load movie details");
  }
};
