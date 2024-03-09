"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import RootLayout from "../layout";
import Navbar from '@/components/navbar/Navbar';
import { useRouter } from 'next/router';


const DeliveryPage = () => {

    interface Delivery {
        delivery_person_age: string;
        delivery_person_rating: string;
        delivery_location_latitude: string;
        delivery_location_longitude: string;
        weather_conditions: string;
        road_traffic_density: string;
        vehicle_condition: string;
        type_of_vehicle: string;
        multiple_deliveries: boolean;
        festival: string;
    }

    const [deliveryData, setDeliveryData] = useState<Delivery>({
        delivery_person_age: '',
        delivery_person_rating: '',
        delivery_location_latitude: '',
        delivery_location_longitude: '',
        weather_conditions: '',
        road_traffic_density: '',
        vehicle_condition: '',
        type_of_vehicle: '',
        multiple_deliveries: false,
        festival: ''
    });

    useEffect(() => {
        // Function to parse query parameters from URL
        const getQueryParam = (name: string): string | null => {
            const params = new URLSearchParams(window.location.search);
            return params.get(name);
        };

        // Get latitude and longitude from query parameters
        const latitude = getQueryParam('latitude');
        const longitude = getQueryParam('longitude');

        // Update deliveryData state with latitude and longitude values
        if (latitude && longitude) {
            setDeliveryData(prevState => ({
                ...prevState,
                delivery_location_latitude: latitude,
                delivery_location_longitude: longitude
            }));
        }
    }, []);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setDeliveryData({ ...deliveryData, [name]: value });
    };

    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/delivery/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(deliveryData)
            });
            const data = await response.json();
            console.log(data);
            // Reset form after successful submission
            setDeliveryData({
                delivery_person_age: '',
                delivery_person_rating: '',
                delivery_location_latitude: '',
                delivery_location_longitude: '',
                weather_conditions: '',
                road_traffic_density: '',
                vehicle_condition: '',
                type_of_vehicle: '',
                multiple_deliveries: false,
                festival: ''
            });
            window.location.href = '/predictionPage'; 
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

                        {/* Form for creating a new delivery */}
                        <div className="mt-4 mx-auto bg-white p-4 rounded-md shadow-md flex flex-col items-center max-w-30">
                            <form onSubmit={handleFormSubmit} className="w-full">
                                <input
                                    type="text"
                                    placeholder="Delivery Person Age"
                                    name="delivery_person_age"
                                    value={deliveryData.delivery_person_age}
                                    style={{ color: 'black' }}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"
                                />
                                <input
                                    type="text"
                                    placeholder="Delivery Person Rating"
                                    style={{ color: 'black' }}
                                    name="delivery_person_rating"
                                    value={deliveryData.delivery_person_rating}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"
                                />
                                <input
                                    type="text"
                                    placeholder="Delivery Location Latitude"
                                    name="delivery_location_latitude"
                                    style={{ color: 'black' }}
                                    value={deliveryData.delivery_location_latitude}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"
                                />
                                <input
                                    type="text"
                                    placeholder="Delivery Location Longitude"
                                    name="delivery_location_longitude"
                                    value={deliveryData.delivery_location_longitude}
                                    style={{ color: 'black' }}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"
                                />
                                <input
                                    type="text"
                                    placeholder="Weather Conditions"
                                    style={{ color: 'black' }}
                                    name="weather_conditions"
                                    value={deliveryData.weather_conditions}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"
                                />
                                <input
                                    type="text"
                                    placeholder="Road Traffic Density"
                                    style={{ color: 'black' }}
                                    name="road_traffic_density"
                                    value={deliveryData.road_traffic_density}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"
                                />
                                <input
                                    type="text"
                                    placeholder="Vehicle Condition"
                                    name="vehicle_condition"
                                    style={{ color: 'black' }}
                                    value={deliveryData.vehicle_condition}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"
                                />
                                <input
                                    type="text"
                                    placeholder="Type of Vehicle"
                                    style={{ color: 'black' }}
                                    name="type_of_vehicle"
                                    value={deliveryData.type_of_vehicle}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"
                                />
                                <input
                                    type="checkbox"
                                    name="multiple_deliveries"
                                    style={{ color: 'black' }}
                                    checked={deliveryData.multiple_deliveries}
                                    onChange={(event) => setDeliveryData({ ...deliveryData, multiple_deliveries: event.target.checked })}
                                    className="mr-2"
                                />
                                <label htmlFor="multiple_deliveries" style={{ color: 'black' }}>Multiple Deliveries</label>

                                <input
                                    type="text"
                                    placeholder="Festival"
                                    style={{ color: 'black' }}
                                    name="festival"
                                    value={deliveryData.festival}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"
                                />
                                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none">Create Prediction</button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </RootLayout >
    );
};

export default DeliveryPage;
