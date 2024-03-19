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

  // if (sessionStatus === "loading") {
  //   return <h1>Loading...</h1>;
  // }

  return (
    <div>
      <br />
      <br />
      <fieldset
        style={{
          backgroundImage: 'url("/registration.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: 50,
        }}
        className="Form_Field"
        color="red"
      >
        {" "}
        <form className="Reg_form" onSubmit={handleSubmit}>
          <br />
          <br />
          <br />
          <br />
          <h1 className={styles.reg_heading}>Registration Form</h1>
          <br />
          <br />
          <br />
          <div className="mb-3 mt-3">
            <label htmlFor="Username" className={styles.input_label}>
              &nbsp;&nbsp;&nbsp;Username :
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <input
                type="text"
                name="Username"
                className={styles.input_box}
                placeholder="Enter your username"
                style={{ color: "black" }}
              />
            </label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label htmlFor="Customer_Longitude" className={styles.input_label}>
              &nbsp;&nbsp;&nbsp;Customer Longitude : &nbsp;&nbsp;&nbsp;
              <input
                type="text"
                placeholder="Enter Longitude"
                name="Customer_Longitude"
                className={styles.input_box}
                style={{ color: "black" }}
              />
            </label>
            <br />
            <br />
            <br />
            <label htmlFor="Password" className={styles.input_label}>
              &nbsp;&nbsp;&nbsp;Password :
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                placeholder="Enter Password"
                type="Password"
                name="Password"
                className={styles.input_box}
                style={{ color: "black" }}
              />
            </label>
            &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label htmlFor="Customer_Latitude" className={styles.input_label}>
              {" "}
              Customer_Latitude :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <input
                type="text"
                placeholder="Enter Latitude"
                name="Customer_Latitude"
                className={styles.input_box}
                style={{ color: "black" }}
              />
            </label>
            <br />
            <br />
            <br />
            <label htmlFor="Address" className={styles.input_label}>
              &nbsp;&nbsp;&nbsp;&nbsp;Address :
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="text"
                placeholder="Enter your Address"
                name="Address"
                className={styles.input_box}
                style={{ color: "black" }}
              />
            </label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label htmlFor="Email_Address" className={styles.input_label}>
              {" "}
              &nbsp;Email_Address : &nbsp;&nbsp; &nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="text"
                placeholder="Enter your Email"
                name="Email_Address"
                className={styles.input_box}
                style={{ color: "black" }}
              />
            </label>
            <br />
            <br />
            <br />
            <label htmlFor="Contact" className={styles.input_label}>
              &nbsp;&nbsp;&nbsp;Customer Contact Number :{" "}
              <input
                type="text"
                placeholder="Enter your contact number"
                name="Contact"
                className={styles.input_box}
                style={{ color: "black" }}
              />
            </label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label htmlFor="NIC" className={styles.input_label}>
              {" "}
              &nbsp;NIC : &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
              &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="text"
                name="NIC"
                placeholder="Enter your NIC"
                className={styles.input_box}
                style={{ color: "black" }}
              />
            </label>
            <br />
            <br />
            <br />
            <br />
          </div>
          <div>
            &nbsp;&nbsp;&nbsp;
            <button
              type="submit"
              className={styles.button}
              onClick={() => handleClick()}
            >
              Register
            </button>
            <p className="text-red-600 text-[16px] mb-4">{error && error}</p>
          </div>
          <br />
          <br />
          <br />
          <br />
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
