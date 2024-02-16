import React, { useEffect, useContext, useState } from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import playstoreSvg from "../../assets/playstore.svg";
import appleStoreSvg from "../../assets/applestore.svg";
import {
  faApple,
  faGooglePlay,
  faSlack,
} from "@fortawesome/free-brands-svg-icons";
import { removeUserFromLocalStorageSignup } from "../../../Utils/localStorage";
import { removeUserFromLocalStorageLogin } from "../../../Utils/localStorage";
// import { AuthContext } from "../../Context/Auth";

function Dashboard() {
  const navigate = useNavigate();
  const [localstorageuser, setlocalstorageuser] = useState(null);
  console.log("data from the state", localstorageuser);
  // const { user } = useContext(AuthContext);

  // console.log(user);
  // const { id } = useParams();
  useEffect(() => {
    const loginUserFromStorage = JSON.parse(localStorage.getItem("LoginUser"));
    // console.log("login user from storage:", loginUserFromStorage.email);
    setlocalstorageuser(loginUserFromStorage);
  }, []);

  const previewImage = () => {};
  const handleIosBtn = () => {
    navigate("/");
  };
  const logoutBtn = () => {
    removeUserFromLocalStorageSignup("SignupUser");
    removeUserFromLocalStorageLogin("LoginUser");
    navigate("/");
  };

  // useEffect(() => {
  //   const loginUserFromStorage = JSON.parse(localStorage.getItem("LoginUser"));
  //   console.log(
  //     loginUserFromStorage,
  //     "this is the login user seen in dashboard"
  //   );
  // }, []);

  return (
    <section className="dashboard">
      <div className="Navbar">
        <div className="logo">
          <FontAwesomeIcon icon={faSlack} className="slackLogo" />
        </div>
        <div className="logoutDiv">
          <button onClick={logoutBtn} className="logoutBtn">
            Logout
          </button>
        </div>
      </div>

      <div className="dashboardMainDiv">
        <div className="imageInputDiv">
          <label htmlFor="imageInput" className="uploadButton">
            <span className="cameraicon">
              <FontAwesomeIcon style={{ marginTop: "15px" }} icon={faCamera} />{" "}
            </span>
            <span className="addIcon">&#43;</span>
          </label>
          <input
            accept="image"
            type="file"
            id="imageinput"
            onChange={previewImage}
          />
        </div>
        <p className="WelcomeTrial">Welcome, trial</p>
        <div className="downloadTheAppDiv">
          <p className="downloadTheApp">
            Download the app below and login in with the same creditentials you
            just used to create your account
          </p>
        </div>

        <div className="AndroidIosBtnDiv">
          <div>
            <button className="iosButton" onClick={handleIosBtn}>
              <img src={appleStoreSvg} alt="apple svg is here" />
            </button>
          </div>

          <div className="androidBtnDiv">
            <button className="androidButton" onClick={handleIosBtn}>
              <img src={playstoreSvg} alt="Android svg is here" />
            </button>
          </div>
        </div>

        <div className="cardsmainDiv">
          <div className="AccountandPlanDivsFelx">
            <div className="AccountDiv">
              <div className="Heading">
                <div className="MyAccount">
                  <p>My Account</p>
                </div>
                <div className="Edit">
                  <button className="Accountedit">Edit</button>
                </div>
              </div>
              <div className="AccountDetails">
                <div className="Age">
                  <div>
                    <p>Email:</p>
                  </div>
                  <div>
                    <p>{localstorageuser?.email}</p>
                  </div>
                </div>
                <div className="horizontalLine"></div>
                <div className="Height">
                  <div className="accountpassword">
                    <p>Password:</p>
                  </div>
                  <div>
                    <p>{localstorageuser?.password}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="PlanDiv">
              <div className="Heading">
                <p className="Payment">My Plan</p>
                <div className="Edit">
                  <button className="PlanEdit">Edit</button>
                </div>
              </div>

              <div className="PlanDetails">
                <div className="paymentMethod">
                  <div>
                    <p className="plandetailsPlan">
                      12 months:{" "}
                      <span className="PlanSpan">&#x2022; A big Deal</span>
                    </p>
                  </div>
                  <div style={{ backgroundColor: "red" }}>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="ProfileandPaymentDivsFlex">
            <div className="ProfileDiv">
              <div className="Heading">
                <div className="Profile">
                  <p>Profile</p>
                </div>
                <div className="Edit">
                  <button className="ProfileEdit">Edit</button>
                </div>
              </div>
              <div className="ProfileDetails">
                <div className="Age">
                  <div>
                    <p>Age:</p>
                  </div>
                  <div>
                    <p></p>
                  </div>
                </div>
                <div className="horizontalLine"></div>
                <div className="Height">
                  <div>
                    <p>Height:</p>
                  </div>
                  <div>
                    <p></p>
                  </div>
                </div>
                <div className="horizontalLine"></div>

                <div className="Weight">
                  <div>
                    <p>Weight:</p>
                  </div>
                  <div>
                    <p></p>
                  </div>
                </div>
                <div className="horizontalLine"></div>

                <div className="Goal">
                  <div>
                    <p className="profileGoal">Goals:</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="PaymentDiv">
              <div className="Heading">
                <p className="Payment">Payment Method</p>
                <div className="Edit">
                  <button className="PaymentEdit">Edit</button>
                </div>
              </div>

              <div className="PaymentDetails">
                <div className="paymentMethod">
                  <div>
                    <p>Payment Method:</p>
                  </div>
                  <div>
                    <p></p>
                  </div>
                </div>
                <div className="horizontalLine"></div>
                <div className="cardNmbr">
                  <div>
                    <p>Card Number:</p>
                  </div>
                  <div>
                    <p></p>
                  </div>
                </div>
                <div className="horizontalLine"></div>

                <div className="ExpiryDate">
                  <div>
                    <p>Expiry Date:</p>
                  </div>
                  <div>
                    <p></p>
                  </div>
                </div>
                <div className="horizontalLine"></div>

                <div className="Email">
                  <div>
                    <p className="paymentmethodEmail">Email:</p>
                  </div>
                  <div>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
