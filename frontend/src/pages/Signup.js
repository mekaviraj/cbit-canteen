import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Signup.css"; // Separate CSS file

const Signup = () => {
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const navigate = useNavigate();

  const sendOTP = () => {
    console.log("Sending OTP to:", email);
    // Backend API call to send OTP will go here
    setOtpSent(true);
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={sendOTP}>Send OTP</button>

      {otpSent && <p>OTP Sent! Check your email.</p>}
      {otpSent && (
        <button onClick={() => navigate("/otp")}>Verify OTP</button>
      )}
    </div>
  );
};

export default Signup;
