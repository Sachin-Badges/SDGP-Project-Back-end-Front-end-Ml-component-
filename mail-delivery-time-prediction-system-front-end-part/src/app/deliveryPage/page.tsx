"use client";
import { useState, useEffect } from "react";
import RootLayout from "../layout";
import Navbar from "@/components/navbar/Navbar";
import { useRouter } from "next/router";
import axios from "axios";
import { Link } from "react-router-dom";

const DeliveryPage = () => {
  const [deliveryData, setDeliveryData] = useState({
    Delivery_person_Age: "",
    Delivery_person_Ratings: "",
    Post_office_latitude: 50.5627,
    Post_office_longitude: 45.5623,
    Delivery_location_latitude: "",
    Delivery_location_longitude: "",
    Weather_conditions: "",
    Road_traffic_density: "",
    Vehicle_condition: "",
    Type_of_vehicle: "",
    multiple_deliveries: false,
    Festival: "",
    distance: "",
  });

  // Function to handle changes in input elements (text inputs, checkboxes, etc.)
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Destructure the name and value properties from the event target
    const { name, value } = event.target;

    // Update the deliveryData state based on the input element's name
    setDeliveryData({
      ...deliveryData,
      // Use ternary operator to conditionally update value
      [name]:
        name === "multiple_deliveries" ? value === "true" : parseFloat(value), // If the input name is "multiple_deliveries", convert value to boolean
    });
  };

  // Function to handle changes in select elements
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;

    // Update the deliveryData state directly with the selected value
    setDeliveryData({
      ...deliveryData,
      [name]: value, // Update the value directly
    });
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/delivery/create",
        deliveryData
      );
      console.log(response.data);

      const { flaskApiResponse } = response.data;
      if (flaskApiResponse && flaskApiResponse.prediction) {
        const deliveryTime = flaskApiResponse.prediction;
        console.log("Predicted delivery time:", deliveryTime);
        // Redirect to prediction page with deliveryTime as query parameter
        window.location.href = `/predictionPage?deliveryTime=${deliveryTime}`;
      } else {
        console.error("Prediction data not available in the response");
      }

      // Reset form after successful submission
      setDeliveryData({
        Delivery_person_Age: "",
        Delivery_person_Ratings: "",
        Post_office_latitude: 50.5627,
        Post_office_longitude: 45.5623,
        Delivery_location_latitude: "",
        Delivery_location_longitude: "",
        Weather_conditions: "",
        Road_traffic_density: "",
        Vehicle_condition: "",
        Type_of_vehicle: "",
        multiple_deliveries: false,
        Festival: "",
        distance: "",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    // Function to parse query parameters from URL
    const getQueryParam = (name: string): string | null => {
      const params = new URLSearchParams(window.location.search);
      return params.get(name);
    };

    // Get latitude and longitude from query parameters
    const latitude = getQueryParam("latitude");
    const longitude = getQueryParam("longitude");

    // Update deliveryData state with latitude and longitude values
    if (latitude && longitude) {
      setDeliveryData((prevState) => ({
        ...prevState,
        Delivery_location_latitude: latitude,
        Delivery_location_longitude: longitude,
      }));
    }
  }, []);

  return (
    <RootLayout hideNavbar={true}>
      <section className="flex items-center justify-center lg:py-16 lg:px-20">
        <div className="w-full max-w-3xl">
          <div className="col-span-12 place-self-start">
            <div className="mt-4 mx-auto bg-white p-4 rounded-md shadow-md flex flex-col items-center max-w-30">
              <form
                onSubmit={handleFormSubmit}
                className="w-full grid grid-cols-2 gap-4"
              >
                <label
                  htmlFor="Delivery_person_Age"
                  className="text-black col-span-1"
                >
                  Delivery Person Age:
                </label>
                <input
                  type="number"
                  placeholder="Delivery Person Age (18-70)"
                  name="Delivery_person_Age"
                  value={deliveryData.Delivery_person_Age}
                  min="18"
                  max="70"
                  onChange={handleInputChange}
                  style={{ color: "black" }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4 col-span-1"
                />

                <label
                  htmlFor="Delivery_person_Ratings"
                  className="text-black col-span-1"
                >
                  Delivery Person Ratings:
                </label>
                <input
                  type="number"
                  placeholder="Delivery Person Ratings (0-10)"
                  name="Delivery_person_Ratings"
                  value={deliveryData.Delivery_person_Ratings}
                  min="0"
                  max="10"
                  onChange={handleInputChange}
                  style={{ color: "black" }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4 col-span-1"
                />

                <label
                  htmlFor="Post_office_latitude"
                  className="text-black col-span-1"
                >
                  Post Office Latitude:
                </label>
                <input
                  type="number"
                  placeholder="Post Office Latitude"
                  name="Post_office_latitude"
                  value={deliveryData.Post_office_latitude}
                  onChange={handleInputChange}
                  style={{ color: "black" }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4 col-span-1"
                />

                <label
                  htmlFor="Post_office_longitude"
                  className="text-black col-span-1"
                >
                  Post Office Longitude:
                </label>
                <input
                  type="number"
                  placeholder="Post Office Longitude"
                  name="Post_office_longitude"
                  value={deliveryData.Post_office_longitude}
                  onChange={handleInputChange}
                  style={{ color: "black" }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4 col-span-1"
                />

                {/* Add similar labels and inputs for other fields */}
                <label
                  htmlFor="Delevery _ocation_latitude"
                  className="text-black col-span-1"
                >
                  Delivery Location Latitude:
                </label>
                <input
                  type="text"
                  placeholder="Delivery Location Latitude"
                  name="Delivery_location_latitude"
                  value={deliveryData.Delivery_location_latitude}
                  style={{ color: "black" }}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4 relative z-10"
                />
                <label
                  htmlFor="Delivery_location_longitude"
                  className="text-black col-span-1"
                >
                  Delivery Location Longitude:
                </label>

                <input
                  type="number"
                  placeholder="Delivery Location Longitude"
                  name="Delivery_location_longitude"
                  value={deliveryData.Delivery_location_longitude}
                  style={{ color: "black" }}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"
                />

                {/* <label htmlFor="multiple_deliveries" style={{ color: "black" }}>
                  Multiple Deliveries:
                </label> */}

                <label
                  htmlFor="Weather Conditions"
                  className="text-black col-span-1"
                >
                  Weather Conditions (0-6):
                </label>

                <input
                  type="number"
                  placeholder="Weather Conditions (0-6)"
                  name="Weather_conditions"
                  value={deliveryData.Weather_conditions}
                  min="0"
                  max="6"
                  style={{ color: "black" }}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"
                />
                {/* <select
                  name="Weather Conditions (0-5)"
                  value={deliveryData.Weather_conditions}
                  // onChange={handleInputChange}
                  onChange={handleSelectChange}
                  style={{ color: "black" }}
                  defaultValue={2}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"
                >
                  <option value={0}>Cloudy</option>
                  <option value={1}>Fog</option>
                  <option value={2}>Rainy</option>
                  <option value={3}>Stormy</option>
                  <option value={4}>Sunny</option>
                  <option value={5}>Windy</option>
                </select> */}

                <label
                  htmlFor="Road Traffic Density"
                  className="text-black col-span-1"
                >
                  Road Traffic Density:
                </label>

                <input
                  type="number"
                  placeholder="Road Traffic Density"
                  name="Road_traffic_density"
                  value={deliveryData.Road_traffic_density}
                  style={{ color: "black" }}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"
                />

                {/* <select
                  name="Road Traffic Density"
                  value={deliveryData.Road_traffic_density}
                  // onChange={handleInputChange}
                  onChange={handleSelectChange}
                  style={{ color: "black" }}
                  defaultValue={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"
                >
                  <option value={0}>High</option>
                  <option value={1}>Jam</option>
                  <option value={2}>Low</option>
                  <option value={3}>Medium</option>
                </select> */}

                <label
                  htmlFor="Vehicle Condition"
                  className="text-black col-span-1"
                >
                  Vehicle Condition:
                </label>

                <input
                  type="number"
                  placeholder="Vehicle Condition (0-2)"
                  name="Vehicle_condition"
                  value={deliveryData.Vehicle_condition}
                  min="0"
                  max="2"
                  style={{ color: "black" }}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"
                />

                <label
                  htmlFor="Type of Vehicle"
                  className="text-black col-span-1"
                >
                  Type of Vehicle:
                </label>
                {/* <input
                  type="number"
                  placeholder="Type of Vehicle"
                  name="Type_of_vehicle"
                  value={deliveryData.Type_of_vehicle}
                  style={{ color: "black" }}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"
                /> */}
                <select
                  name="Type_of_vehicle"
                  value={deliveryData.Type_of_vehicle}
                  // onChange={handleInputChange}
                  onChange={handleSelectChange}
                  style={{ color: "black" }}
                  defaultValue={2}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"
                >
                  <option value={1}>Electric Scooter</option>
                  <option value={2}>Motorcycle</option>
                  <option value={3}>Scooter</option>
                </select>

                <label
                  htmlFor="multiple_deliveries"
                  className="text-black col-span-1"
                >
                  multiple_deliveries:
                </label>
                <input
                  type="checkbox"
                  name="multiple_deliveries"
                  style={{ color: "black" }}
                  checked={deliveryData.multiple_deliveries}
                  onChange={(event) =>
                    setDeliveryData({
                      ...deliveryData,
                      multiple_deliveries: event.target.checked,
                    })
                  }
                  className="mr-2"
                />
                <label htmlFor="Festival" className="text-black col-span-1">
                  Festival:
                </label>
                {/* <input
                  type="number"
                  placeholder="Festival"
                  name="Festival"
                  value={deliveryData.Festival}
                  style={{ color: "black" }}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"
                /> */}
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="festivalYes"
                      name="Festival"
                      value={1}
                      checked={Number(deliveryData.Festival) === 1}
                      onChange={handleInputChange}
                      className="mr-1"
                    />
                    <label htmlFor="festivalYes" className="text-black mr-4">
                      Yes
                    </label>
                    <input
                      type="radio"
                      id="festivalNo"
                      name="Festival"
                      value={0}
                      checked={Number(deliveryData.Festival) === 0}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="festivalNo" className="text-black">
                      No
                    </label>
                  </div>
                </div>

                <label htmlFor="Distance" className="text-black col-span-1">
                  Distance(Km):
                </label>
                <input
                  type="number"
                  placeholder="Distance(km)"
                  name="distance"
                  value={deliveryData.distance}
                  style={{ color: "black" }}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"
                />

                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none col-span-2"
                >
                  Create Prediction
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center gap-4 mt-4">
        <button className="bg-red-500 text-white px-6 py-3 rounded-md focus:outline-none shadow-md transition duration-300 transform hover:translate-y-1 hover:shadow-lg">
          <a href="/employeePage">Back</a>
        </button>
        <button className="bg-green-500 text-white px-6 py-3 rounded-md focus:outline-none shadow-md transition duration-300 transform hover:translate-y-1 hover:shadow-lg">
          <a href="/predictionPage">Next</a>
        </button>
      </div>
    </RootLayout>
  );
};

export default DeliveryPage;
