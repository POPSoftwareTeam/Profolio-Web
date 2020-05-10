import React from "react";
import "../css/homepage.scss";
import profolioIcon from "../resources/Images/profolioIcon.png";
const Home: React.FC = (props) => {
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
              Upload images, share your galleries to clients and friends, and get
              everyone coordinated with our fast and reliable image sharing service.
            </div>
          </div>
        </div>
        <div className="rightImage"></div>
        <div className="bottomStuff">Upload your images!</div>
        <div className="bottomRightStuff">Share those images with clients!</div>
      </div>
    </>
  );
};

export default Home;
