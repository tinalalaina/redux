import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './components/Login';
import Users from './pages/Users';
import Products from './pages/Products';
import AddProduct from './pages/AddProduct';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
import EditProduct from './pages/EditProduct';
import axios from 'axios';
import Acceuille from './components/Acceuille/Acceuille';
import Footer from './components/Footer/Footer'
axios.defaults.withCredentials = true;
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Acceuille />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/users' element={<Users />} />
          <Route path='/login' element={<Login />} />
          <Route path='/users/add' element={<AddUser />} />
          <Route path='/users/edit/:id' element={<EditUser />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/add' element={<AddProduct />} />
          <Route path='/products/edit/:id' element={<EditProduct />} />

        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App