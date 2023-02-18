import React from "react";
import "./ContentBottom.css";
import {
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import img1 from "../Assets/bike.png";

const ContentBottom = () => {
  return (
    <div className="bottom-container">
      <div className="left-content">
        <div className="social-icon">
          <p>
            <AiFillTwitterCircle />
          </p>
          <p>
            <AiFillFacebook />
          </p>
          <p>
            <AiFillInstagram />
          </p>
        </div>
        <div className="feature-container">
          <div className="feature-one">
            <h4> Royal Enfield </h4>
            <p> 650 cc limit</p>
            <img src={img1} style={{ width: "110px" }} alt="" />
          </div>
          <div className="feature-one">
            <h4> Royal Enfield </h4>
            <p> 650 cc limit</p>
            <img src={img1} style={{ width: "110px" }} alt="" />
          </div>
          <div className="feature-one">
            <h4> Royal Enfield </h4>
            <p> 650 cc limit</p>
            <img src={img1} style={{ width: "110px" }} alt="" />
          </div>
        </div>
      </div>

      <div className="right-content">
        <h3>Content</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt sed,
          libero unde, repellendus quas doloribus, ullam esse dolor nihil
          deleniti velit nobis quidem at modi. Eligendi ipsa incidunt reiciendis
          nesciunt!
        </p>
      </div>
    </div>
  );
};

export default ContentBottom;
