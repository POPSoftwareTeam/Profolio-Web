import React from "react";
import "../css/form.scss";
import APIAuthenticationService from "../Services/APIAuthenticationService";
import APIPhotoService from "../Services/APIPhotoService";
import { User } from "../Models/UserModel";
import MainButton from "./shared/MainButton";
import { RouteComponentProps } from "react-router-dom";

const Login: React.FC<RouteComponentProps> = (props) => {
  let [email, setEmail] = React.useState<string>("");
  let [password, setPassword] = React.useState<string>("");

  const submitCharityToAPI = async () => {
    let authservice = new APIAuthenticationService();
    let token = await authservice.Login(new User(email, password));
    if (token) {
      props.history.push("/MyPhotos");
    }
  };

  return (
    <>
      <div className="form-grid-container">
        <div className="leftImage"></div>
        <div className="form">
          <h2>
            <b>Login</b>
          </h2>
          <form>
            <div className="formContent">
              <input
                type="email"
                name="name"
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
            <div className="buttonBoxCenter">
              <MainButton
                text={"Login"}
                onClick={async () => await submitCharityToAPI()}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
