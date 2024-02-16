import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const handleHomeLoginBtn = () => {
    navigate("/login");
  };

  const handleClaimBtn = () => {
    navigate("/login");
  };

  return (
    <section className="HomeSection">
      <div className="mainDiv">
        <div className="Navbar">
          <div className="NavbarLeft">
            <a href="" className="support">
              Support
            </a>
          </div>
          <div className="NavbarRight">
            <button className="HomeloginButton" onClick={handleHomeLoginBtn}>
              Login
            </button>
          </div>
        </div>
        <div className="HomeContent">
          <div className="HomeMainContent">
            <h1 className="HomeMainHeading">FITNESS FOR THE CULTURE</h1>
          </div>
          <div className="HomeSubContent">
            <h4 className="homepara">
              Get <span className="homeparaSpan">ONE MONTH FREE</span> of reset
              in celebration of Black History Month
            </h4>
          </div>
          <button className="HomeClaimButton" onClick={handleClaimBtn}>
            Claim One Month Free Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;
