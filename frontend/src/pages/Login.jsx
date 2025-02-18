import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <img src="/cbit-logo.png" alt="CBIT Logo" className="logo" />
      <h1>CbitCanteen.com</h1>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />

        <button type="submit">Login</button>
      </form>
      <div className="links">
        <a href="/register">Register</a>
        <a href="/forgot-password">Forgot Password?</a>
      </div>
    </div>
  );
}

export default Login;
