"use client";
// EmployeePage component
import React, { useState, useEffect } from "react";
import Image from "next/image";
import RootLayout from "../layout";
import Navbar from "./employeeNavbar/Navbar";
import styles from "../home.module.css";
import Link from "next/link";
import dynamic from "next/dynamic";

const DynamicNavbar = dynamic(
  () => import("../employeePage/employeeNavbar/Navbar"),
  {
    loading: () => null, // Placeholder while Navbar is loading
    ssr: false, // Disable server-side rendering for the Navbar component
  }
);

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

  const handleClick = (latitude: string, longitude: string) => {
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
      <DynamicNavbar />
      <section className="lg:py-16">
        <div className="sm:grid-cols-12">
          <div className="col-span-12 place-self-start">
            <div className="flex items-center">
              <h1
                className={`font-extrabold text-1xl sm:text-3xl lg:text-8xl lg:leading-normal relative ${styles.textLightBlueDarkBlue} ${styles.textOutlineWhite}`}
              >
                Welcome to Employee Page!{" "}
              </h1>
            </div>
            {/* <div className="flex items-center">
              <h1 className={`font-extrabold text-4xl sm:text-5xl lg:text-8xl lg:leading-normal relative ${styles.textLightBlueDarkBlue} ${styles.textOutlineWhite}`}>
                Mail<br />Delivery<br />Time Prediction System
              </h1>
              <div className="ml-4 rounded-full bg-[#181818] w-[626px] h-[481px] relative">
                <Image
                  src={"/Employee1.png"}
                  alt="employee image"
                  className="object-cover rounded-full w-full h-full"
                  layout="fill"
                />
              </div>
            </div> */}

            {/* Container for the search bar, additional image, and paragraph */}
            <div className="mt-16 mx-auto bg-white p-4 rounded-md shadow-md flex flex-col items-center max-w-30">
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
                    className="w-full px-36 py-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4 bg-gray-800 text-white"
                    value={searchInput}
                    onChange={handleInputChange}
                  />
                  {/* <button type="submit">
                    <Image
                      src={"/search1.png"}
                      alt="search icon"
                      className="absolute right-4 top-1/2 transform -translate-y-1/2"
                      width={30}
                      height={30}
                    />
                  </button> */}
                  <button
                    type="submit"
                    className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-4 rounded-md flex absolute right-1 top-1/2 transform -translate-y-1/2"
                  >
                    {/* <Image
                      src="/search1.png"
                      alt="search icon"
                      className="absolute right-4 top-1/2 transform -translate-y-1/2"
                      width={30}
                      height={30}
                    /> */}
                    Search
                  </button>
                </form>
              </div>

              <div className="mt-20">
                {searchResults.length > 0 ? (
                  searchResults.map((user, index) => (
                    <li
                      key={index}
                      className="bg-gray-200 text-black p-4 my-4 rounded-lg text-base leading-6 shadow-md cursor-pointer"
                      onClick={() =>
                        handleClick(user.latitude, user.longitude ?? "15.25")
                      }
                    >
                      <div>Email: {user.email}</div>
                      <div>Address: {user.address}</div>
                      <div>Mobile: {user.mobile}</div>
                      <div>Latitude: {user.latitude}</div>
                      <div>Longitude: {user.longitude}</div>
                      {user.createdAt && (
                        <div>Created At: {user.createdAt}</div>
                      )}
                      {user.updatedAt && (
                        <div>Updated At: {user.updatedAt}</div>
                      )}
                    </li>
                  ))
                ) : (
                  <p className="text-black text-base text-center">
                    No users found.
                  </p>
                )}
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

export default EmployeePage;
