import Movies from "@/components/Movies";
import React from "react";

const page = async ({ params }: { params: any }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=1b00cbd8bfee19b1b30fbd0c84551453&query=${params.keyword}&language=en-US&include_adult=false`
  );
  const data = await res.json();

  return (
    <div>
      {!data.results ? (
        <div>
          <h1 className="flex justify-center">Aradığınız şey bulunamadı !</h1>
        </div>
      ) : (
        <div className="flex items-center flex-wrap gap-3 justify-center">
          {data?.results?.map((dt: any, i: number) => (
            <Movies key={i} dt={dt} />
          ))}
        </div>
      )}
    </div>
  );
};

export default page;
