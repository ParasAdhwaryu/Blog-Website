import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
function Logout() {
  const { logOut } = useUserAuth();
  const [err, Seterr] = useState("");
  const navigate = useNavigate();
  const onClickhandler = async (e) => {
    e.preventDefault();
    Seterr("");
    try {
      await logOut();
      navigate("/login");
    } catch (err) {
      Seterr(err.message);
    }
  };
  return (
    <>
      {err && <h1>{err}</h1>}

      <button
        className="btn btn-primary"
        title="Logout"
        onClick={(e) => {
          onClickhandler(e);
        }}
      >
        Log out <LogoutRoundedIcon />
      </button>
    </>
  );
}

export default Logout;
