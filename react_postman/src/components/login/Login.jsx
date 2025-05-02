import React, { useState } from "react";
import styles from "./Login.module.css";
import useAuth from "../../hoods/useAuth";

const Login = () => {
  const { signIn, setEmail, setPassword } = useAuth();

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
      localStorage.setItem("token", data.token); // gemmer token i localStorage
    } else {
      console.error("Login failed", data.message);
      alert(data.message);
    }
  };

  return (
    <form className={styles.formContainer2} onSubmit={signIn}>
      <h2>Login</h2>

      <div className={styles.inputGroup}>
        <label>Email:</label>
        <input
          className={styles.inputLogin}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className={styles.inputGroup}>
        <label>Password</label>
        <input
          className={styles.inputLogin}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button type="submit">Log ind</button>
    </form>
  );
};

export default Login;
