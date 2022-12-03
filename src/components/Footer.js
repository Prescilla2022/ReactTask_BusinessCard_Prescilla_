import React from "react";
import ReactDOM from "react-dom";
import Face from "../Images/facebook.png";
import Insta from "../Images/insta.png";
import WatsApp from "../Images/watsapp.png";
import Twitter from "../Images/twitter.png";

function Footer() {
  return (
    <div className="footer">
      <img className="social" src={Face}></img>
      <img className="social" src={Insta}></img>
      <img className="social" src={WatsApp}></img>
      <img className="social" src={Twitter}></img>
    </div>
  );
}
export default Footer;
