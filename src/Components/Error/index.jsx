import React, { useContext, useState } from "react";
import "./styles.css";
import Button from "../Common/Button";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import errImg from "../../assets/Images/errorData.svg";
import { useNavigate } from "react-router-dom";
import ErrorContext from "../../Contexts/errors/ErrorContext";
const Error = () => {
  const {errMsg, setErrMsg} = useContext(ErrorContext);
  const navigate = useNavigate();
  function handleRedirect() {
    setErrMsg("");
    navigate(-1);
    // window.location.reload();
  }
  return (
    <div className="error-box flex__box" style={{flexGrow: 1, position: "relative"}}>
      <div className="error-body flex__box">
        <img src={errImg} alt="err" className="err__img" />
        <h2 className=" err__clr">Something Went Wrong !</h2>
        <p className="err__clr">Error:</p>
        {errMsg && <p className="err__clr">{errMsg.toString()}</p>}
      </div>
      <Button className={"err-btn"} onClick={handleRedirect} outlined >
        <ArrowBackRoundedIcon fontSize="small" style={{paddingRight: "10px"}} />
        Back
      </Button>
    </div>
  );
};

export default Error;
