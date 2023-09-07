import { LOGO_URL } from "../utils/constants";
import { useState,useEffect } from "react";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("Header render");


  useEffect(()=>{

  },
  [])
  //if no dependency array, everytime it is called; 
  // empty=>only initial render[];
  //  if something as dependency, useEffect is called everytime it is updated


  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
