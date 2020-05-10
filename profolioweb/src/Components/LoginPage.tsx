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
          <h2><b>Login</b></h2>
          <form>
            <div className="formContent">
              <div>
                
                <input
                  type="email"
                  className="email"
                  placeholder="Email"
                  name="name"
                  value={email}
                  onChange={(event: any) => setEmail(event.target.value)}
                />
                {/* <div className="label">Email</div> */}
              </div>

              <input
                type="password"
                className="pwd"
                placeholder="Password"
                value={password}
                onChange={(event: any) => setPassword(event.target.value)}
              />
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
