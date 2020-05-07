import React from 'react';
import APIAuthenticationService from '../Services/APIAuthenticationService';
import APIPhotoService from '../Services/APIPhotoService';
import { User } from '../Models/UserModel';


const Login:React.FC = props => {
    let [email, setEmail] = React.useState<string>("");
    let [password, setPassword] = React.useState<string>("");


    const submitCharityToAPI = async () => {
      let authservice = new APIAuthenticationService()
      let token =  await authservice.Login(new User(email,password))
      console.log(token)
    }
    
    return (
      <>
        <form>
            <h1>Upload a photo</h1>
            <label>Email:</label>
            <input type="email" value={email} onChange={(event:any) => setEmail(event.target.value)}/>
            
            <label>Password</label>
            <input type="password" value={password} onChange={(event:any) => setPassword(event.target.value)}/>
            
            <button type="button" onClick={async ()=> await submitCharityToAPI()}>Login</button>
        </form>
       </>
    )
}




export default Login;