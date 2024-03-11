"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from "next/image";
import RootLayout from "../layout";
import Navbar from "../customerPage/customerNavbar/Navbar";
import dynamic from 'next/dynamic';

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

const CustomerPage = () => {

  const [predictionDetail, setPredictionDetails] = useState<PredictionDetail[]>([]);

  useEffect(() => {
    // Get user email from local storage
    const userData = typeof window !== 'undefined' ? localStorage.getItem('user') : null;
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
    const response = await axios.get(`http://localhost:5000/delivery/search?email=${email}`); // Use backticks for string interpolation
    setPredictionDetails(response.data);
  } catch (error) {
    console.error('Error fetching prediction details:', error);
  }
};

const DynamicNavbar = dynamic(() => import("../customerPage/customerNavbar/Navbar"), {
  loading: () => null, // Placeholder while Navbar is loading
  ssr: false, // Disable server-side rendering for the Navbar component
});


  return (
    <RootLayout hideNavbar={true}>
      <DynamicNavbar />
      <section className="lg:py-16">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <ul className="divide-y divide-gray-200">
            {predictionDetail.map(prediction => (
              <li key={prediction._id} className="py-4">
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <p className="mt-1 text-sm text-black">{prediction.email_id}</p>
                  </div>
                  <div className="flex-1">
                    <p className="mt-1 text-sm text-black">{prediction.sender_address}</p>
                    <p className="mt-1 text-sm text-black">{prediction.sender_name}</p>
                    <p className="mt-1 text-sm text-black">{prediction.delivery_person_name}</p>
                    <p className="mt-1 text-sm text-black">{prediction.delivery_person_contact}</p>
                    <p className="mt-1 text-sm text-black">{prediction.received_date}</p>
                    <p className="mt-1 text-sm text-black">{prediction.prediction_time}</p>
                    <p className="mt-1 text-sm text-black">{prediction.createdAt}</p>
                    <p className="mt-1 text-sm text-black">{prediction.updatedAt}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </section>
    </RootLayout>
  );
};

export default CustomerPage;
