import React, { useEffect, useState } from "react";
import fetchDataFromApi from "../../utils/api";
function Movie() {
  const [data, setData] = useState([]);
  const [page,setPage]=useState(1)

// prev page function
const HandlePriv=()=>{
    if (page>1) {
       setPage(page-1)
       
    }
}

// next page function
const Handlenext=()=>{
  if (page>=1) {
   setPage(page+1)
   
  }
}
  useEffect(() => {
    fetchDataFromApi(
      `/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`
    ).then((res) => {
      setData(res.results);
    });
  }, [page]);


  return (
    <div className="flex gap-4 flex-wrap justify-around p-6">
      {data.map((data, index) => {
        return (
          <>
            <div>
              <div className="card card-compact w-60 bg-base-100 shadow-xl p-4  h-96">
                <figure>
                  <img
                    src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{data.original_title}</h2>
                  <p>Release-Date:{data.release_date}</p>
                </div>
              </div>
            </div>
          </>
        );
      })}
      <div className="flex w-full justify-center">
      <div className="join grid grid-cols-2">
        <button className="join-item btn btn-outline" onClick={HandlePriv}>Previous page</button>
        <button className="join-item btn btn-outline" onClick={Handlenext}>Next</button>
      </div>
      </div>
      
    </div>
  );
}

export default Movie;
