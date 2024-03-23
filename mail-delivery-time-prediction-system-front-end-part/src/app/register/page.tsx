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

const Register = () => {
  const handleClick = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "You have successfully registered",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const [error, setError] = useState("");
  const router = useRouter();

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("Email_Address") as string;
    const password = formData.get("Password") as string;
    const address = formData.get("Address") as string;
    const mobile = formData.get("Contact") as string;
    const latitude = formData.get("Customer_Latitude") as string;
    const longitude = formData.get("Customer_Longitude") as string;

    try {
      const res = await fetch("http://localhost:5000/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          address,
          mobile,
          latitude,
          longitude,
        }),
      });
      if (res.status === 400) {
        setError("This email is already registered");
      }
      if (res.status === 201) {
        setError("");
        router.push("/login");
      }
    } catch (error) {
      setError("Error, try again");
      console.log(error);
    }
  };

  return (
    <div>
      <br />
      <br />
      <fieldset
        className={`bg-white bg-opacity-5 border border-silver p-4 rounded-lg `}
      >
        <form className="Reg_form" onSubmit={handleSubmit}>
          <h1 className={styles.reg_heading}>Registration Form</h1>
          <div className="flex flex-wrap justify-between pt-10">
            <div className="w-full mb-4 md:w-1/2 md:pr-2">
              <label htmlFor="Username" className="text-white">
                Username:
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                name="Username"
                className={`bg-white bg-opacity-5 border border-silver rounded-lg px-3 py-2 w-full `}
              />
            </div>
            <div className="w-full mb-4 md:w-1/2 md:pl-2">
              <label htmlFor="Customer_Longitude" className="text-white">
                Customer Longitude:
              </label>
              <input
                type="text"
                placeholder="Enter Longitude"
                name="Customer_Longitude"
                className={`bg-white bg-opacity-5 border border-silver rounded-lg px-3 py-2 w-full `}
              />
            </div>
            <div className="w-full mb-4 md:w-1/2 md:pr-2">
              <label htmlFor="Password" className="text-white">
                Password:
              </label>
              <input
                placeholder="Enter Password"
                type="password"
                name="Password"
                className={`bg-white bg-opacity-5 border border-silver rounded-lg px-3 py-2 w-full `}
              />
            </div>
            <div className="w-full mb-4 md:w-1/2 md:pl-2">
              <label htmlFor="Customer_Latitude" className="text-white">
                Customer Latitude:
              </label>
              <input
                placeholder="Enter Latitude"
                type="text"
                name="Customer_Latitude"
                className={`bg-white bg-opacity-5 border border-silver rounded-lg px-3 py-2 w-full `}
              />
            </div>
            <div className="w-full mb-4">
              <label htmlFor="Address" className="text-white">
                Address:
              </label>
              <input
                placeholder="Enter your Address"
                type="text"
                name="Address"
                className={`bg-white bg-opacity-5 border border-silver rounded-lg px-3 py-2 w-full `}
              />
            </div>
            <div className="w-full mb-4">
              <label htmlFor="Email_Address" className="text-white">
                Email Address:
              </label>
              <input
                placeholder="Enter your Email"
                type="text"
                name="Email_Address"
                className={`bg-white bg-opacity-5 border border-silver rounded-lg px-3 py-2 w-full `}
              />
            </div>
            <div className="w-full mb-4 md:w-1/2 md:pr-2">
              <label htmlFor="Contact" className="text-white">
                Customer Contact Number:
              </label>
              <input
                placeholder="Enter your contact number"
                type="text"
                name="Contact"
                className={`bg-white bg-opacity-5 border border-silver rounded-lg px-3 py-2 w-full `}
              />
            </div>
            <div className="w-full mb-4 md:w-1/2 md:pl-2">
              <label htmlFor="NIC" className="text-white">
                NIC:
              </label>
              <input
                placeholder="Enter your NIC"
                type="text"
                name="NIC"
                className={`bg-white bg-opacity-5 border border-silver rounded-lg px-3 py-2 w-full `}
              />
            </div>
          </div>
          <div className=" text-[16px] mb-4">{error && error}</div>
          <button
            type="submit"
            className={`bg-white bg-opacity-5 border border-silver rounded-lg px-3 py-2 `}
            onClick={handleClick}
          >
            Register
          </button>
        </form>
      </fieldset>

      <br />
      <br />
      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.heading}>
            <h1>Post Office Online Services</h1>
          </div>
          <br />
          <p className={styles.para}>
            Post office online services have revolutionized the way people
            interact with postal systems, offering convenience, efficiency, and
            accessibility like never before. With the advent of digital
            technology, traditional postal services have evolved to meet the
            demands of the modern era. Here&apos;s a glimpse into the world of
            post office online services. First and foremost, online services
            streamline postal activities, enabling customers to perform various
            tasks from the comfort of their homes or offices. Whether it&apos;s
            purchasing stamps, scheduling package pickups, or tracking
            deliveries, the digital platform offers a user-friendly interface
            that simplifies the entire process. Moreover, post office online
            services enhance accessibility for individuals with physical
            disabilities or those residing in remote areas. With just a few
            clicks, customers can access postal services without the need to
            visit a physical location, breaking down barriers to participation
            and ensuring inclusivity. Additionally, the online platform expands
            the reach of postal services beyond geographical boundaries.
            Customers can send mail internationally, explore shipping options,
            and access a wealth of information regarding postal regulations and
            requirements, all at their fingertips.
          </p>
          <br />
          <br />
          <button type="submit" className={styles.button2}>
            See more
          </button>
          <br />
          <br />
        </div>
        <div className={styles.col}>
          <div
            style={{
              backgroundImage: 'url("/img1d.jpg")',
              width: "600px",
              height: "250px",
              display: "inline-block",
              borderRadius: "10px",
              padding: "15px 25px",
              boxSizing: "border-box",
              cursor: "pointer",
              margin: "10px 15px",
              backgroundPosition: "center",
              backgroundSize: "cover",
              transform: "translateY(-10px)",
              transition: "transform 0.5s",
            }}
          >
            <h5 className={styles.h5}>Tracking Packages</h5>
            <p>
              Tracking packages through post office online services has become a
              cornerstone of modern logistics, providing customers with
              real-time visibility and peace of mind throughout the delivery
              process.Online package tracking allows customers to monitor the
              status and location of their shipments at any given time. By
              entering a unique tracking number provided upon shipment.
            </p>
            <br />
            <button type="submit" className={styles.button2}>
              See more
            </button>
          </div>

          <div
            style={{
              backgroundImage: 'url("/img4d.jpg")',
              width: "600px",
              height: "250px",
              display: "inline-block",
              borderRadius: "10px",
              padding: "15px 25px",
              boxSizing: "border-box",
              cursor: "pointer",
              margin: "10px 15px",
              backgroundPosition: "center",
              backgroundSize: "cover",
              transition: "transform 0.55s",
            }}
          >
            <h5 className={styles.h5}>PO Box Management</h5>
            <p>
              PO Box management through post office online services offers
              convenience and efficiency for users, simplifying the process of
              accessing and organizing mail.Users can apply for a PO Box or
              renew their existing subscription through the post office&apos;s
              website. This eliminates the need for physical paperwork and
              allows for a seamless application process from anywhere with an
              internet connection.
            </p>
            <br />
            <button type="submit" className={styles.button2}>
              See more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
