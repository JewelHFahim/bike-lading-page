import React from "react";
import "./ContentBody.css";
import img from "../Assets/bike.png";
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';


const ContentBody = () => {
  return (
    <div className="body-container">
      <div className="text-container">
        <h1 className="model">
          RC <br /> <span className="cc-limit">360</span>
        </h1>
        <p>RACE & ENSPIRED</p>
      </div>
      <div className="img-container">
        <img style={{ width: "880px", height: "" }} src={img} alt="" />
      </div>

      <div className="pagination">
      <p><IoIosArrowUp style={{ color: "orangered", fontWeight: "700" }} /></p>
        <p>1</p>
        <p>2</p>
        <p style={{ color: "orangered", fontWeight: "700" }}>3</p>
        <p>4</p>
        <p>5</p>
        <p><IoIosArrowDown style={{ color: "orangered", fontWeight: "700" }}/></p>
      </div>
    </div>
  );
};

export default ContentBody;
