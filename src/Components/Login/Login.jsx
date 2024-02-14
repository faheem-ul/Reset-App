import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const handlelogin = () => {};
  return (
    <section>
      <div className="loginmaindiv">
        <div className="rightSide">
          <div>
            <h1 className="mainHeading">Login</h1>
          </div>

          <div>
            <p className="loginPara">
              You don't have an account{" "}
              <Link>
                <Link to="/signup">Sign Up</Link>
              </Link>
            </p>
          </div>

          <div className="loginFormDiv">
            <form onSubmit={handlelogin} className="loginForm">
              <input type="email" placeholder="Email" className="emailInput" />
              <input
                type="password"
                placeholder="Password"
                className="passwordInput"
              />
            </form>
            <button type="submit" className="loginSubmitbtn">
              Login
            </button>
          </div>
        </div>

        <div className="leftSide">
          <div className="welcomeloginDiv">
            <h1>
              <Link to="/" className="WelcomeLink" id="welcome">
                WELCOME TO
              </Link>
            </h1>
            <h1>
              <Link to="/" className="toReset">
                RESET
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
