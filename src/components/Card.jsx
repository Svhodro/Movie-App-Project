import React, { useEffect, useState } from "react";
import fetchDataFromApi from "../utils/api";
function Card({ index }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchDataFromApi("/trending/movie/day?language=en-US").then((res) => {
      setData(res.results[index]);
    });
    
  }, []);

  return (
    <div className="card card-compact w-60 bg-base-100 shadow-xl m-4 h-96">
      <figure>
        <img
          src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{data.original_title}</h2>
        <p>Release-Date:{data.release_date}</p>
        <div className="card-actions justify-end">
        
        </div>
      </div>
    </div>
  );
}

export default Card;
