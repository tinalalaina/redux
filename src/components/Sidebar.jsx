import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink ,useNavigate} from 'react-router-dom';
import { LogOut, reset } from '../features/authSlice';
const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user} =  useSelector((state)=> state.auth);

  const logout = () =>{
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };
  return (
    <div><aside className="menu pl-4 has-shadow">
    <p className="menu-label">
      General
    </p>
    <ul className="menu-list">
      <li><NavLink to={"/dashboard"}>Dashboard</NavLink></li>
      <li><NavLink to={"/products"}>Products</NavLink></li>
    </ul>
    {user && user.role == "admin" && (
    
    <p className="menu-label">
      Admin
      <NavLink to={"/users"}>
         Users
      </NavLink>
    </p>

    )}
   
    <p className="menu-label">
      Settings
    </p>
    <ul className="menu-list">
      <li><button onClick={logout} className="button is-white">Log out</button></li>
    </ul>
  </aside></div>
  )
}

export default Sidebar