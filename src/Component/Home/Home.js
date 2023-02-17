import React from "react";
import ContentBody from "../ContentBody/ContentBody";
import ContentBottom from "../ContentBottom/ContentBottom";
import Navbar from "../Navbar/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <div className="main-container">
      <Navbar></Navbar>
      <ContentBody></ContentBody>
      <ContentBottom></ContentBottom>
    </div>
  );
};

export default Home;
