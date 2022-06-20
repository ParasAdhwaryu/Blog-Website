import React from "react";
import { Link } from "react-router-dom";
import Deleteblog from './Deleteblog'
import Editblog from "./Editblog";
import {useUserAuth} from '../context/UserAuthContext'
import Updateblog from "./Editblog";
function Card(props) {
   let arr=window.location.href.split('/')
   let len=(arr.length)-1
   let pp=arr[len]
   const {user} =useUserAuth(); 
   if(pp!==''){
    pp=pp+'/';
   }
  return (
      <div className="card justify-content-center" style={{
        width: "20rem",
        boxShadow: "4px 4px 5px 5px rgba(0, 0, 0, 0.4) ",
      }}>
        <img src={props.image} className="card-img-top" alt={`${props.blogtype} blog`} style={{height:'200px'}}/>
        <div className="card-body my-2">
          <h5 className="card-title" style={{textAlign:'center'}}>{props.blogtype}</h5>
          {user && String(user.email)===String(props.email) &&
          <div className="d-flex flex-wrap justify-content-center my-2">
          <Deleteblog id={props.id}/>
          <Editblog id={props.id}/>
          </div>
          }
          <div className="d-flex felx-wrap  justify-content-center rounded-pill" style={{backgroundColor:'crimson',height:'40px',color:'white',padding:'8px',fontWeight:'bold'}} >
               Author {props.author}
          </div>
          <p className="card-text my-3">
            {props.blog.slice(0,80)}...<Link style={{textDecoration:'none'}} to={`/blog/${pp}${props.id}`}> Read More</Link>
          </p>
          <p>You can connect author through {props.email}</p>
        </div>
      </div>
  );
}

export default Card;
