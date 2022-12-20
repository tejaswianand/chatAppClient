import React from "react";
import "./navStyle.css";
import Logo from "../../assets/chatIcon.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <header>
        <img class="logo" src={Logo} />

        <a class="cta" href="/app">
          <button className="button_1">App</button>
        </a>
      </header>
    </div>
  );
};

export default Navbar;
