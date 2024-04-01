// pages/EmployeeAlert.tsx
"use client";
// components/EmailForm.tsx
import RootLayout from "../layout";
import React, { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import Navbar from "../employeePage/employeeNavbar/Navbar";
import dynamic from "next/dynamic";

const AlertForm = () => {
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("Email_Address") as string;
    const message = formData.get("Message") as string;

    try {
      const response = await axios.post("http://localhost:5000/alert", {
        email,
        message,
      });

      // Display success message
      Swal.fire({
        title: "Alert Title",
        icon: "info",
        text: "Your message has been submitted successfully!",
        confirmButtonText: "OK",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setError("An error occurred while submitting the form");
    }

    // Display alert title
    Swal.fire({
      title: "Alert Title",
      icon: "info",
      text: "Your message has been submitted successfully!",
      confirmButtonText: "OK",
    });
  };

  return (
    <RootLayout hideNavbar={true}>
      <Navbar />
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">
          Alerts
        </h1>

        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          If, for any reason, employees are unable to deliver mail within the
          predicted timeframe, they can send an alert to the customers.
          Additionally, if there are any important notices, the employees can
          send alerts to the customers to keep them informed about any updates.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="Email_Address"
            className="w-full border border-gray-300 text-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-400"
            placeholder="Email"
            required
          />
          <textarea
            name="Message"
            className="w-full border border-gray-300 text-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-400"
            placeholder="Message"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
          {error && <p className="text-red-600 text-sm">{error}</p>}
        </form>
      </div>
    </RootLayout>
  );
};

export default dynamic(() => Promise.resolve(AlertForm), { ssr: false });
