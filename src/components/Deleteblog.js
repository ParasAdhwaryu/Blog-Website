import React from 'react'
import { deleteDoc,doc } from 'firebase/firestore';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect } from 'react';
import { db } from "../firebaseConfig";
function Deleteblog(props) {
    const onDelete=async(e)=>{
        e.preventDefault();
        try{
            await deleteDoc(doc(db,'Blogs',props.id));
            alert("Your blog is deleted");
            window.location.reload();
        }
        catch(err){
            console.log(err.message);
        }
  }
  useEffect(() => {
            
}, [onDelete]);
  return (
    <div>
      <button className="btn btn-dark mx-3 my-2" onClick={(e)=>{onDelete(e)}}><DeleteIcon/></button>
    </div>
  )
}

export default Deleteblog