import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <div className="mainh-div">
        <div className="smain-d-v">
          <p className="paratop">Collections</p>
          <h1>Signature</h1>
        </div>
        <div className="parasi">
          <p onClick={() => navigate("/Levi's")}>LEVI'S</p>
          <p onClick={() => navigate("/polo")}>POLO</p>
          <p>ADIDAS</p>
          <p>NIKE</p>
          <p>RBK</p>
          <p>GUCCI</p>
          <p>PRADA</p>
          {/* <div className="rigt-d">
            <div data-aos="fade-up" data-aos-duration="3000">
              <div>
                <img
                  className="img1"
                  src="/images/il_fullxfull.4226313117_1u9a.avif"
                  alt=""
                />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default MainPage;
