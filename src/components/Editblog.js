import React from 'react'
import {Link} from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit'
function Editblog(props) {
  return (
    <>
    <button className="btn btn-dark my-2"><Link style={{textDecoration:'none',color:'white'}} to={`createblog/${props.id}`}><EditIcon/></Link></button>
    </>
  )
}
export default Editblog
