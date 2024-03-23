"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import RootLayout from "../layout";
import Navbar from "../customerPage/customerNavbar/Navbar";
import dynamic from "next/dynamic";

interface PredictionDetail {
  _id: string;
  email_id: string;
  sender_address: string;
  sender_name: string;
  delivery_person_name: string;
  delivery_person_contact: string;
  received_date: string;
  prediction_time: string;
  createdAt: string;
  updatedAt: string;
}
const DynamicNavbar = dynamic(
  () => import("../customerPage/customerNavbar/Navbar"),
  {
    loading: () => null, // Placeholder while Navbar is loading
    ssr: false, // Disable server-side rendering for the Navbar component
  }
);

const MailBox = () => {
  const [predictionDetail, setPredictionDetails] = useState<PredictionDetail[]>(
    []
  );

  useEffect(() => {
    // Get user email from local storage
    const userData =
      typeof window !== "undefined" ? localStorage.getItem("user") : null;
    if (userData) {
      const { email } = JSON.parse(userData);
      // Fetch prediction details using the user's email
      fetchAllPredictionDetails(email);
    }
  }, []);

  // Fetch all prediction details from the backend
  // Fetch all prediction details from the backend
  const fetchAllPredictionDetails = async (email: string) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/delivery/search?email=${email}`
      ); // Use backticks for string interpolation
      setPredictionDetails(response.data);
    } catch (error) {
      console.error("Error fetching prediction details:", error);
    }
  };

  return (
    <RootLayout hideNavbar={true}>
      <DynamicNavbar />
      <section className="lg:py-16">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-red-950 text-white">
              <tr>
                <th scope="col" className="p-3">
                  Email ID
                </th>
                <th scope="col" className="p-3">
                  Sender
                  <br /> Address
                </th>
                <th scope="col" className="p-3">
                  Sender Name
                </th>
                <th scope="col" className="p-3">
                  Delivery Person Name
                </th>
                <th scope="col" className="p-3">
                  Delivery Person Contact
                </th>
                <th scope="col" className="p-3">
                  Received Date
                </th>
                <th scope="col" className="p-3">
                  Prediction Time
                </th>
                <th scope="col" className="p-3">
                  Created
                  <br /> At
                </th>
                <th scope="col" className="p-3">
                  Updated
                  <br /> At
                </th>
              </tr>
            </thead>
            <tbody className="bg-red-100 divide-y divide-gray-200">
              {predictionDetail.map((prediction) => (
                <tr key={prediction._id} className="py-4">
                  <td className="text-sm text-black p-3">
                    {prediction.email_id}
                  </td>
                  <td className="text-sm text-black p-3">
                    {prediction.sender_address}
                  </td>
                  <td className="text-sm text-black p-3">
                    {prediction.sender_name}
                  </td>
                  <td className="text-sm text-black p-3">
                    {prediction.delivery_person_name}
                  </td>
                  <td className="text-sm text-black p-3">
                    {prediction.delivery_person_contact}
                  </td>
                  <td className="text-sm text-black p-3">
                    {prediction.received_date}
                  </td>
                  <td className="text-sm text-black pl-6">
                    {prediction.prediction_time}
                  </td>
                  <td className="text-sm text-black p-3">
                    {prediction.createdAt}
                  </td>
                  <td className="text-sm text-black p-3">
                    {prediction.updatedAt}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </RootLayout>
  );
};

export default dynamic(() => Promise.resolve(MailBox), { ssr: false });
