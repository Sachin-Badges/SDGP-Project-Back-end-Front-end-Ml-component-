"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import RootLayout from "../layout";
import Navbar from '@/components/navbar/Navbar';
import styles from '../styles/Home.module.css';

const PredictionPage = () => {

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
        email_id: '',
        sender_address: '',
        sender_name: '',
        delivery_person_name: '',
        delivery_person_contact: '',
        received_date: '',
        prediction_time: ''
    });

    // Load user email from localStorage
    useEffect(() => {
        // Load user email from localStorage
        const userData = typeof window !== 'undefined' ? localStorage.getItem('user') : null;
        if (userData) {
            const { email } = JSON.parse(userData);
            setPredictionData(prevState => ({
                ...prevState,
                email_id: email
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
            const response = await fetch('http://localhost:5000/delivery/createPrediction', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(predictionData)
            });
            const data = await response.json();
            console.log(data);
            // Reset form after successful submission
            setPredictionData({
                email_id: '',
                sender_address: '',
                sender_name: '',
                delivery_person_name: '',
                delivery_person_contact: '',
                received_date: '',
                prediction_time: ''
            });
            window.location.href = '/employeePage'; 
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <RootLayout hideNavbar={true}>
            <Navbar />
            <section className="lg:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-12">
                    <div className="col-span-12 place-self-start">
                        <div className="mt-4 mx-auto bg-white p-4 rounded-md shadow-md flex flex-col items-center max-w-30">
                            <form onSubmit={handleFormSubmit} className="w-full">
                                <input
                                    type="text"
                                    placeholder="Email ID"
                                    style={{ color: 'black' }}
                                    name="email_id"
                                    value={predictionData.email_id}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"
                                />
                                <input
                                    type="text"
                                    placeholder="Sender Address"
                                    style={{ color: 'black' }}
                                    name="sender_address"
                                    value={predictionData.sender_address}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"
                                />
                                <input
                                    type="text"
                                    placeholder="Sender Name"
                                    name="sender_name"
                                    style={{ color: 'black' }}
                                    value={predictionData.sender_name}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"
                                />
                                <input
                                    type="text"
                                    placeholder="Delivery Person Name"
                                    name="delivery_person_name"
                                    style={{ color: 'black' }}
                                    value={predictionData.delivery_person_name}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"
                                />
                                <input
                                    type="text"
                                    placeholder="Delivery Person Contact"
                                    name="delivery_person_contact"
                                    style={{ color: 'black' }}
                                    value={predictionData.delivery_person_contact}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"
                                />
                                <input
                                    type="text"
                                    placeholder="Received Date"
                                    style={{ color: 'black' }}
                                    name="received_date"
                                    value={predictionData.received_date}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"
                                />
                                <input
                                    type="text"
                                    placeholder="Prediction Time"
                                    style={{ color: 'black' }}
                                    name="prediction_time"
                                    value={predictionData.prediction_time}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"
                                />

                                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none">Submit Details</button>
                            </form>
                        </div>
                    
                    </div>
                </div>
            </section>
        </RootLayout >
    );
};

export default PredictionPage;

