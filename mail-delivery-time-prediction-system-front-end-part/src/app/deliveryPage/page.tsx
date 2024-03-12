"use client";
import { useState, useEffect } from "react";
import RootLayout from "../layout";
import Navbar from "@/components/navbar/Navbar";
import { useRouter } from "next/router";
import axios from "axios";

const DeliveryPage = () => {
  const [deliveryData, setDeliveryData] = useState({
    Delivery_person_Age: "",
    Delivery_person_Ratings: "",
    Post_office_latitude: "",
    Post_office_longitude: "",
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

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setDeliveryData({
      ...deliveryData,
      [name]:
        name === "multiple_deliveries" ? value === "true" : parseFloat(value),
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
        Post_office_latitude: "",
        Post_office_longitude: "",
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
      <Navbar />
      <section className="lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <div className="col-span-12 place-self-start">
            <div className="mt-4 mx-auto bg-white p-4 rounded-md shadow-md flex flex-col items-center max-w-30">
              <form onSubmit={handleFormSubmit} className="w-1/3">
                <input
                  type="text"
                  placeholder="Delivery Person Age"
                  name="Delivery_person_Age"
                  value={deliveryData.Delivery_person_Age}
                  onChange={handleInputChange}
                  style={{ color: "black" }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"
                />

                <input
                  type="text"
                  placeholder="Delivery Person Ratings( 0-10)"
                  name="Delivery_person_Ratings"
                  value={deliveryData.Delivery_person_Ratings}
                  onChange={handleInputChange}
                  style={{ color: "black" }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"
                />

                <input
                  type="text"
                  placeholder="Post Office Latitude"
                  name="Post_office_latitude"
                  value={deliveryData.Post_office_latitude}
                  onChange={handleInputChange}
                  style={{ color: "black" }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"
                />

                <input
                  type="text"
                  placeholder="Post Office Longitude"
                  name="Post_office_longitude"
                  style={{ color: "black" }}
                  value={deliveryData.Post_office_longitude}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"
                />

                <input
                  type="text"
                  placeholder="Delivery Location Latitude"
                  name="Delivery_location_latitude"
                  value={deliveryData.Delivery_location_latitude}
                  style={{ color: "black" }}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"
                />

                <input
                  type="text"
                  placeholder="Delivery Location Longitude"
                  name="Delivery_location_longitude"
                  value={deliveryData.Delivery_location_longitude}
                  style={{ color: "black" }}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"
                />

                <input
                  type="text"
                  placeholder="Weather Conditions"
                  name="Weather_conditions"
                  value={deliveryData.Weather_conditions}
                  style={{ color: "black" }}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"
                />

                <input
                  type="text"
                  placeholder="Road Traffic Density"
                  name="Road_traffic_density"
                  value={deliveryData.Road_traffic_density}
                  style={{ color: "black" }}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"
                />

                <input
                  type="text"
                  placeholder="Vehicle Condition"
                  name="Vehicle_condition"
                  value={deliveryData.Vehicle_condition}
                  style={{ color: "black" }}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"
                />

                <input
                  type="text"
                  placeholder="Type of Vehicle"
                  name="Type_of_vehicle"
                  value={deliveryData.Type_of_vehicle}
                  style={{ color: "black" }}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"
                />

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

                <label htmlFor="multiple_deliveries">Multiple Deliveries</label>

                <input
                  type="text"
                  placeholder="Festival"
                  name="Festival"
                  value={deliveryData.Festival}
                  style={{ color: "black" }}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"
                />

                <input
                  type="text"
                  placeholder="Distance"
                  name="distance"
                  value={deliveryData.distance}
                  style={{ color: "black" }}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"
                />

                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none"
                >
                  Create Prediction
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </RootLayout>
  );
};

export default DeliveryPage;
