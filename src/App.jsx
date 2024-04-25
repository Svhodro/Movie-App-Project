import axios from "axios";
import { useEffect, useState } from "react";
import { fetchDataFromApi } from "./utils/api";
import { Outlet } from "react-router-dom";
import UserContextProvider from "./cotext/UserContextProvider"
import Navbar from "./components/Header/Nav/Navbar";

function App() {
  // /discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc

  // useEffect(() => {
  //   fetchDataFromApi(
  //     "/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
  //   ).then((res) => {
  //     console.log(res);
  //   });
  // });
  return (
    <>
    <UserContextProvider>
   <Navbar/>
      <Outlet />
     
      </UserContextProvider>
    </>
  );
}

export default App;
