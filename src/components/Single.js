import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import {useState,useEffect} from 'react'
import { Link } from "react-router-dom";
import Errorpage from "./Errorpage";
function Single(){
  let arr=window.location.href.split('/');
  let len=arr.length-1;
  let k=arr[len];
  let routeto=arr[len-1];
  if(String(routeto)==='blog'){
    routeto='';
  }
  const blogref = collection(db, "Blogs");
  const [blogs, Setblogs] = useState([]);
  useEffect(() => {
    const getBlogs = async () => {
      const data = await getDocs(blogref);
      const arr = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
        const items = arr.filter((element) => {
          return String(element.id) === String(k);
        });
        Setblogs(items);
    };
    getBlogs();
    // eslint-disable-next-line
  },[k]);
  
  const routeBack=(e)=>{
        // eslint-disable-next-line
        e.preventDefault();
  }
  return (
    <>
    {blogs.length!==0 ?
    <>
    <div className="container justify-content-center" style={{marginTop:'60px'}}>
      {blogs.map((element)=>{
         return (
          <>
          <div className="d-flex flex-wrap card mb-3 my-3" style={{width:'70%',margin:'0 auto',backgroundColor:'rgb(0,20,64)',color:'white'}}>
         <img src={element.image} className="card-img-top" style={{maxHeight:'600px'}} alt="..."/>
         <div className="card-body">
         <h5 className="card-title" style={{textAlign:'center'}}>{element.blogtype}</h5>
         <div className="d-flex flex-wrap justify-content-center my-3">
         <div className="d-flex flex-wrap justify-content-center rounded-pill" style={{backgroundColor:'crimson',height:'auto',maxWidth:'auto',color:'white',padding:'8px',fontWeight:'bold'}} >
               Author {element.author}
          </div>
          </div>
           <p className="card-text my-3">
              {element.blog}
           </p>
         </div>
         <button className="btn btn-outline-secondary" onClick={(e)=>{routeBack(e)}} style={{width:'20%',margin:'0 auto',marginBottom:'20px',color:'whitesmoke'}}><Link style={{textDecoration:'none',color:'whitesmoke'}} to={`/${routeto}`}>Go back</Link></button>
       </div>
       </>
         )
       })
      } 
    </div>
    </>
    :<Errorpage/>}
    </>
    );
}
export default Single;
