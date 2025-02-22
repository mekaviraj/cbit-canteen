import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Signup.css"; // Reuse Signup styles

const OTPVerification = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const verifyOTP = () => {
    console.log("Verifying OTP:", otp);
    // Backend API call to verify OTP will go here
    navigate("/role"); // Navigate to role selection page
  };

  return (
    <div className="signup-container">
      <h2>Verify OTP</h2>
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button onClick={verifyOTP}>Verify</button>
    </div>
  );
};

export default OTPVerification;
