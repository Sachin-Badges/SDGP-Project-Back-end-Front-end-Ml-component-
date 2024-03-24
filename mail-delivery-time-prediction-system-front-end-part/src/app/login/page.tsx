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
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      localStorage.setItem("user", JSON.stringify(data.user));
      window.location.href = "/customerPage";
    } catch (error) {
      setError("Failed to login. Please check your credentials.");
    }
  };

  return (
    <div className="text-center p-10 md:p-20">
      <form
        className="bg-white bg-opacity-5 border border-silver p-4 rounded-lg"
        onSubmit={handleLogin}
      >
        <h1 className="text-white font-bold text-3xl md:text-5xl mb-6 md:mb-10">
          Login
        </h1>
        {error && <p className={styles.error}>{error}</p>}
        <div className="mb-4 md:mb-8 flex justify-center items-center">
          <label htmlFor="email" className="text-white mb-2 md:mb-0 md:mr-4">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="p-2  ml-8 w-full md:w-2/5 text-white bg-transparent border border-silver rounded-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4 md:mb-8 flex justify-center items-center">
          <label htmlFor="password" className="text-white mb-2 md:mb-0 md:mr-4">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="p-2 w-full md:w-2/5 text-white bg-transparent border border-silver rounded-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="p-2 bg-red-900 text-white rounded-full cursor-pointer pl-6 pr-6 md:pl-10 md:pr-10"
          >
            Login
          </button>
        </div>
      </form>
      <p className="pt-10">
        Dont have an account?{" "}
        <Link
          href="/register"
          className="p-2 bg-red-900 text-white rounded-full cursor-pointer pl-6 pr-6 md:pl-10 md:pr-10"
        >
          Register now
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
