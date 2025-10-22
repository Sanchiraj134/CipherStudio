import React, { useState } from "react";

export default function Register({ setShowRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    localStorage.setItem(email, JSON.stringify({ email, password }));
    alert("Registered successfully!");
    setShowRegister(false);
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Create an Account</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleRegister}>Register</button>
        <div className="auth-switch">
          Already have an account?{" "}
          <a href="#" onClick={() => setShowRegister(false)}>
            Login
          </a>
        </div>
      </div>
    </div>
  );
}
