
import {useDispatch, useSelector} from "react-redux";
import React,{useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import { LoginUser, reset } from '../features/authSlice';
import Login2 from "./Login2";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user,isError, isSuccess, isLoading,message} = useSelector(
    (state) => state.auth
  );
  useEffect(()=>{
    if(user || isSuccess){
      navigate("/dashboard");
    }
    dispatch(reset());}
    ,[user, isSuccess, dispatch, navigate]);
  
    const Auth=(e) => {
      e.preventDefault()
  // dispatch(LoginUser({email, password}));
  dispatch(LoginUser({email, password}));
    }
  
  return (
    <section className="hero has-background-grey-light is-success is-fullheight is-fullwidth">
      <Login2/>
      <div className="hero-body">
        <div className="container">
         <div className="columns is-centered">
            <div className="column is-4">
                
                <form className="box" onSubmit={Auth}>
                <center><h1 className="title is-2 has-background-grey-light">Sign in!</h1></center>
                  {isError && <p className='has-text-centered is-2 has-background-grey-light'>{message}</p>}
                    <div className="field">
                        <label className="label"> Email </label>
                        <div className="control">
                            <input type="text" className="input" 
                            value={email} onChange={(e) =>setEmail(e.target.value)}
                            placeholder='Email' />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label"> Password </label>
                        <div className="control">
                            <input type="password" className="input"
                             value={password} onChange={(e) =>setPassword(e.target.value)}
                            placeholder='******' />
                        </div>
                    </div>

                    <div className="field mt-5">
                     <button className="button is-success is-fullwidth">
                      {isLoading ? 'Loading...' : 'Login'}
                     </button>
                    </div>
                </form>
            </div>
         </div>
        </div>
      </div>
      <div className="container">
       <div className='fw-bold'>Aide:</div>
       <div>Email: tinalalaina14@gmail.com</div>
       <div>password: 123456</div>
      </div>
    </section>
  )
}

export default Login