"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import RootLayout from "../layout";
import Navbar from "@/components/navbar/Navbar";
import styles from "../styles/Home.module.css";

const PredictionPage = () => {
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="email_id" className="text-black font-bold">
                Email ID:
              </label>
              <input
                type="text"
                id="email_id"
                name="email_id"
                placeholder="Enter Email ID"
                value={predictionData.email_id}
                onChange={handleInputChange}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="sender_address" className="text-black font-bold">
                Sender Address:
              </label>
              <input
                type="text"
                id="sender_address"
                name="sender_address"
                placeholder="Enter Sender Address"
                value={predictionData.sender_address}
                onChange={handleInputChange}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="sender_name" className="text-black font-bold">
                Sender Name:
              </label>
              <input
                type="text"
                id="sender_name"
                name="sender_name"
                placeholder="Enter Sender Name"
                value={predictionData.sender_name}
                onChange={handleInputChange}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="delivery_person_name"
                className="text-black font-bold"
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
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="delivery_person_contact"
                className="text-black font-bold"
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
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="received_date" className="text-black font-bold">
                Received Date:
              </label>
              <input
                type="text"
                id="received_date"
                name="received_date"
                placeholder="Enter Received Date"
                value={predictionData.received_date}
                onChange={handleInputChange}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="prediction_time" className="text-black font-bold">
                Prediction Time:
              </label>
              <input
                type="text"
                id="prediction_time"
                name="prediction_time"
                placeholder="Enter Prediction Time"
                value={predictionData.prediction_time}
                onChange={handleInputChange}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none"
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
