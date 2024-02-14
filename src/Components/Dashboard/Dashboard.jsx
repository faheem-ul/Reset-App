import React from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import {
  faApple,
  faGooglePlay,
  faSlack,
} from "@fortawesome/free-brands-svg-icons";

function Dashboard() {
  const navigate = useNavigate();
  const previewImage = () => {};
  const handleIosBtn = () => {
    navigate("/login");
  };
  const logoutBtn = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
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
              <FontAwesomeIcon icon={faCamera} />{" "}
            </span>
            <span className="addIcon">&#43;</span>
          </label>
          <input type="file" id="imageinput" onChange={previewImage} />
        </div>
        <p className="WelcomeTrial">Welcome, trial</p>
        <div className="downloadTheAppDiv">
          <p className="downloadTheApp">
            Download the app below and login in with the same creditentials you
            just used to create your account
          </p>
        </div>

        <div className="AndroidIosBtnDiv">
          <div className="IosBtnDiv">
            <button className="iosButton" onClick={handleIosBtn}>
              <FontAwesomeIcon icon={faApple} className="iosFont" /> Available
              on <span className="fontspan">App Store</span>
            </button>
          </div>

          <div className="androidBtnDiv">
            <button className="androidButton" onClick={handleIosBtn}>
              <FontAwesomeIcon icon={faGooglePlay} className="androidFont" />{" "}
              Get it on <span className="fontspanandroid">Play Store</span>
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
                    <p></p>
                  </div>
                </div>
                <div className="horizontalLine"></div>
                <div className="Height">
                  <div>
                    <p>Password:</p>
                  </div>
                  <div>
                    <p></p>
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
                    <p>
                      12 months:{" "}
                      <span className="PlanSpan">&#x2022; A big Deal</span>
                    </p>
                  </div>
                  <div>
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
                    <p>Goals:</p>
                  </div>
                  <div>
                    <p></p>
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
                    <p>Email:</p>
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
