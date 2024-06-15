import React,{useEffect} from 'react';
import { getMe } from '../features/authSlice';
import Layout from './Layout';
import Userlist from '../components/Userlist';
import { useDispatch, useSelector } from 'react-redux';
import  {useNavigate} from "react-router-dom";

const Users = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isError, user} = useSelector((state)=>state.auth);

  useEffect(()=>{
    if(isError){
      navigate("/");
    }
    if(user && user.role !=="admin") {
      navigate("/dashboard");
    }
 },[isError, navigate]);
  return (
    <Layout>
        <Userlist/>
    </Layout>
  )
}

export default Users;