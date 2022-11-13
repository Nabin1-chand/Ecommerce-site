import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Category from './items/Category'
import Data from './api/Data'
import NavBar from './NavBar'
import Login from './forms/Login'
import Register from './forms/Register'

const Main = () => {
  return (
    <>
        <BrowserRouter>
         <NavBar/>
           <Category/>
            <Routes>
            <Route path ="/login" element={<Login />}/>
            <Route path ="/register" element ={<Register/>}/>
                <Route path ="/smartphones" element={<Data category="smartphones"/>}/>
                <Route path ="/laptops" element ={<Data  category="laptops"/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Main