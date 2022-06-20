import React from "react";
import {Link,useNavigate} from 'react-router-dom'
import {useState} from 'react'
import {useUserAuth} from '../context/UserAuthContext'

function Login(){
  const [data,Setdata]=useState({
    email:'',
    pswd:'',
  })
  const navigate=useNavigate();
  let name,value;
  const getVal=(e)=>{
    name=e.target.name
    value=e.target.value  
    Setdata({...data,[name]:value})
  }
  const [err,Seterr]=useState('');
  const {logIn} =useUserAuth();
  const finalize=async(e)=>{
        e.preventDefault();
        Seterr("");
    try{
       await logIn(data.email,data.pswd);
       navigate('/');
    }
    catch(err){
         Seterr(err.message);
    }
        Setdata({
            email:'',
            pswd:'',
          })
  }
  return (
    <div className="container d-flex flex-wrap justify-content-center" style={{marginTop:'150px',border:'2px solid black',width:'30%',borderRadius:'20px'}}>
    {err &&  <h3 style={{textAlign:'center'}}>{err}</h3>
    }
      <form className="my-4" autoComplete="off">
        <div classsName="mb-3">
          <input
            type="email"
            className="form-control my-3"
            name='email'
            onChange={getVal}
            value={data.email}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your email here..."
            style={{borderRadius:'10px'}}
            required
          />
        </div>
        <div classsName="mb-3">
          <input
            type="password"
            className="form-control"
            name="pswd"
            onChange={getVal}
            value={data.pswd}
            id="exampleInputPassword1"
            placeholder="Enter your password"
            style={{borderRadius:'10px'}}
            required
          />
        </div>
        <button className="btn btn-dark my-3" type="submit" onClick={(e)=>{finalize(e)}}>
          Log in
        </button>
        <div className="d-flex flex-wrap">Don't have an account 
        <Link className="mx-3" to='/signin'>Sign up</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
