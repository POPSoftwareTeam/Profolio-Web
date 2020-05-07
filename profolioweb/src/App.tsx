import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import FileUpload from './Components/FileUploadPage'
import Navbar from './Components/Partial/Navbar'
import Home from './Components/HomePage'
import Login from './Components/LoginPage'


const App:React.FC = props => {
    
    return (
      <>
        <Navbar/>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/FileUpload" component={FileUpload}/>
              <Route exact path="/Login" component ={Login}/>
            </Switch>
       </>
    )
}




export default App;
