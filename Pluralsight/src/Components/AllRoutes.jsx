import React from 'react'
import {Route, Routes} from 'react-router-dom'
import LandingPage from '../Pages/LandingPage'
import JavaScript from '../Pages/JavaScript'
import Angular from '../Pages/Angular'
import Cplus from '../Pages/Cplus'
import Python from '../Pages/Python'
import Signup from '../Pages/Signup'
import Signin from '../Pages/Signin'
import Plans from '../Pages/Plans'
import Products from '../Pages/Products'
import SingleProduct from '../Pages/SingleProduct'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/javaScript' element={<JavaScript/>}/>
        <Route path='/angular' element={<Angular/>}/>
        <Route path='/c++' element={<Cplus/>}/>
        <Route path='/python' element={<Python/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Signin/>}/>
        <Route path='/plans' element={<Plans/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/product' element={<SingleProduct/>}/>
    </Routes>
    
  )
}

export default AllRoutes