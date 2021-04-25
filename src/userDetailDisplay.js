import React from "react";
import UserDetailJson from "./JsonFiles/userDetail.json";
import "./userDetailsStyle.css";

let UserDetailDisplay = (props) => {
  let users = UserDetailJson.user.map((itm, idx) => {
    return (
      <div key={itm.id} className="users">
        <span>Name: {itm.name}</span>
        <br />
        <span>Age: {itm.age}</span>
        <br />
        <span>Gender: {itm.gender}</span>
        <br />
        <span>Email Id: {itm.email}</span>
        <br />
        <span>Phone No: {itm.phoneNo}</span>
      </div>
    );
  });
  return <div className="container">{users}</div>;
};

export default UserDetailDisplay;
