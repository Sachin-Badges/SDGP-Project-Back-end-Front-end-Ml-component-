"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./register.module.css";
import Link from "next/link";
import { CgEnter } from "react-icons/cg";
import { Covered_By_Your_Grace } from "next/font/google";
import { transform } from "next/dist/build/swc";
import Swal from "sweetalert2";

const EmployeeRegister = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleClick = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this details!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Registered!",
          text: "Your have registered successfully!.",
          icon: "success",
        });
      }
    });
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("Email_Address") as string;
    const password = formData.get("Password") as string;
    const employeeId = formData.get("EmployeeId") as string;
    const mobile = formData.get("Contact") as string;

    try {
      const res = await fetch("http://localhost:5000/employees/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          employeeId,
          mobile,
        }),
      });
      if (res.status === 400) {
        setError("This email is already registered");
      }
      if (res.status === 201) {
        setError("");
        router.push("/employeeLogin");
      }
    } catch (error) {
      setError("Error, try again");
      console.log(error);
    }
  };

  //   const [error, setError] = useState("");
  //   const router = useRouter();

  //   const isValidEmail = (email: string) => {
  //     const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  //     return emailRegex.test(email);
  //   };
  //   const handleSubmit = async (e: any) => {
  //     e.preventDefault();
  //     const email = e.target[0].value;
  //     const password = e.target[1].value;
  //     const address = e.target[2].value;
  //     const mobile = e.target[3].value;
  //     const latitude = e.target[4].value;
  //     const longitude = e.target[5].value;

  //     if (!isValidEmail(email)) {
  //       setError("Email is invalid");
  //       return;
  //     }

  //     if (!password || password.length < 8) {
  //       setError("Password is invalid");
  //       return;
  //     }

  //     try {
  //       const res = await fetch("/api/register", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           email,
  //           password,
  //           address,
  //           mobile,
  //           latitude,
  //           longitude,
  //         }),
  //       });
  //       if (res.status === 400) {
  //         setError("This email is already registered");
  //       }
  //       if (res.status === 200) {
  //         setError("");
  //         router.push("/login");
  //       }
  //     } catch (error) {
  //       setError("Error, try again");
  //       console.log(error);
  //     }
  //   };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-[#212121] p-8 rounded shadow-md w-96">
        <h1 className="text-4xl text-center font-semibold mb-8">Register</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="Email_Address"
            className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
            placeholder="Email"
            required
          />
          <input
            type="password"
            name="Password"
            className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
            placeholder="Password"
            required
          />

          <input
            type="text"
            name="EmployeeId"
            className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
            placeholder="Employee Id"
            required
          />
          <input
            type="text"
            name="Contact"
            className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
            placeholder="Telephone"
            required
          />

          {/* <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            {" "}
            Register
          </button> */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            // onClick={() => handleClick()}
          >
            {" "}
            Register
          </button>
          <p className="text-red-600 text-[16px] mb-4">{error && error}</p>
        </form>
        <div className="text-center text-gray-500 mt-4">- OR -</div>
        <Link
          className="block text-center text-blue-500 hover:underline mt-2"
          href="/login"
        >
          Login with an existing account
        </Link>
      </div>
    </div>
  );
};

export default EmployeeRegister;
