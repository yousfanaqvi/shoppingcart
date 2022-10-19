import React from 'react'
import Header from "./client/components/header/header"
import Home from "./client/components/home/home"
import Product from "./client/components/product/product"
import Log from './client/components/login/Log'
import SideMenu from './client/components/sideMenu/sideMenu'
import Register from './client/components/register/register'
import DetailedProduct from './client/components/detailedProduct/detailedProduct'
import Cart from './client/components/cart/cart'
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Checkout from './client/components/checkout/checkout'
import Success from './client/components/checkout/success'
import Failed from './client/components/checkout/failed'
import User from './client/components/login/user'
import Registered from './client/components/register/registered'
import "../src/index.css"


 
const App = () => {
  return (
    <Router basename='/'>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/success" element={<Success/>}/>
        <Route path="/failed" element={<Failed/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/registered" element={<Registered/>}/>
        <Route path="/login" element={<Log />}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/sideMenu" element={<SideMenu />}></Route>
        <Route path="/form" element={<form />}></Route>
        <Route path="/detailedProduct" element={<DetailedProduct />}/>
        <Route path="/cart" element={<Cart />}/>


      </Routes>
    </Router>
  )
}

export default App

