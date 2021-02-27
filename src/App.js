import React from 'react'
import './App.css';

import { Route, Switch } from 'react-router-dom'


import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import CartPage from './pages/CartPage'
import ContactPage from './pages/ContactPage'
import DefaultPage from './pages/DefaultPage'
import ProductsPage from './pages/ProductsPage'
import SingleProductPage from './pages/SingleProductPage'



import Navbar from './components/Navbar'
import SideBar from './components/SideBar'
import SideCart from './components/SideCart'
import Footer from './components/Footer'

// import styled from 'styled-components';

// const App = styled.div`
//   background:red;
//   padding: 20rem
// `

function App() {
  return (
    <>
      <Navbar />
      <SideBar />
      <SideCart />


      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/cart" exact component={CartPage} />
        <Route path="/products" exact component={ProductsPage} />
        <Route path="/product/:id" exact component={SingleProductPage} />
        <Route path="/contact" exact component={ContactPage} />
        <Route component={DefaultPage} />
      </Switch>

      <Footer />

    </>
  );
}

export default App;
