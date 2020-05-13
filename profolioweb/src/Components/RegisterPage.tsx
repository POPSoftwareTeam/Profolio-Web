import React from "react";
import "../css/form.scss";
import APIAuthenticationService from "../Services/APIAuthenticationService";
import { User } from "../Models/UserModel";

const Register: React.FC = (props) => {
  let [email, setEmail] = React.useState<string>("");
  let [password, setPassword] = React.useState<string>("");
  let [verifyPassword, setVerifyPassword] = React.useState<string>("");

  const submitCharityToAPI = async () => {
    let authservice = new APIAuthenticationService();
    if (password == verifyPassword) {
      await authservice.Register(new User(email, password));
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
              {/* <label>Email:</label> */}
              <input
                type="email"
                className="email"
                placeholder="Email"
                value={email}
                onChange={(event: any) => setEmail(event.target.value)}
              />

              {/* <label>Password</label> */}
              <input
                type="password"
                className="pwd"
                placeholder="Password"
                value={password}
                onChange={(event: any) => setPassword(event.target.value)}
              />

              {/* <label>Verify Password</label> */}
              <input
                type="password"
                className="pwd"
                placeholder="Verify Password"
                value={verifyPassword}
                onChange={(event: any) => setVerifyPassword(event.target.value)}
              />
              <div className="buttonBoxCenter">
                <div
                  className="button"
                  onClick={async () => await submitCharityToAPI()}
                >
                  <span>Register</span>
                  <svg>
                    <polyline
                      className="o1"
                      points="0 0, 150 0, 150 55, 0 55, 0 0"
                    ></polyline>
                    <polyline
                      className="o2"
                      points="0 0, 150 0, 150 55, 0 55, 0 0"
                    ></polyline>
                  </svg>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
