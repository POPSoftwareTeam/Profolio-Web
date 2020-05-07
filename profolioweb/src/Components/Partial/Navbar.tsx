import React from 'react';
import {Link} from "react-router-dom";
import '../../Public/CSS/navbar.css'

const Navbar:React.FC = props => {    
    return (
      <>
      
        <nav className="NavbarGridContainer">
          
            <div className="Home">
              <Link to="/">Home</Link>
            </div>
            <div className="FileUpload">
              <Link to="/FileUpload">Upload a file</Link>
            </div>
            <div className="Empty"></div>
            <div className="Login">
              <Link to="/Login">Login</Link>
            </div>
            <div className="Register">
              <Link to="/Register">Register</Link>
            </div>
    
        </nav>
      
       </>
    )
}




export default Navbar;