import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
function Signin() {
  const [data, Setdata] = useState({
    fname: "",
    email: "",
    pswd: "",
    cnfpswd: "",
  });
  const [err, Seterr] = useState("");
  const { signUp } = useUserAuth();
  const navigate = useNavigate();
  let name, value;
  const onChangehandler = (e) => {
    name = e.target.name;
    value = e.target.value;
    Setdata({ ...data, [name]: value });
  };
  const onClickhandler = async (e) => {
    e.preventDefault();
    Seterr("");
    if (
      String(data.pswd) === String(data.cnfpswd) &&
      data.email !== "" &&
      data.fname !== "" &&
      data.pswd !== "" &&
      data.cnfpswd !== ""
    ) {
      try {
        await signUp(data.email, data.cnfpswd);
        navigate("/login");
      } catch (err) {
        Seterr(err.message);
      }
    } else {
      if (String(data.pswd) !== String(data.cnfpswd)) {
        Seterr("Your password is not matching");
      } else {
        Seterr("Please fill all the fields");
      }
    }
    console.log(err);
  };
  return (
    <div
      className="container d-flex flex-wrap justify-content-center"
      style={{
        marginTop: "100px",
        border: "2px solid black",
        width: "25%",
        borderRadius: "20px",
      }}
    >
      {err && <h3 style={{ textAlign: "center", color: "red" }}>{err}</h3>}

      <form className="d-flex flex-wrap justify-content-center row g-3 my-3">
        <div className="col-md-3">
          <PersonAddAltIcon style={{ fontSize: "70px" }} />
        </div>
        <div className="col-md-12">
          <input
            type="text"
            className="form-control"
            name="fname"
            onChange={onChangehandler}
            placeholder="Enter your full name"
            style={{ borderRadius: "10px" }}
            required
          />
        </div>

        <div className="col-md-12">
          <input
            type="email"
            className="form-control"
            name="email"
            onChange={onChangehandler}
            id="inputEmail4"
            placeholder="Enter your email address"
            style={{ borderRadius: "10px" }}
            required
          />
        </div>
        <div className="col-md-12">
          <input
            type="password"
            className="form-control"
            name="pswd"
            onChange={onChangehandler}
            id="inputPassword4"
            placeholder="Enter your password"
            style={{ borderRadius: "10px" }}
            required
          />
        </div>
        <div className="col-md-12">
          <input
            type="password"
            className="form-control"
            name="cnfpswd"
            onChange={onChangehandler}
            id="inputPassword5"
            placeholder="Confirm password"
            style={{ borderRadius: "10px" }}
            required
          />
        </div>
        <div className="col-6">
          <button
            type="submit"
            onClick={(e) => {
              onClickhandler(e);
            }}
            className="btn btn-dark mx-2"
          >
            Create a account
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signin;
