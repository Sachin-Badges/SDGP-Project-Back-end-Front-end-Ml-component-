"use client";
import { useEffect, useState } from "react";
import RootLayout from "../layout";
import Navbar from "../customerPage/customerNavbar/Navbar";
import Image from "next/image";
import axios from "axios";
import img3 from "../../../public/details.png";

const ProfilePage = () => {
  const [userData, setUserData] = useState({
    email_id: "",
    address: "",
    mobile: "",
    longitude: "",
    latitude: "",
  });

  useEffect(() => {
    // Get user email from local storage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const { email } = JSON.parse(storedUser);
      // Fetch user details using the email
      fetchUserDetails(email);
    }
  }, []);

  const fetchUserDetails = async (email: any) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/users/searchByEmail?email=${email}`
      );
      const userData = response.data[0];
      setUserData(userData);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  return (
    <RootLayout hideNavbar={true}>
      <Navbar />

      <div className="flex justify-center">
        <div className="w-full md:w-1/2 pr-5">
          <div className="bg-white bg-opacity-5 border border-silver p-4 rounded-lg">
            <div className="flex items-center justify-center mb-5">
              {/* <svg className="w-24 text-white" data-slot="icon" fill="none" strokeWidth="2.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"> */}
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                ></path>
              </svg>
            </div>
            <form className="max-w-md">
              <div className="pb-5">
                <label
                  htmlFor="username"
                  className="label text-black font-bold text-2xl"
                >
                  Username :
                </label>
                <input
                  type="text"
                  name="username"
                  value={userData.email_id}
                  className="input rounded bg-transparent border-b border-gray-300 w-full"
                  readOnly
                />
              </div>

              <div className="pb-5">
                <label
                  htmlFor="address"
                  className="label text-black font-bold text-2xl"
                >
                  Address :
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={userData.address}
                  className="input rounded bg-transparent border-b border-gray-300 w-full"
                  readOnly
                />
              </div>

              <div className="pb-5">
                <label
                  htmlFor="mobile"
                  className="label text-black font-bold text-2xl"
                >
                  Contact Number :
                </label>
                <input
                  type="text"
                  id="mobile"
                  name="mobile"
                  value={userData.mobile}
                  className="input rounded bg-transparent border-b border-gray-300 w-full"
                  readOnly
                />
              </div>

              <div className="pb-5">
                <label
                  htmlFor="longitude"
                  className="label text-black font-bold text-2xl"
                >
                  Longitude :
                </label>
                <input
                  type="text"
                  id="longitude"
                  name="longitude"
                  value={userData.longitude}
                  className="input rounded bg-transparent border-b border-gray-300 w-full"
                  readOnly
                />
              </div>

              <div className="pb-5">
                <label
                  htmlFor="latitude"
                  className="label text-black font-bold text-2xl"
                >
                  Latitude :
                </label>
                <input
                  type="text"
                  id="latitude"
                  name="latitude"
                  value={userData.latitude}
                  className="input rounded bg-transparent border-b border-gray-300 w-full"
                  readOnly
                />
              </div>
            </form>
          </div>
        </div>
        <div className="w-full md:w-1/2 pl-5">
          <div className="banner flex items-center">
            <div className="w-full md:w-1/2">
              <Image src={img3} alt="sample.img" />
            </div>
            <div className="bannerText text-left ml-5 w-full md:w-1/2">
              <h1 className="main text-4xl font-bold">
                The Mail Delivery Time Prediction System
              </h1>
              <p className="description text-lg">
                You can view all of the relevant details linked with the email
                you received. Explore detailed information such as the sender's
                name, delivery date, and any further details. This allows you to
                find important information about your mails even before they
                reach your door.
              </p>
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default ProfilePage;
