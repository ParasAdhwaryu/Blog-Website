import React from "react";
import SearchIcon from '@mui/icons-material/Search';
function Search(props) {
  return(
      <>
        <div
          className="container justify-content-center"
          style={{ width: "50%",marginTop:'0px',padding:'20px'}}
        >
          <form className="row g-4 mx-4">
            <div className="col-sm-8 d-flex flex-wrap ">
              <input
                className="form-control justify-content-center"
                type="search"
                value={props.val}
                placeholder="Search by blog type or author"
                aria-label="Search"
                onChange={props.handleChange}
              />
            </div>
            <div className="col-sm-4 j">
              <button
                className="btn btn-primary"
                onClick={props.clickHandler}
                type="submit"
                style={{fontSize:'16px'}}
              >
                Search <SearchIcon style={{width:'30px'}}/>
              </button>
            </div>
          </form>
        </div>
      </>
  )
}
export default Search;