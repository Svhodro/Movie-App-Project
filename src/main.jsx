import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import Details from './Pages/Details/Details.jsx'
import Nopage from './Pages/Nopage/Nopage.jsx'
import Result from './Pages/Result/Result.jsx'
import Movie from './Pages/Movie/Movie.jsx'
import Tv from './Pages/TV/Tv.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
      
      <Route path='/' element={<App/>}>
          <Route index element={<Home/>}/>
          <Route path='details' element={<Details/>} />
          <Route path='result' element={<Result/>} />            
          <Route path='movie' element={<Movie/>} /> 
          <Route path='Tv' element={<Tv/>} />      
          <Route path='*' element={<Nopage/>}/>
          
      </Route>
      
      
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
