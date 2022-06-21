import React from "react";
import { Link } from "react-router-dom";
// import './Errorpage.css'
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
function Errorpage() {
  return (
    <>
      <div
        className="container justify-content-center"
        style={{ textAlign: "center", marginTop: "150px" }}
      >
        <h1>404 error page not found</h1>
        <br />
        <button className="btn btn-dark">
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            <ArrowBackIosNewRoundedIcon style={{ height: "16px" }} /> Go back
            home
          </Link>
        </button>
      </div>
    </>
  );
}

export default Errorpage;
