import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "../../components/Card";
import axios from "axios";
import fetchDataFromApi from "../../utils/api";
import Populer from "../../components/Cards/Populer";
import Top from "../../components/Cards/Top";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Home() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  //Data Store Variable
  const [Data, setData] = useState([]);

  // Fatch Data From TMDB

  useEffect(() => {
    fetchDataFromApi("/trending/movie/day?language=en-US").then((data) => {
      setData(data.results);
    }, []);
  });

  return (
    <>
      <Header />
      <div className="overflow-hidden">
        <h1 className="text-2xl text-white pl-4">Tranding Movie's</h1>
        <Slider {...settings}>
          {Data.map((data, index) => {
            return <Card index={index} />;
          })}
        </Slider>
      </div>
      <div className="overflow-hidden">
        <h1 className="text-2xl text-white pl-4">Top Rated Tv-Show</h1>
        <Slider {...settings}>
          {Data.map((data, index) => {
            return <Populer index={index} />;
          })}
        </Slider>
      </div>
      <div className="overflow-hidden">
        <h1 className="text-2xl text-white pl-4">Top Rated Tv-Show</h1>
        <Slider {...settings}>
          {Data.map((data, index) => {
            return <Top index={index} />;
          })}
        </Slider>
      </div>
      <Footer />
    </>
  );
}

export default Home;
