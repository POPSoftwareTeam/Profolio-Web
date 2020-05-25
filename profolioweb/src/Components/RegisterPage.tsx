import React from "react";
import "../css/form.scss";
import APIAuthenticationService from "../Services/APIAuthenticationService";
import { User } from "../Models/UserModel";
import MainButton from "./shared/MainButton";
import { RouteComponentProps } from 'react-router-dom';


const Register: React.FC<RouteComponentProps>= (props) => {
  let [email, setEmail] = React.useState<string>("");
  let [password, setPassword] = React.useState<string>("");
  let [verifyPassword, setVerifyPassword] = React.useState<string>("");
  let validations:number[] = [
        (password.length >= 5)?1:0, 
        (password.search(/[A-Z]/) > -1)?1:0, 
        (password.search(/[0-9]/) > -1)?1:0, 
        (password.search(/[$&+,:;=?@#]/) > -1) ?1:0
    ];
  let strength: number = validations.reduce(function(a, b){return a + b});;

   const validatePassword = (event:any) => {
    setPassword(event);
  }
  const submitCharityToAPI = async () => {
    let authservice = new APIAuthenticationService();
    
    if (password == verifyPassword) {
      let response: boolean;
      response = await authservice.Register(new User(email, password));

      if (response === true )
      {
          props.history.push('/RegisterEmail')
      }
    }
  };

  return (
    <>
      <div className="form-grid-container">
        <div className="leftImage"></div>
        <div className="form">
          <h2>
            <b>Register</b>
          </h2>
          <form>
            <div className="formContent">
              
              <input
                type="email"
                className="email input"
                placeholder=" "
                value={email}
                onChange={(event: any) => setEmail(event.target.value)}
              />
              <label  className="label"><div className="content">Email:</div></label>
              </div>
              <div className="formContent">
                <input
                  type="password"
                  className="pwd input"
                  placeholder=" "
                  value={password}
                  onChange={(event: any) => validatePassword(event.target.value)}
                />
                <label  className="label"><div className="content">Password:</div></label>
                
                {password.length > 0 ? 
                <>
                <div className="strength">
                  <span className={strength > 0 ? "bar bar-1":"bar bar-white"} />
                  <span className={strength > 1 ? "bar bar-2":"bar bar-white"} />
                  <span className={strength > 2 ? "bar bar-3":"bar bar-white"} />
                  <span className={strength > 3 ? "bar bar-4":"bar bar-white"} />
                </div>
                <div  className="validation">
                {console.log(validations[0])}
                  <div> {validations[0] === 1 ? '✔️' : '❌'} must be at least 5 characters</div>
                  <div> {validations[1] === 1 ? '✔️' : '❌'} must contain a capital letter</div>
                  <div> {validations[2] === 1 ? '✔️' : '❌'} must contain a number</div>
                  <div> {validations[3] === 1 ? '✔️' : '❌'} must contain one of $&+,:;=?@#</div>
                </div>
                </>
                : <></>}
              </div>
             
              <div className="formContent">
              <input
                type="password"
                className="pwd input"
                placeholder=" "
                value={verifyPassword}
                onChange={(event: any) => setVerifyPassword(event.target.value)}
              />
              <label  className="label"><div className="content">Re-Enter Password:</div></label>
              </div>
              <div className="buttonBoxCenter">
               <MainButton text={"Register"} onClick={async () => await submitCharityToAPI()}/>
              </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
