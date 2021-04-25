import React, { useState } from "react";
import "./LoginForm.css";
import loginUserJson from "./JsonFiles/loginDetails.json";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { actionCreator } from "./action";
import {
  ON_USER_CHANGE,
  ON_PASSWARD_CHANGE,
  SHOW_WARNING_MSG,
} from "./constants";

let LoginForm = (props) => {
  let History = useHistory();
  let longinButtonClicked = (e) => {
    e.preventDefault();
    if (props.state.userName.length > 0 && props.state.passWord.length > 0) {
      if (
        props.state.userName !== loginUserJson.username &&
        props.state.userName !== loginUserJson.username
      ) {
        return props.showWarningMsg({
          ...props.state,
          bothFieldError: "Invalid User Name And Password!",
          isBothValid: false,
        });
      } else if (props.state.userName !== loginUserJson.username) {
        return props.showWarningMsg({
          ...props.state,
          userNameError: "Invalid User!",
          isValidUserName: false,
        });
      } else if (props.state.passWord !== loginUserJson.password) {
        return props.showWarningMsg({
          ...props.state,
          passWordError: "Invalid Password!",
          isValidPassword: false,
        });
      }
      return History.push("/dashBoard");
    } else {
      if (
        props.state.passWord.length === 0 &&
        props.state.userName.length === 0
      ) {
        props.showWarningMsg({
          ...props.state,
          bothFieldError: "Please Enter User Name And Password!",
          isBothValid: false,
        });
      } else if (props.state.passWord.length === 0) {
        props.showWarningMsg({
          ...props.state,
          bothFieldError: "",
          passWordError: "Please Enter Password!",
          isValidPassword: false,
        });
      } else if (props.state.userName.length === 0) {
        props.showWarningMsg({
          ...props.state,
          bothFieldError: "",
          userNameError: "Please Enter User Name!",
          isValidUserName: false,
        });
      }
    }
  };
  let userNameChangeHandler = (event) => {
    props.userNameChange({
      ...props.state,
      userNameError: "",
      isBothValid: true,
      isValidUserName: true,
      userName: event.target.value,
    });
  };
  let changePasswordHandler = (event) => {
    props.passWordChange({
      ...props.state,
      passWordError: "",
      isBothValid: true,
      isValidPassword: true,
      passWord: event.target.value,
    });
  };
  return (
    <div className="loginForm">
      <div className="item">
        <p style={{ display: !props.state.isBothValid ? "contents" : "none" }}>
          {" "}
          {props.state.bothFieldError}
        </p>
        <input
          name="userName"
          type="text"
          placeholder="user Name"
          onChange={userNameChangeHandler}
          value={props.state.userName}
        />
        <p
          style={{
            display: !props.state.isValidUserName ? "contents" : "none",
          }}
        >
          {props.state.userNameError}
        </p>
        <br />
        <input
          name="passWord"
          type="password"
          placeholder="Password"
          onChange={changePasswordHandler}
          value={props.state.passWord}
        />
        <p
          style={{
            display: !props.state.isValidPassword ? "contents" : "none",
          }}
        >
          {props.state.passWordError}
        </p>
        <br />
        <button className="LoginButton" onClick={longinButtonClicked}>
          Login
        </button>
      </div>
    </div>
  );
};

let mapStateToProps = (state) => {
  return { state };
};
let mapDispatchToProps = (dispatch) => {
  return {
    userNameChange: (value) => dispatch(actionCreator(value, ON_USER_CHANGE)),
    passWordChange: (value) =>
      dispatch(actionCreator(value, ON_PASSWARD_CHANGE)),
    showWarningMsg: (value) => dispatch(actionCreator(value, SHOW_WARNING_MSG)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
