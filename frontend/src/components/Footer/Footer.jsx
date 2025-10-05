import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est minima
            optio aliquam ad maxime. Dignissimos ut voluptate libero ipsum.
            Adipisci!
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
            <h2>Firma</h2>
            <ul>
                <li>Strona główna</li>
                <li>O nas</li>
                <li>Dostawa</li>
                <li>Polityka Prywatności</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>Kontakt</h2>
            <ul>
                <li>167-895-874</li>
                <li>tomato-contact@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyrighht"></p>
    </div>
  );
};

export default Footer;
