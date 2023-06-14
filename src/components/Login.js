import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../utils/AuthenticationSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Login Clicked");
    // Simulate authentication with a backend API
    // Replace this with your actual authentication logic

    if (username === "admin" && password === "password") {
      // console.log("If Statement", username === 'admin', password === 'password');
      dispatch(login(username));
      console.log(dispatch(login(username)));
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
