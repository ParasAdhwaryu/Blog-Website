import React from "react";
function Search(props) {
  return(
      <>
        <div
          className="container justify-content-center "
          style={{ width: "60%",marginTop:'0px'}}
        >
          <form className="row g-4 mx-4">
            <div className="col-sm-8 d-flex justify-content-center">
              <input
                className="form-control"
                type="search"
                value={props.val}
                placeholder="Search..."
                aria-label="Search"
                onChange={props.handleChange}
              />
            </div>
            <div className="col-sm-4 justify-content-center">
              <button
                className="btn btn-primary"
                onClick={props.clickHandler}
                type="submit"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </>
  )
}
export default Search;