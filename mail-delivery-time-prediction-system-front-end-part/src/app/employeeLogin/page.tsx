// pages/app/login.page.tsx
"use client";
import styles from "./login.module.css";
import { FormEvent, useState } from "react";
import Link from "next/link";
import RootLayout from "../layout";
import dynamic from "next/dynamic";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/employees/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, employeeId }), // Use 'email' and 'password' instead of 'username'
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      // Save user data to localStorage or sessionStorage
      localStorage.setItem("employee", JSON.stringify(data.employee));

      // Redirect to another page or perform any other action after successful login
      window.location.href = "/employeePage";
    } catch (error) {
      setError("Failed to login. Please check your credentials.");
    }
  };

  // return (
  //   <RootLayout hideNavbar={true}>
  //     <div className={styles.mainContainer}>
  //       <form className={styles.container} onSubmit={handleLogin}>
  //         <h1 className={styles.text}>Login</h1>
  //         {error && <p className={styles.error}>{error}</p>}
  //         <div className={styles.box}>
  //           <label htmlFor="email" className={styles.label}>
  //             Email:{" "}
  //           </label>
  //           <input
  //             type="email"
  //             id="email"
  //             name="email"
  //             className={styles.input}
  //             value={email}
  //             onChange={(e) => setEmail(e.target.value)}
  //             required
  //           />
  //           <br />
  //         </div>
  //         <div className={styles.box}>
  //           <label htmlFor="password" className={styles.label}>
  //             Password:{" "}
  //           </label>
  //           <input
  //             type="password"
  //             id="password"
  //             name="password"
  //             className={styles.input}
  //             value={password}
  //             onChange={(e) => setPassword(e.target.value)}
  //             required
  //           />
  //           <br />
  //         </div>
  //         <div className={styles.box}>
  //           <label htmlFor="password" className={styles.label}>
  //             Employee Id:{" "}
  //           </label>
  //           <input
  //             // type="password"
  //             // id="password"
  //             // name="password"
  //             type="text"
  //             id="employeeId"
  //             name="employeeId"
  //             className={styles.input}
  //             value={employeeId}
  //             onChange={(e) => setEmployeeId(e.target.value)}
  //             required
  //           />
  //           <br />
  //         </div>
  //         <div className={styles.buttonBox}>
  //           <button
  //             type="submit"
  //             style={{
  //               backgroundColor: "#530b0b",
  //               color: "white",
  //               padding: "10px 20px",
  //               borderRadius: "5px",
  //               border: "none",
  //               cursor: "pointer",
  //             }}
  //           >
  //             Login
  //           </button>
  //         </div>
  //       </form>
  //       <p>
  //         Dont have an account?{" "}
  //         <Link href="/employeeRegister">Register now</Link>
  //       </p>
  //     </div>
  //   </RootLayout>
  // );
  return (
    <RootLayout hideNavbar={true}>
      <div className="flex max-h-screen flex-col items-center justify-between p-24">
        <div className="bg-[#212121] p-8 rounded shadow-md w-96">
          <h1 className="text-4xl text-center font-semibold mb-8">Login</h1>
          {error && <p className={styles.error}>{error}</p>}
          <form onSubmit={handleLogin}>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
              // className={
              //   styles.input +
              //   " w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
              // }
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <input
              type="password"
              id="password"
              name="password"
              // className={
              //   styles.input +
              //   " w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
              // }
              className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <input
              type="text"
              id="employeeId"
              name="employeeId"
              // className={
              //   styles.input +
              //   " w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
              // }
              className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
              placeholder="Employee ID"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              {" "}
              Sign In
            </button>
            <p className="text-red-600 text-[16px] mb-4">{error && error}</p>
          </form>
          {/* <button
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
          onClick={() => {
            signIn("github");
          }}
        >
          Sign In with Github
        </button> */}
          <div className="text-center text-gray-500 mt-4">- OR -</div>
          <Link
            className="block text-center text-blue-500 hover:underline mt-2"
            href="/employeeRegister"
          >
            Register Here
          </Link>
        </div>
      </div>
    </RootLayout>
  );
};

export default dynamic(() => Promise.resolve(LoginPage), { ssr: false });
