import React from 'react';
import {Link} from "react-router-dom";

const Navbar:React.FC = props => {    
    return (
      <>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/FileUpload">Upload a file</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
            <li>
              <Link to="/Register">Register</Link>
            </li>
          </ul>
        </nav>
       </>
    )
}




export default Navbar;