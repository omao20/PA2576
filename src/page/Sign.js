import React, { useState } from "react";
import "./login.css";



function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
    } else {
        // Call API to create user account
        console.log(`Creating account with email ${email} and password ${password}`);
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        document.location.href = `/login`
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>

      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>

      <label>
        Confirm Password:
        <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
      </label>

      <button type="submit">Sign Up</button>
    </form>
  );
}

export default Signup;