import React from "react";
import { Navbar } from "../components";
import "./style.css";
import Anime from "../assets/anime.gif";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="mainCont">
        <div className="subCont">
          <div className="anime">
            <img src={Anime} />
          </div>
          <p>Real Time Messaging App</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
