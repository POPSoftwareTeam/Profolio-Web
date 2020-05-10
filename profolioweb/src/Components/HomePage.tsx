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
              Upload images, share your galleries to clients and friends, and
              get everyone coordinated with our fast and reliable image sharing
              service.
              <div className="buttonBox">
              <div className="button">
                <span>Register Now!</span>
                <svg>
                  <polyline
                    className="o1"
                    points="0 0, 150 0, 150 55, 0 55, 0 0"
                  ></polyline>
                  <polyline
                    className="o2"
                    points="0 0, 150 0, 150 55, 0 55, 0 0"
                  ></polyline>
                </svg>
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

export default Home;
