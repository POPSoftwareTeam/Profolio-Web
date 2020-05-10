import React from "react";
import "../css/form.scss";
import APIAuthenticationService from "../Services/APIAuthenticationService";
import APIPhotoService from "../Services/APIPhotoService";
import { User } from "../Models/UserModel";

const Login: React.FC = (props) => {
  let [email, setEmail] = React.useState<string>("");
  let [password, setPassword] = React.useState<string>("");

  const submitCharityToAPI = async () => {
    let authservice = new APIAuthenticationService();
    let token = await authservice.Login(new User(email, password));
    console.log(token);
  };

  return (
    <>
      <div className="form-grid-container">
        <div className="leftImage"></div>
        <div className="form">
          <form>
            <div className="loginTitle">Login To Continue</div>
            <div className="formContent">
              <div>
                <label>
                  Email
                  <input
                    type="email"
                    name="name"
                    value={email}
                    onChange={(event: any) => setEmail(event.target.value)}
                  />
                </label>
              </div>
              <label>
                Password
                <input
                  type="password"
                  value={password}
                  onChange={(event: any) => setPassword(event.target.value)}
                />
              </label>
            </div>
            <button
              type="button"
              onClick={async () => await submitCharityToAPI()}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
