import React from 'react';
import { BrowserRouter,Routes ,Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './components/Login';
import Users from './pages/Users';
import Products from './pages/Products';
import AddProduct from './pages/AddProduct';

import axios from 'axios';
axios.defaults.withCredentials =true;
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/add' element={<AddProduct/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App