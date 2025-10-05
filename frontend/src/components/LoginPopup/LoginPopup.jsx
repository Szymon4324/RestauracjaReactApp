import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

const LoginPopup = ({setShowLogin}) => {
  const [currState, setCurrState] = useState("Login");

  return (
    <div className="login-popup">
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Twoje imię" required />
          )}

          <input type="email" placeholder="Twój email" required />
          <input type="password" placeholder="Hasło" required />
        </div>
        <button>{currState === "Sign Up" ? "Create account" : "Login"}</button>
        <div className="login-popup-codition">
          <input type="checkbox" required />
          <p>Akceptuję politykę prywatności.</p>
        </div>

        {currState === "Login" ? (
          <p>
            Stwórz nowe konto <span onClick={()=> setCurrState("Sign Up")}>Kliknij tutaj</span>
          </p>
        ) : (
          <p>
            Masz już konto? <span onClick={()=> setCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
