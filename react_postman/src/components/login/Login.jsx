import React, { useState } from "react";
import styles from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3042/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log("Login successful", data);
    } else {
      console.error("Login failed", data.message);
      alert(data.message);
    }
  };

  return (
    <form className={styles.formContainer2} onSubmit={handleLogin}>
      <h2>Login</h2>

      <div className={styles.inputGroup}>
        <label>Email:</label>
        <input
          className={styles.inputLogin}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className={styles.inputGroup}>
        <label>Password</label>
        <input
          className={styles.inputLogin}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button type="submit">Log ind</button>
    </form>
  );
};

export default Login;
