import React from "react";
import ContentBody from "../ContentBody/ContentBody";
import ContentBottom from "../ContentBottom/ContentBottom";
import Navbar from "../Navbar/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <div className="main-container">
      <div><Navbar></Navbar></div>
      <div><ContentBody></ContentBody></div>
      <div><ContentBottom></ContentBottom></div>
    </div>
  );
};

export default Home;
