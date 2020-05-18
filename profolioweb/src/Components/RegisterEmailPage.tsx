import React from "react";
import "../css/form.scss";
import "../css/registerEmail.scss";
import MainButton from "./shared/MainButton";
import { RouteComponentProps } from "react-router-dom";
import profolioIcon from "../resources/Images/profolioIcon.png";
import Confetti from "../resources/Images/confetti2.png";

const RegisterEmail: React.FC<RouteComponentProps> = (props) => {
  const navigateToLogin = async () => {
    props.history.push("Login");
  };

  return (
    <>
      <div className="registerEmailContainer">
        <div className="content">
          <div className="imageLogo">
            <img src={profolioIcon} alt="" />
          </div>
          {/* <div className="thanksText">You are on you way!!</div> */}
          <div className="registrationText">Your Registration is almost complete!</div>
          <div className="confettiBox"><div><img src={Confetti} alt=""/></div></div>
          <div className="contentText">
            Please go to your email to confirm your registration, then click
            here to login.
          </div>
          <div className="buttonBoxCenter">
            <MainButton text="Go To Login" onClick={() => navigateToLogin()} />
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterEmail;
