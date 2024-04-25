import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../../cotext/UserCotext'
import  fetchDataFromApi from '../../utils/api'
import Search from '../../components/Cards/Search'

function Result() {
  // import search text 
    const {search}=useContext(UserContext)
    const [data,setData]=useState([])
  // fatch data from search text 
  useEffect(()=>{
    fetchDataFromApi(`/search/movie?query=${search}&api_key=122e58b5eb8cba2cdec8a5122a0dac4e`).then(res=>{
      setData(res.results)
    }) 
  },[])
  

  return (
   <>
   <div className="flex flex-wrap justify-center">
   {data.map((data,index)=>{
    return <Search index={index}/>
   })}
   </div>
   
   
   </>
  )
}

export default Result