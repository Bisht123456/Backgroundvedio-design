import React from "react";
import { RiTShirtAirLine } from "react-icons/ri";
import MainPage from "./mainpage";
import pexelsvedio from "./assests/pexelsvedio.mp4";

const Navbar = () => {
  return (
    <>
      <div>
        <video autoPlay loop muted id="vedio">
          <source src={pexelsvedio} type="video/mp4" />
        </video>
      </div>
      <div className="Nav-main">
        <div className="mainheading sticky-top">
          <h1>
            CLOTHING
            <RiTShirtAirLine className="headingi-c" />
            STORE
          </h1>
        </div>
        <div className="On-hov">
          <div className="onhov-3">
            <p>Collections</p>
            <div className="bot-bor"></div>
          </div>
          <div className="onhov-3">
            <p>Couleurs</p>
            <div className="bot-bor1"></div>
          </div>
          <div className="onhov-3">
            <p>Maison</p>
            <div className="bot-bor2"></div>
          </div>
          <div className="onhov-3">
            <p>Contact</p>
            <div className="bot-bor3"></div>
          </div>
          <p style={{ color: "rgb(165 155 155)" }}>English</p>
        </div>
      </div>
      <MainPage />
    </>
  );
};

export default Navbar;
