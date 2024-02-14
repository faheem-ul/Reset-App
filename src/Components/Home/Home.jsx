import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const [isChecked, SetisChecked] = useState(false);
  const navigate = useNavigate();

  const enableDarkmood = () => {
    SetisChecked(!isChecked);
    document.body.style.backgrounColor = isChecked ? "#000000" : "#ffffff";
    console.log("dark mood enabled");
  };

  const handleHomeLoginBtn = () => {
    navigate("/login");
  };

  return (
    <section className="HomeSection">
      <div className="mainDiv">
        <div className="Navbar">
          <div className="NavbarLeft">
            <p className="darkmode">Turn on the Dark mode</p>
            <label className="switch">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={enableDarkmood}
              />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="NavbarRight">
            <a href="" className="support">
              Support
            </a>
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
          <button className="HomeClaimButton">Claim One Month Free Now</button>
        </div>
      </div>
    </section>
  );
}

export default Home;
