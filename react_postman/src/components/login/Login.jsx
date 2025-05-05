import React, { useState } from "react";
import styles from "./Login.module.css";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { signIn, setEmail, setPassword, user, signOut } = useAuth();

  return !user ? (
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
  ) : (
    <>
      <p>Du er logged ind</p>
      <button onClick={signOut}>Log ud</button>

      <img src={user?.image} />
      <h3>{user?.name}</h3>
      <h3>{user?.role}</h3>
    </>
  );
};

export default Login;
