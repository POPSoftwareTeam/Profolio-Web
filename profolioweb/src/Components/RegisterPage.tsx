import React from 'react';
import APIAuthenticationService from '../Services/APIAuthenticationService';
import { User } from '../Models/UserModel';


const Register:React.FC = props => {
    let [email, setEmail] = React.useState<string>("");
    let [password, setPassword] = React.useState<string>("");
    let [verifyPassword, setVerifyPassword] = React.useState<string>("");


    const submitCharityToAPI = async () => {
      let authservice = new APIAuthenticationService()
      if(password == verifyPassword){
            await authservice.Register(new User(email,password))
      }
    }
    
    return (
      <>
        <form>
            <h1>Register</h1>
            <label>Email:</label>
            <input type="email" value={email} onChange={(event:any) => setEmail(event.target.value)}/>
            
            <label>Password</label>
            <input type="password" value={password} onChange={(event:any) => setPassword(event.target.value)}/>
            
            <label>Verify Password</label>
            <input type="password" value={verifyPassword} onChange={(event:any) => setVerifyPassword(event.target.value)}/>

            <button type="button" onClick={async ()=> await submitCharityToAPI()}>Register</button>
        </form>
       </>
    )
}

export default Register;