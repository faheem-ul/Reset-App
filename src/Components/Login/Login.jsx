import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setUserInLocalStorageLogin } from "../../../Utils/localStorage";
// import { AuthContext } from "../../../Context/AuthContext";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Login() {
  const [LoginEmail, setLoginEmail] = useState("");
  const [LoginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate();
  // const { user } = useContext(Auth);
  const handleLoginEmailInput = (e) => {
    setLoginEmail(e.target.value);
  };
  const handleLoginPasswordInput = (e) => {
    setLoginPassword(e.target.value);
  };
  const formValidateLogin = () => {
    if (
      LoginEmail === "" ||
      LoginPassword === "" ||
      LoginEmail === undefined ||
      LoginPassword === undefined
    ) {
      toast.error("Please fill all the fields");
    } else {
      axios
        .get(
          `http://localhost:3000/Signups?email=${LoginEmail}&&password=${LoginPassword}`
        )
        .then((response) => {
          console.log(response.data);
          if (response.data.length > 0) {
            setUserInLocalStorageLogin(response.data[0]);
            return navigate("/dashboard");
          } else {
            return toast.error("Email or Password is incorrect");
          }
        })
        .catch((error) => {
          console.log("error in login", error);
        });
    }
  };

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
                <Link to="/signup">
                  <p className="signupSpan">Sign Up</p>
                </Link>
              </Link>
            </p>
          </div>

          <div className="loginFormDiv">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                formValidateLogin();
              }}
              className="loginForm"
            >
              <input
                type="email"
                placeholder="Email"
                className="emailInput"
                onChange={handleLoginEmailInput}
              />
              <input
                type="password"
                placeholder="Password"
                className="passwordInput"
                onChange={handleLoginPasswordInput}
              />
            </form>
            <button
              type="submit"
              className="loginSubmitbtn"
              onClick={() => {
                formValidateLogin();
              }}
            >
              Login
            </button>
          </div>
        </div>

        <div className="leftSide">
          <div className="welcomeloginDiv">
            <h1 className="LoginwelcomeLink">
              <Link to="/" className="LoginWelcomeLink" id="welcome">
                WELCOME TO
              </Link>
            </h1>
            <h1 className="reset">
              <Link to="/" className="LogintoReset">
                RESET
              </Link>
            </h1>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}

export default Login;
