"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Movies = ({ dt }: { dt: any }) => {

    const router = useRouter();

  return (
    <div onClick={()=>router.push(`/movie/${dt?.id}`)} className="min-w-[450px] relative cursor-pointer">
      <Image
        width={450}
        height={400}
        alt={dt?.title}
        src={`https://image.tmdb.org/t/p/original/${
          dt?.backdrop_path || dt?.poster_path
        }`}
      />

      <div className="absolute bottom-0 p-3 w-full h-full flex flex-col justify-end opacity-0 hover:opacity-100">
        <div className="text-2xl font-bold text-white">{dt?.title}</div>
        <div>
            <div className="text-white">{dt?.release_date}</div>
            <div className="text-orange-500">{dt?.vote_average}</div>
      </div>
    </div>
    </div>
  );
};

export default Movies;
