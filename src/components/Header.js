import React from "react";
import ReactDOM from "react-dom";

import Image from "../Images/prof_img.jpg";

function Header() {
  return (
    <div className="header">
      <img className="profilepic" src={Image}></img>
      <div className="profiles">
        <h2>Prescilla</h2>
        <h5>Frontend Developer</h5>
        <button>Email</button>
      </div>
    </div>
  );
}
export default Header;
