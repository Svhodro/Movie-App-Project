import React, { useEffect, useState } from "react";
import fetchDataFromApi from "../../utils/api";
import { useNavigate } from "react-router-dom";

function Populer({ index }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchDataFromApi("/trending/tv/day?language=en-US").then((res) => { 
      setData(res.results[index]);
    });
  }, []);
  // navigation function
  const navigate = useNavigate();

  return (
    <div>
      <div className="card card-compact w-60 bg-base-100 shadow-xl m-4 h-96">
        <figure>
          <img
            src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{data.original_name}</h2>
          <p>known_for_department:{data.known_for_department}</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
}

export default Populer;
