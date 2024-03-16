"use client";
// EmployeePage component
import React, { useState, useEffect } from "react";
import Image from "next/image";
import RootLayout from "../layout";
import Navbar from "./employeeNavbar/Navbar";
import styles from "../home.module.css";
import Link from "next/link";
import dynamic from "next/dynamic";

const EmployeePage = () => {
  interface User {
    email: string;
    password: string;
    address: string;
    mobile: string;
    latitude: string;
    longitude?: string;
    createdAt?: string;
    updatedAt?: string;
  }

  const handleClick = (latitude: string, longitude: string, email: string) => {
    localStorage.setItem("email", email);
    window.location.href = `/deliveryPage?latitude=${latitude}&longitude=${longitude}`;
  };

  // State to hold the search input
  const [searchInput, setSearchInput] = useState("");

  // State to hold search results
  const [searchResults, setSearchResults] = useState<User[]>([]);

  // Handle search input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  // Handle search submit
  const handleSearchSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Make the API call
    try {
      const response = await fetch(
        `http://localhost:5000/users/search?address=${searchInput}`
      );
      const data = await response.json();
      setSearchResults(data);
      console.log(data); // Log the data to see what's received
    } catch (error) {
      console.error("Error fetching data:", error);
      setSearchResults([]); // Clear results on error
    }

    // Clear the search input after submitting
    setSearchInput("");
  };

  return (
    <RootLayout hideNavbar={true}>
      <Navbar />
      <section className="lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <div className="col-span-12 place-self-start">
            <div className="flex items-center">
              <h1
                className={`font-extrabold text-4xl sm:text-5xl lg:text-8xl lg:leading-normal relative ${styles.textLightBlueDarkBlue} ${styles.textOutlineWhite}`}
              >
                Mail
                <br />
                Delivery
                <br />
                Time Prediction System
              </h1>

              {/* Image right next to the text */}
              <div className="ml-4 rounded-full bg-[#181818] w-[626px] h-[481px] relative">
                <Image
                  src={"/Employee1.png"}
                  alt="employee image"
                  className="object-cover rounded-full w-full h-full"
                  layout="fill"
                />
              </div>
            </div>

            {/* Container for the search bar, additional image, and paragraph */}
            <div className="mt-4 mx-auto bg-white p-4 rounded-md shadow-md flex flex-col items-center max-w-30">
              {/* Highlighted Paragraph */}
              <p className={`text-lg text-gray-700 mb-4 ${styles.boldText}`}>
                Enter the Address of The letter receiver to find the Receiver
                Account
              </p>

              {/* Search Bar and Icon Container */}
              <div className="relative flex items-center">
                <form onSubmit={handleSearchSubmit}>
                  <input
                    type="text"
                    placeholder="Enter receiver address here"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4 bg-gray-800 text-white"
                    value={searchInput}
                    onChange={handleInputChange}
                  />
                  <button type="submit">
                    <Image
                      src={"/search1.png"}
                      alt="search icon"
                      className="absolute right-1 top-1/2 transform -translate-y-1/2"
                      width={30}
                      height={30}
                    />
                  </button>
                </form>
              </div>

              <div style={{ marginTop: "20px" }}>
                {searchResults.map((user, index) => (
                  <li
                    key={index}
                    style={{
                      backgroundColor: "#f0f0f0", // Lighter background
                      color: "black", // Black font color
                      padding: "10px",
                      margin: "10px 0",
                      borderRadius: "5px",
                      fontSize: "16px",
                      lineHeight: "1.5",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Softer shadow
                      cursor: "pointer", // Change cursor to pointer for better UX
                    }}
                    onClick={() =>
                      handleClick(
                        user.latitude,
                        user.longitude ?? "15.25",
                        user.email
                      )
                    }
                  >
                    <div>Email: {user.email}</div>
                    <div>Address: {user.address}</div>
                    <div>Mobile: {user.mobile}</div>
                    <div>Latitude: {user.latitude}</div>
                    <div>Longitude: {user.longitude}</div>
                    {/* Optionally display createdAt and updatedAt */}
                    {user.createdAt && <div>Created At: {user.createdAt}</div>}
                    {user.updatedAt && <div>Updated At: {user.updatedAt}</div>}
                  </li>
                ))}
                : (
                <p
                  style={{
                    color: "black",
                    fontSize: "16px",
                    textAlign: "center",
                  }}
                >
                  No users found.
                </p>
                )
              </div>

              {/* Additional Image right next to the search bar */}
              <div className="mt-4 rounded-full bg-[#181818] w-[500px] h-[500px] relative">
                <Image
                  src={"/Employee2.jpg"}
                  alt="additional image"
                  className="object-cover rounded-full w-full h-full"
                  layout="fill"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </RootLayout>
  );
};

export default dynamic(() => Promise.resolve(EmployeePage), { ssr: false });
