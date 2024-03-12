// pages/app/login.page.tsx
"use client";
import styles from "./login.module.css";
import { FormEvent, useState } from "react";
import Link from "next/link";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }), // Use 'email' and 'password' instead of 'username'
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      // Save user data to localStorage or sessionStorage
      localStorage.setItem("user", JSON.stringify(data.user));

      // Redirect to another page or perform any other action after successful login
      window.location.href = "/customerPage";
    } catch (error) {
      setError("Failed to login. Please check your credentials.");
    }
  };

  return (
    <div className={styles.mainContainer}>
      <form className={styles.container} onSubmit={handleLogin}>
        <h1 className={styles.text}>Login</h1>
        {error && <p className={styles.error}>{error}</p>}
        <div className={styles.box}>
          <label htmlFor="email" className={styles.label}>
            Email:{" "}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
        </div>
        <div className={styles.box}>
          <label htmlFor="password" className={styles.label}>
            Password:{" "}
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
        </div>
        <div className={styles.buttonBox}>
          <button
            type="submit"
            style={{
              backgroundColor: "#530b0b",
              color: "white",
              padding: "10px 20px",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </div>
      </form>
      <p>
        Dont have an account? <Link href="/register">Register now</Link>
      </p>
    </div>
  );
};

export default LoginPage;
