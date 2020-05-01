import React from 'react';
import logo from './logo.svg';
import './App.css';
import APIAuthenticationService from "./Services/APIAuthenticationService"
import { User } from './Models/UserModel';

function App() {
  let authservice = new APIAuthenticationService()
  authservice.Login(new User("kyler.daybell96@gmail.com","kyler"))
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
