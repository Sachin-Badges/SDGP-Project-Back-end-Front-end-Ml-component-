"use client";
import { useEffect, useState } from "react";
import RootLayout from "../layout";
import Navbar from "../customerPage/customerNavbar/Navbar";
import Image from "next/image";
import img3 from "../../../public/details.png";
import img4 from "../../../public/profile02.png";
import img2 from "../../../public/image2.jpg";

import axios from "axios";

interface UserDetail {
  _id: string;
  email_id: string;
  password: string;
  address: string;
  mobile: string;
  longitude: string;
  latitude: string;
  createdAt: string;
  updatedAt: string;
}

const ProfilePage = () => {
  const [userDetail, setUserDetails] = useState<UserDetail[]>([]);

  useEffect(() => {
    // Get user email from local storage
    const userData =
      typeof window !== "undefined" ? localStorage.getItem("user") : null;
    if (userData) {
      const { email } = JSON.parse(userData);
      // Fetch prediction details using the user's email
      fetchAllUserDetails(email);
    }
  }, []);

  // Fetch all prediction details from the backend
  // Fetch all prediction details from the backend
  const fetchAllUserDetails = async (email: string) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/users/searchByEmail?email=${email}`
      ); // Use backticks for string interpolation
      setUserDetails(response.data);
    } catch (error) {
      console.error("Error fetching prediction details:", error);
    }
  };
  return (
    <RootLayout hideNavbar={true}>
      <Navbar />
      <section>
        <div className="banner flex items-center">
          <div className="w-full md:w-1/2">
            <Image src={img3} alt="sample.img" />
          </div>
          <div className="bannerText text-left ml-5 w-full md:w-1/2">
            <h1 className="main text-4xl font-bold">
              The Mail Delivery Time Prediction System
            </h1>
            <p className="description text-lg">
              You can view all of the relevant details linked with the email you
              received. Explore detailed information such as the sender&apos;s
              name, delivery date, and any further details. This allows you to
              find important information about your mails even before they reach
              your door.
            </p>
          </div>
        </div>

        <div className="pl-5 pr-6 md:pl-10 bg-white ">
          <form className="flex flex-col justify-center items-center gap-5">
            {userDetail.map((user) => (
              <div key={user._id} className="flex flex-col gap-4">
                <div className="flex items-center justify-center">
                  <svg
                    className="w-24 text-white"
                    data-slot="icon"
                    fill="none"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    ></path>
                  </svg>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="username"
                    className="text-black font-bold text-2xl"
                  >
                    Username:
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={user.email_id}
                    className="input rounded bg-gray-300 text-black font-bold pl-3"
                    readOnly
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="address"
                    className="text-black font-bold text-2xl"
                  >
                    Address:
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={user.address}
                    className="input rounded bg-gray-300 text-black font-bold pl-3"
                    readOnly
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="longitude"
                    className="text-black font-bold text-2xl"
                  >
                    Longitude:
                  </label>
                  <input
                    type="text"
                    id="longitude"
                    name="longitude"
                    value={user.longitude}
                    className="input rounded bg-gray-300 text-black font-bold pl-3"
                    readOnly
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="latitude"
                    className="text-black font-bold text-2xl"
                  >
                    Latitude:
                  </label>
                  <input
                    type="text"
                    id="latitude"
                    name="latitude"
                    value={user.latitude}
                    className="input rounded bg-gray-300 text-black font-bold pl-3"
                    readOnly
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contactNumber"
                    className="text-black font-bold text-2xl"
                  >
                    Contact Number:
                  </label>
                  <input
                    type="text"
                    id="contactNumber"
                    name="contactNumber"
                    value={user.mobile}
                    className="input rounded bg-gray-300 text-black font-bold pl-3"
                    readOnly
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contactNumber"
                    className="text-black font-bold text-2xl"
                  >
                    Registered Date:
                  </label>
                  <input
                    type="text"
                    id="registerDate"
                    name="registerDate"
                    value={user.createdAt}
                    className="input rounded bg-gray-300 text-black font-bold pl-3"
                    readOnly
                  />
                </div>
              </div>
            ))}
          </form>
        </div>
      </section>
    </RootLayout>
  );
};

export default ProfilePage;
