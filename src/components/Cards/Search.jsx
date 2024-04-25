import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../cotext/UserCotext";
import fetchDataFromApi from "../../utils/api";

function Search({ index }) {
  // img url veriable


  const [data, setData] = useState([]);

  const { search } = useContext(UserContext);
  useEffect(() => {
    fetchDataFromApi(
      `/search/movie?query=${search}&api_key=122e58b5eb8cba2cdec8a5122a0dac4e`
    ).then((res) => {
      setData(res.results[index]);
      console.log(res.results);
  

    });
  }, []);

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
          <h2 className="card-title">{data.title}</h2>
          <p>Release-Date: {data.release_date}</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
}

export default Search;
