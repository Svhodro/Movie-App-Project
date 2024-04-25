import React, { useContext, useEffect, useState } from "react";
import fetchDataFromApi from "../../../utils/api";
import "animate.css";
import UserContext from "../../../cotext/UserCotext";
import { useNavigate } from "react-router-dom";


function Hero() {
  // banner img variable

  const [img, setImg] = useState("");

  // data for search result

  const [searchtext, setSearchText] = useState("");
  const {setSearch}=useContext(UserContext)

  // banner img fatch function

  useEffect(() => {
    fetchDataFromApi("/trending/movie/day?language=en-US").then((res) => {
      setImg(
        "https://image.tmdb.org/t/p/original" +
          res.results[Math.floor(Math.random() * 20)].backdrop_path
      );
    });
  }, []);

  // change the search value function

  useEffect(() => {
    setSearch(searchtext);
  }, [searchtext]);
  // handle search click
  const navigate=useNavigate()
  const handleClick=()=>[
       navigate('result')
  ]

  return (
    <div>
      <div
        className="hero h-[500px] "
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold animate__fadeInDown text-white ">
              Welcome.
            </h1>
            <p className="py-6 text-xl text-white animate__bounceIn">
              Millions of movies, TV shows and people to discover. Explore now
            </p>
            <div className="flex justify-center items-center">
              <input
                type="text"
                placeholder="search a movie"
                className="input input-bordered input-accent w-full max-w-xs rounded-none rounded-l-lg bg-white"
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button className="btn btn-accent rounded-none rounded-r-lg text-white" onClick={handleClick}>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
