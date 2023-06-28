import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform authentication logic here
    // Check if the entered email and password are valid
    if (email === "example@example.com" && password === "password") {
      // Set the loggedIn state to true
      setLoggedIn(true);
      window.localStorage.setItem("loggedIn", "true");
      
      // Redirect to the main page after successful login
      window.location.href = "/";
    } else {
      // Handle invalid credentials
      alert("Invalid credentials");
    }
  };
  
  
  

  return (
    <div>
      <h1>Login Page</h1>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
      <p>
        Don't have an account? <Link to="/sign-up">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
