import Layout from './Layout';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from "react-router-dom";
import React,{useEffect} from 'react';
import { getMe } from '../features/authSlice';
import FormEditProduct from '../components/FormEditProduct';
const EditProduct = () => {
const dispatch = useDispatch();
const navigate = useNavigate();
const {isError} = useSelector((state)=>state.auth);
useEffect(()=>{
dispatch(getMe());
},[dispatch]);
useEffect(()=>{
if(isError){
navigate("/");
}
},[isError, navigate]);
return (
<Layout>
<FormEditProduct/>
</Layout>
)
}
export default EditProduct;
