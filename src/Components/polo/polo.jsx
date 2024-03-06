import React, { useEffect } from "react";
import pexelsvideos from "../assests/pexelsvideos.mp4";
import AOS from "aos";
import "aos/dist/aos.css";

const Polo = () => {
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
            data-aos-duration="200"
          >
            <p>P</p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="300"
          >
            <p>O</p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="400"
          >
            <p>L</p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="500"
          >
            <p>O</p>
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
              src="/images/Lacoste-Polo-Shirts-scaled.webp"
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
          className="row"
          // style={{ padding: "10px 60px" }}
        >
          <div className="col-lg-8">
            <div data-aos="fade-down-right ">
              <img
                className="img3dup"
                src="images/-original-imagtbtfbtrggdqp.webp"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div data-aos="fade-down-left">
              <img
                className="img2 sad"
                src="/images/1_d544291f-c09d-4358-bd09-0f4ac5c7d92b_1024x.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Polo;
