import React from "react";
import "./ContentBody.css";
import img from "../Assets/bike.png";

const ContentBody = () => {
  return (
    <div className="body-container">
      <div className="text-container">
        <h1 className="model">
          RC <br /> <span className="cc-limit">360</span>
        </h1>
      </div>
      <div className="img-container">
        <img style={{ width: "900px" }} src={img} alt="" />
      </div>
    </div>
  );
};

export default ContentBody;
