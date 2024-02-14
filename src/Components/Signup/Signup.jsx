import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Signup.css";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const formValidate = () => {
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === "" ||
      password.length < 8
    ) {
      toast.error("Please fill in all fields");
    } else {
      axios
        .get(`http://localhost:3000/Signups?email=${email}`)
        .then((response) => {
          console.log(response.data);
          if (response.data.length > 0) {
            alert("Email already exists. Please use a different email.");
          } else {
            const newUser = {
              firstName: firstName,
              lastName: lastName,
              email: email,
              password: password,
            };

            axios
              .post("http://localhost:3000/Signups", newUser)
              .then((response) => {
                console.log("A new user added in the JSON server", response);
                navigate("/dashboard");
              })
              .catch((error) => {
                console.log(
                  "Error adding a new user in the JSON server",
                  error
                );
              });
          }
        })
        .catch((error) => {
          console.log(
            "Error checking email existence in the JSON server",
            error
          );
        });
    }
  };

  // const handleSignupSubmit = () => {

  // };

  const handleSignupFirstname = (e) => {
    setFirstName(e.target.value);
    // console.log(firstName);
  };

  const handleSignuplastname = (e) => {
    setLastName(e.target.value);
    // console.log(lastName);
  };

  const handleSignupEmail = (e) => {
    setEmail(e.target.value);
    // console.log(email);
  };

  const handleSignupPassword = (e) => {
    setPassword(e.target.value);
    // console.log(password);
  };

  return (
    <section>
      <div className="signUpmaindiv">
        <div className="rightSide">
          <div>
            <h1 className="SignupmainHeading">Sign Up</h1>
          </div>

          <div>
            <p className="signupPara">
              You already have an account{" "}
              <Link>
                <Link to="/login">Login</Link>
              </Link>
            </p>
          </div>

          <div className="StepOneDiv">
            <p className="stepone">Step 1</p>
            <div className="stepOneHeading">
              <h1 className="selectplan">Select Your Plan</h1>
            </div>
            <div className="steponeFirstCard">
              <h3 className="Annual">Annual</h3>
              <p className="Bill">$19.99 USD/PER MONTH • BILLED Monthly</p>
              <p className="firstCardPara">
                At the end of your 30 day trial your subscription will
                automatically rollover to a $119.99/year subscription billed
                annually unless cancelled.
              </p>
              <div className="fontFlex">
                <FontAwesomeIcon icon={faStar} className="fontRecommened" />
                <h4 className="recommended">RECOMMENDED</h4>
              </div>
              <div class="horizontal-line"></div>

              <h4>10+ Programs Included</h4>
              <div className="minicardsMainDiv">
                {/* <div className="minicard">
                  <h5>The Rebirth Challange</h5>
                </div> */}
                <div className="miniCard">
                  <p>Genesis</p>
                  <p>New Year </p>
                  <p>Challange</p>
                </div>
                <div className="miniCard">
                  <p>Summer </p>
                  <p>Active</p>
                  <p>Challange</p>
                </div>
                <div className="miniCard">
                  <p className="miniPara">Elevate </p>
                  <p> Three Phase </p>
                  <p>Challange</p>
                </div>
                <div className="miniCard">
                  <p>Ten Thousand </p>
                  <p> Rapo </p>
                  <p> Challange</p>
                </div>
                <div className="miniCard">
                  <p>Project </p>
                  <p> Reset </p>
                  <p> Challange</p>
                </div>
                <div className="miniCard">
                  <p>My Body </p>
                  <p>My Strenghth </p>
                  <p>Challange</p>
                </div>
              </div>
              <div className="firstcardFooter">
                <div className="fontFlex">
                  <FontAwesomeIcon icon={faCheck} className="font" />
                  <h5>100+ Workouts For Any Goal</h5>
                </div>
                <div className="fontFlex">
                  <FontAwesomeIcon icon={faCheck} className="font" />
                  <h5>Choose Over 10 Million Branded Foods</h5>
                </div>
                <div className="fontFlex">
                  <FontAwesomeIcon icon={faCheck} className="font" />
                  <h5>Wide Variety Of Delicious Recipes</h5>
                </div>
                <div className="fontFlexlast">
                  <FontAwesomeIcon icon={faCheck} className="font" />
                  <h5>Access To Our Exclusive Community</h5>
                </div>
              </div>
            </div>
            <div className="steponeFirstCard">
              <h3 className="Annual">Annual</h3>
              <p className="Bill">$9.99 USD/PER MONTH • BILLED ANNUALLY</p>
              <p className="firstCardPara">
                At the end of your 30 day trial your subscription will
                automatically rollover to a $119.99/year subscription billed
                annually unless cancelled.
              </p>
              <div className="fontFlex">
                <FontAwesomeIcon icon={faStar} className="font" />
                <h4 className="recommended">RECOMMENDED</h4>
              </div>
              <div class="horizontal-line"></div>

              <h4 className="allprogrammes">All Programs Included</h4>
              <div className="minicardsMainDiv">
                <div className="miniCard">
                  <p>Genesis</p>
                  <p>New Year </p>
                  <p>Challange</p>
                </div>
                <div className="miniCard">
                  <p>Summer </p>
                  <p>Active</p>
                  <p>Challange</p>
                </div>
                <div className="miniCard">
                  <p className="miniPara">Elevate </p>
                  <p> Three Phase </p>
                  <p>Challange</p>
                </div>
                <div className="miniCard">
                  <p>Ten Thousand </p>
                  <p> Rapo </p>
                  <p> Challange</p>
                </div>
                <div className="miniCard">
                  <p>Project </p>
                  <p> Reset </p>
                  <p> Challange</p>
                </div>
                <div className="miniCard">
                  <p>My Body </p>
                  <p>My Strenghth </p>
                  <p>Challange</p>
                </div>
              </div>
              <div className="firstcardFooter">
                <div className="fontFlex">
                  <FontAwesomeIcon icon={faCheck} className="font" />
                  <h5>100+ Workouts For Any Goal</h5>
                </div>
                <div className="fontFlex">
                  <FontAwesomeIcon icon={faCheck} className="font" />
                  <h5>Choose Over 10 Million Branded Foods</h5>
                </div>
                <div className="fontFlex">
                  <FontAwesomeIcon icon={faCheck} className="font" />
                  <h5>Wide Variety Of Delicious Recipes</h5>
                </div>
                <div className="fontFlex">
                  <FontAwesomeIcon icon={faCheck} className="font" />
                  <h5>Access To Our Exclusive Community</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="signupformDiv">
            <div className="SignupHeadingDiv">
              <h1>Create Your Account</h1>
            </div>
            <form className="signupForm">
              <input
                type="text"
                placeholder="First name"
                onChange={handleSignupFirstname}
                className="firstnameInput"
              />
              <input
                type="text"
                placeholder="Second name"
                onChange={handleSignuplastname}
                className="secondnameInput"
              />
              <input
                type="email"
                placeholder="Email"
                className="emailInput"
                onChange={handleSignupEmail}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={handleSignupPassword}
                className="passwordInput"
              />
              <button
                type="submit"
                className="signupSubmitbtn"
                onClick={() => {
                  formValidate();
                }}
              >
                Get Started
              </button>
            </form>
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
      <div>
        <Toaster />
      </div>
    </section>
  );
}

export default Signup;
