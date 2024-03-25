// pages/EmployeeAlert.tsx
"use client";
// components/EmailForm.tsx
import RootLayout from "../layout";
import React, { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import Navbar from "../employeePage/employeeNavbar/Navbar";

const EmailForm = () => {
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
    <div>
      <h1 className="text-4xl font-bold mb-8">Alert</h1>
      <p className="text-white-700 mb-6">
        Customers should be alerted about mail delivery times to manage their
        expectations, plan their schedules effectively, and maintain flexibility
<<<<<<< Updated upstream
        in receiving important packages. Such alerts not only enhance customer
        satisfaction by demonstrating proactive communication and consideration
        for their convenience but also enable prompt problem resolution in case
        of delays or issues with the delivery. By providing accurate information
        and building trust through transparent communication, companies can
        foster positive relationships with their customers and uphold a high
        standard of service quality.
=======
        in receiving important packages. So the System Notifies it through mail delivery time prediction.Use this imergency alert box to send imergency mail about 
        delivery Delays because of wheather or any other emergency
>>>>>>> Stashed changes
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="Email_Address"
          className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
          placeholder="Email"
          required
        />
        <textarea
          name="Message"
          className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
          placeholder="Message"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
        <p className="text-red-600 text-[16px] mb-4">{error && error}</p>
      </form>
    </div>
    </RootLayout>
  );
};

export default EmailForm;
