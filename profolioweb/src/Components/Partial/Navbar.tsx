import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import "../../css/navbar.scss";
const Navbar: React.FC = (props) => {
  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="navBar">
        <button onClick={() => onToggle()}>
          <FaAlignRight />
        </button>
        <div className={toggle ? "nav-links show-nav" : "nav-links"}>
          <Link className="linkItem " to="/">
            Home
          </Link>
          <Link className="linkItem" to="/FileUpload">
            Upload a file
          </Link>
          <Link className="linkItem" to="/Login">
            Login
          </Link>
          <Link className="linkItem" to="/Register">
            Register
          </Link>
          <Link className="linkItem" to="/Myphotos">
            MyPhotos
          </Link>
          <Link className="linkItem" to="/Sharedwithme">
            Shared with me
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
