import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import HorizontalLine from "./HorizontalLine";
import Icons from "./Icons";

export default function User() {
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isUsernameValid, setIsUsernameValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const handleSignIn = (e) => {
    e.preventDefault();
    history.push("/Home");
    if (username.trim() === "" || password.trim() === "") {
      alert("Please enter both username and password");
      return;
    }
  };

  const handleUsernameChange = (event) => {
    const enteredUsername = event.target.value;
    setUsername(enteredUsername);

    setIsUsernameValid(event.target.value.length >= 4);
  };

  const handlePasswordChange = (event) => {
    const enteredPassword = event.target.value;
    setPassword(enteredPassword);

    setIsPasswordValid(event.target.value.length >= 6);
  };

  return (
    <div className="container">
      <div className="logo">
        <img src="img/girl-with-key.png" alt="logo" />
      </div>
      <h2> Sign In</h2>
      <h5>
        New User?<span className="signUp"> Create an account</span>
      </h5>
      <form action="/Home" className="signInForm">
        <label>
          <div className="verticalAlignTextField">
            <input
              type="text"
              id="username"
              value={username}
              placeholder=" Username or Email"
              onChange={handleUsernameChange}
              className={isUsernameValid ? "" : "invalid"}
            />
          </div>
          {!isUsernameValid && (
            <p className="error-message">
              Username must be at least 4 characters
            </p>
          )}
        </label>
        <label>
          <div className="verticalAlignTextField">
            <input
              type="text"
              id="password"
              value={password}
              placeholder=" Password"
              onChange={handlePasswordChange}
              className={isPasswordValid ? "" : "invalid"}
            />
          </div>
          {!isPasswordValid && (
            <p className="error-message">
              Password must be at least 6 characters
            </p>
          )}
        </label>

        <div className="checkboxWithContent">
          <input type="checkbox" className="largerCheckbox" />
          <label className="customCheckbox">Keep me signed in</label>
        </div>
        <div>
          <button type="submit" className="btn" onClick={handleSignIn}>
            Sign In
          </button>
        </div>
      </form>
      <HorizontalLine />
      <Icons />
    </div>
  );
}
