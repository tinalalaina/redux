import React from 'react';
import { BrowserRouter,Routes ,Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './components/Login';
import Users from './pages/Users';
import Products from './pages/Products';
import AddProduct from './pages/AddProduct';

import axios from 'axios';
import Acceuille from './components/Acceuille/Acceuille';
import Footer from './components/Footer/Footer'
axios.defaults.withCredentials =true;
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/acceuille' element={<Acceuille/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/add' element={<AddProduct/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App