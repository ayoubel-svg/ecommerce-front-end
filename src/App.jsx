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
import Profile from './components/Profile'
import NotFound from "./components/NotFound"
import ForgetPassword from './components/forgetPassword'
import ResetPassword from './components/ResetPassword'
// import { GoogleOAuthProvider } from '@react-oauth/google';
import GoogleCallback from "./GoogleCallback";
import Loader from './components/Loader'
import { SkeletonTheme } from 'react-loading-skeleton'

function App() {
  const path = useLocation().pathname
  const [loading, setLoading] = useState(false)
  return (
    <div className="App" >
      <div className='loader-logo' style={{ display: loading ? "block" : 'none' }}>
        <Loader />
      </div>
      <NavBar color={(path === "/" || path === "/login" || path === "/register") ? "#fff" : "#586A8C"} />
      <SkeletonTheme>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<SignUp />} />
          <Route path="/" element={<Hero />} />
          <Route path='/store' element={<MyStore />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/shop' element={<ShopingCart />} />
          <Route path='/profile/:id' element={<Profile />} />
          <Route path='/productdetaille/:id' element={<ProductsDetaills />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/forget-password' element={<ForgetPassword />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path="/auth/google" element={<GoogleCallback />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </SkeletonTheme>
      <Footer />
    </div>

  )
}

export default App
