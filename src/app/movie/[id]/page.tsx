import React from 'react'
import Image from 'next/image';

const getMovie = async(id: number) =>{
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=1b00cbd8bfee19b1b30fbd0c84551453`)
    return await res.json();
}

const page = async({params}: {params: any}) => {
    const id = params.id
    const movieDetail = await getMovie(id);
    

  return (
    <div className='relative p-7 min-h-screen justify-center flex'>
        <Image fill alt="photo" src={`https://image.tmdb.org/t/p/original/${ movieDetail?.backdrop_path || movieDetail?.poster_path}`}/>
        <div className='absolute'>
            <div className='text-4xl font-bold my-3 text-white'>{movieDetail?.title}</div>
            <div className='text-white'>{movieDetail?.overview}</div>
            <div className="text-orange-500 my-3">IMDB {movieDetail?.vote_average}</div>
        </div>
    
    </div>
  )
}

export default page