import React from "react";
import "../css/form.scss";
import APIAuthenticationService from "../Services/APIAuthenticationService";
import { User } from "../Models/UserModel";
import MainButton from "./shared/MainButton";
import { RouteComponentProps } from 'react-router-dom';


const RegisterEmail: React.FC<RouteComponentProps>= (props) => {
  let [email, setEmail] = React.useState<string>("");
  let [password, setPassword] = React.useState<string>("");
  let [verifyPassword, setVerifyPassword] = React.useState<string>("");

  const navigateToLogin = async () => {
        props.history.push('Login')
  };

  return (
    <>
      <div className="">
        Please go to your email to confirm your registration, then click here to login.
        <div onClick={() => navigateToLogin()}>
            <MainButton text="Go To Login"/>
        </div>
      </div>
    </>
  );
};

export default RegisterEmail;
