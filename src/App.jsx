import React, { useEffect, useState } from 'react'
import "./styles/App.css"
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import Footer from './components/Footer'
import MyStore from './components/MyStore'
import Contact from "./components/Contact"
import About from './components/About'
import ShopingCart from './components/ShopingCart'
import ProductsDetaills from './components/ProductsDetaills'
import Checkout from './components/Checkout'
import Login from './components/Login'
import SignUp from './components/SignUp'
import { useLocation } from 'react-router-dom'
function App() {
  const path = useLocation().pathname

  return (
    <div className="App">
      <NavBar color={(path === "/" || path === "/login" || path === "/register") ? "#fff" : "#586A8C"} />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<SignUp />} />
        <Route path="/" element={<Hero />} />
        <Route path='/store' element={<MyStore />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/shop' element={<ShopingCart />} />
        <Route path='/productdetaille/:id' element={<ProductsDetaills />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
      <Footer />
    </div>

  )
}

export default App
