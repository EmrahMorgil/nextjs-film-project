import Movies from "@/components/Movies";
import React from "react";

const page = async ({ searchParams }: { searchParams: any }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"
    }?api_key=1b00cbd8bfee19b1b30fbd0c84551453&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  const data = await res.json();

  return (
    <div className="flex items-center flex-wrap gap-3 justify-center">
      {
        data?.results?.map((dt: any, i: number)=>(
          <Movies key={i} dt={dt}/>
        ))
      }
    </div>
  );
};

export default page;
