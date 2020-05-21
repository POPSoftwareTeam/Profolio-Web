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
import Register from './Components/RegisterPage'
import MyPhotos from './Components/MyPhotosPage'
import SharedPhotos from './Components/SharedPhotosPage'
import SharePhoto from './Components/SharePhotoPage'
import RegisterEmail from './Components/RegisterEmailPage'
import FullPhotoView from './Components/FullPhotoViewPage';
import NewFileUpload from './Components/NewFileUpload'


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
              <Route exact path="/Register" component ={Register}/>
              <Route exact path="/RegisterEmail" component ={RegisterEmail}/>
              <Route exact path="/Myphotos" component ={MyPhotos}/>
              <Route exact path="/Sharedwithme" component ={SharedPhotos}/>
              <Route exact path="/SharePhoto" component ={SharePhoto}/>
              <Route exact path="/FullPhoto" component ={FullPhotoView}/> 
              <Route exact path="/NewFileUpload" component ={NewFileUpload}/> 
            </Switch>
       </>
    )
}




export default App;
