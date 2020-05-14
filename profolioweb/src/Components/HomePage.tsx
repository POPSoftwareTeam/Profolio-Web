import React from "react";
import "../css/homepage.scss";
import { withRouter } from "react-router";
import profolioIcon from "../resources/Images/profolioIcon.png";
import MainButton from "./shared/MainButton";
const Home: React.FC = (props) => {
  const navigateToRegister = (link: string) => {
    //props.history.push("/Register");
  };
  return (
    <>
      {/* <h1>WELCOME TO THE HOME PAGE</h1> */}
      <div className="grid-container">
        <div className="MainContent">
          <div className="mainText">
            <div className="imageBox">
              <img src={profolioIcon} alt="" />
            </div>
            <div className="prompt">
              Upload images, share your galleries to clients and friends, and
              get everyone coordinated with our fast and reliable image sharing
              service.
              <div className="buttonBox">
                <div onClick={(link) => navigateToRegister("/Register")}>
                  <MainButton text="Register Now!" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rightImage"></div>
        <div className="bottomStuff">
          <div className="bottomText">Upload your images!</div>
        </div>
        <div className="bottomRightStuff">
          <div className="bottomText">Share those images with clients!</div>
        </div>
      </div>
    </>
  );
};

export default withRouter(Home);
