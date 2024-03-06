import React, { useEffect } from "react";
import pexelsvideos from "../assests/pexelsvideos.mp4";
import AOS from "aos";
import "aos/dist/aos.css";

const Levis = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <div>
        <video autoPlay loop muted id="vedio">
          <source src={pexelsvideos} type="video/mp4" />
        </video>
      </div>
      <div>
        <div className="singlepage">
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="150"
          >
            <p>L</p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="250"
          >
            <p>E</p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="200"
          >
            <p>V</p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="300"
          >
            <p>I</p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="400"
          >
            <p>'</p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="500"
          >
            <p>S</p>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div className="smain-d-v">
            <p className="paratop">Collections</p>
            <h1>Signature</h1>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="3000">
          <div style={{ padding: "10px 60px" }}>
            <img
              className="img1"
              src="/images/il_fullxfull.4226313117_1u9a.avif"
              alt=""
            />
          </div>
        </div>
        <div className=" alingf-sz">
          <div data-aos="fade-up" data-aos-duration="3000">
            <p>Volatile,</p>
          </div>
          <div data-aos="fade-up" data-aos-duration="3000">
            <p>elle est le vent d’automne</p>
          </div>
          <div data-aos="fade-up" data-aos-duration="3000">
            <p style={{ marginBottom: "40px" }}>aux mille nuances.</p>
          </div>
          <div data-aos="fade-up" data-aos-duration="3000">
            <p>Raphaële,</p>
          </div>
          <div data-aos="fade-up" data-aos-duration="3000">
            <p>la femme fourrure</p>
          </div>
          <div data-aos="fade-up" data-aos-duration="3000">
            <p>aux yeux givrés, qui à l’été</p>
          </div>
        </div>
        <div
          className="chng-th"
          // style={{ padding: "10px 60px" }}
        >
          <div data-aos="fade-down-right">
            <img className="img3" src="images/product-jpeg.jpg" alt="" />
          </div>

          <div data-aos="fade-down-left">
            <img
              className="img2"
              src="/images/Levis-Solid-Mens-Round--Neck-T-shirt_meta.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Levis;
