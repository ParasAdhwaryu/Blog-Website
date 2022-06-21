import React from "react";
import { Link } from "react-router-dom";
import logo from "../components/logo.png";
import { useUserAuth } from "../context/UserAuthContext";
import Logout from "./Logout";
import LoginIcon from "@mui/icons-material/Login";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
function Navbar() {
  const { user } = useUserAuth();
  //console.log(user.email);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src={logo}
              style={{ width: "110%", height: "30px" }}
              alt=""
            ></img>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/Sports">
                  Sports Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Fitness">
                  Fitness Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Foodrecipies">
                  Food Recipes Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Travel">
                  Travel Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Education">
                  Education Blog
                </Link>
              </li>

              {user && (
                <li className="nav-item">
                  <Link className="nav-link" to="/createblog">
                    Create Blog
                  </Link>
                </li>
              )}
            </ul>
            {!user ? (
              <>
                <button className="btn btn-dark" title="Login">
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="/login"
                  >
                    Login <LoginIcon />
                  </Link>
                </button>
                <button className="btn btn-primary mx-3" title="Signin">
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="/signin"
                  >
                    Sign up <AddRoundedIcon />
                  </Link>
                </button>
              </>
            ) : (
              <Logout />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
