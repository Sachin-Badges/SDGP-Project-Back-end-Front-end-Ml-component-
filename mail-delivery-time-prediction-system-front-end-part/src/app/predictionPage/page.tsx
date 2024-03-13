"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import RootLayout from "../layout";
import Navbar from "@/components/navbar/Navbar";
import styles from "../styles/Home.module.css";
import Swal from "sweetalert2";

const PredictionPage = () => {
  const handleClick = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Email has been sent",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const [deliveryTime, setDeliveryTime] = useState("");

  interface Prediction {
    email_id: string;
    sender_address: string;
    sender_name: string;
    delivery_person_name: string;
    delivery_person_contact: string;
    received_date: string;
    prediction_time: string;
  }

  const [predictionData, setPredictionData] = useState<Prediction>({
    email_id: "",
    sender_address: "",
    sender_name: "",
    delivery_person_name: "",
    delivery_person_contact: "",
    received_date: "",
    prediction_time: "",
  });

  // Load user email from localStorage
  useEffect(() => {
    // Load user email from localStorage
    const userData =
      typeof window !== "undefined" ? localStorage.getItem("email") : null;
    if (userData) {
      const email = userData;
      setPredictionData((prevState) => ({
        ...prevState,
        email_id: email,
      }));
    }
  }, []);

  useEffect(() => {
    // Extract delivery time from query parameters
    const queryParams = new URLSearchParams(window.location.search);
    const deliveryTimeParam = queryParams.get("deliveryTime");
    if (deliveryTimeParam) {
      setDeliveryTime(deliveryTimeParam);
      setPredictionData((prevState) => ({
        ...prevState,
        prediction_time: deliveryTimeParam,
      }));
    }
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPredictionData({ ...predictionData, [name]: value });
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:5000/delivery/createPrediction",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(predictionData),
        }
      );
      const data = await response.json();
      console.log(data);
      // Reset form after successful submission
      setPredictionData({
        email_id: "",
        sender_address: "",
        sender_name: "",
        delivery_person_name: "",
        delivery_person_contact: "",
        received_date: "",
        prediction_time: "",
      });
      window.location.href = "/employeePage";
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <RootLayout hideNavbar={true}>
      <section className="lg:py-16">
        <h1 className="text-black text-2xl font-bold mb-4">
          Predicted Delivery Time: {deliveryTime}
        </h1>
        <div className="mt-4 mx-auto bg-white p-4 rounded-md shadow-md flex flex-col items-center max-w-30">
          <form
            onSubmit={handleFormSubmit}
            className="w-full grid grid-cols-2 gap-4"
          >
            <label
              htmlFor="email_id"
              className="text-black col-span-1 font-bold"
            >
              Email ID:
            </label>
            <input
              type="text"
              id="email_id"
              name="email_id"
              placeholder="Enter Email ID"
              value={predictionData.email_id}
              onChange={handleInputChange}
              className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 col-span-1"
            />

            <label
              htmlFor="sender_address"
              className="text-black col-span-1 font-bold"
            >
              Sender Address:
            </label>
            <input
              type="text"
              id="sender_address"
              name="sender_address"
              placeholder="Enter Sender Address"
              value={predictionData.sender_address}
              onChange={handleInputChange}
              className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 col-span-1"
            />

            <label
              htmlFor="sender_name"
              className="text-black col-span-1 font-bold"
            >
              Sender Name:
            </label>
            <input
              type="text"
              id="sender_name"
              name="sender_name"
              placeholder="Enter Sender Name"
              value={predictionData.sender_name}
              onChange={handleInputChange}
              className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 col-span-1"
            />

            <label
              htmlFor="delivery_person_name"
              className="text-black col-span-1 font-bold"
            >
              Delivery Person Name:
            </label>
            <input
              type="text"
              id="delivery_person_name"
              name="delivery_person_name"
              placeholder="Enter Delivery Person Name"
              value={predictionData.delivery_person_name}
              onChange={handleInputChange}
              className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 col-span-1"
            />

            <label
              htmlFor="delivery_person_contact"
              className="text-black col-span-1 font-bold"
            >
              Delivery Person Contact:
            </label>
            <input
              type="text"
              id="delivery_person_contact"
              name="delivery_person_contact"
              placeholder="Enter Delivery Person Contact"
              value={predictionData.delivery_person_contact}
              onChange={handleInputChange}
              className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 col-span-1"
            />

            <label
              htmlFor="received_date"
              className="text-black col-span-1 font-bold"
            >
              Received Date:
            </label>
            <input
              type="date"
              id="received_date"
              name="received_date"
              placeholder="Enter Received Date"
              value={predictionData.received_date}
              onChange={handleInputChange}
              className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 col-span-1"
            />

            <label
              htmlFor="prediction_time"
              className="text-black col-span-1 font-bold"
            >
              Prediction Time:
            </label>
            <input
              type="text"
              id="prediction_time"
              name="prediction_time"
              placeholder="Enter Prediction Time"
              value={predictionData.prediction_time}
              onChange={handleInputChange}
              className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 col-span-1"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-md focus:outline-none col-span-2 self-center mt-4"
              onClick={handleClick}
              style={{ fontSize: "1.2rem" }}
            >
              Submit Details
            </button>
          </form>
        </div>
      </section>
    </RootLayout>
  );
};

export default PredictionPage;
