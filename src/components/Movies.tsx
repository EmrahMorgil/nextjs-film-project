"use client"
import Image from 'next/image'
import React from 'react'

const Movies = ({dt}: {dt: any}) => {

    console.log(dt);
    
    
  return (
    <div className='min-w-[450px] relative'>
        <Image width={450} height={400} alt='photo' src={`https://image.tmdb.org/t/p/original/${dt?.backdrop_path || dt?.poster_path}`} />

        

    </div>
  )
}

export default Movies