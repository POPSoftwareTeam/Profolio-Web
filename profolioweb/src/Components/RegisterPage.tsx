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
                onChange={(event: any) => setPassword(event.target.value)}
              />
              <label  className="label"><div className="content">Password:</div></label>
              </div>
              <div className="formContent">
              <input
                type="password"
                className="pwd input"
                placeholder=" "
                value={verifyPassword}
                onChange={(event: any) => setVerifyPassword(event.target.value)}
              />
              <label  className="label"><div className="content">Verify Password:</div></label>
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
