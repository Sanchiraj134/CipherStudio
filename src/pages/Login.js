import React, { useState } from "react";

export default function Login({ setIsLoggedIn, setShowRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const data = JSON.parse(localStorage.getItem(email));
    if (data && data.password === password) {
      alert("Login successful!");
      setIsLoggedIn(true);
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Login to CipherStudio</h2>
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
        <button onClick={handleLogin}>Login</button>
        <div className="auth-switch">
          Don’t have an account?{" "}
          <a href="#" onClick={() => setShowRegister(true)}>
            Register
          </a>
        </div>
      </div>
    </div>
  );
}
