import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import dynamic from "next/dynamic";

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState("0");
  const [feedback, setFeedback] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/users/feedback/", {
        fullName: name,
        email,
        message,
        rating,
        opinion: feedback,
      });

      if (res.status === 201) {
        console.log("Success");
        setShowSuccessMessage(true);

        // Clear input fields after success
        setName("");
        setEmail("");
        setMessage("");
        setRating("0");
        setFeedback("");
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      setError("Error: Failed to submit feedback");
    }
  };

  return (
    <div className="relative">
      <motion.form
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleSubmit}
        className="w-full max-w-xl mx-auto bg-black p-8 rounded-xl shadow-md mt-10"
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-white">
          Give us your valuable feedback
        </h2>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-white">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 bg-white text-black border border-yellow-400 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 bg-white text-black border border-yellow-400 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2 text-white">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 bg-white text-black border border-gray-400 rounded focus:outline-none focus:border-blue-500"
            rows={4}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="rating" className="block mb-2 text-white">
            Rating
          </label>
          <select
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="w-full p-2 border border-gray-400 rounded focus:outline-none text-black focus:border-blue-500"
            required
          >
            <option value="0">Select a rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="feedback" className="block mb-2">
            Feedback
          </label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="w-full p-2 border border-gray-400 text-black rounded focus:outline-none focus:border-blue-500"
            rows={4}
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Submit
        </button>
      </motion.form>
      {/* Success message */}
      {showSuccessMessage && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
        >
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-black">Thank you!</h2>
            <p className="mb-4 text-black">
              Your feedback has been sent successfully.
            </p>
            <button
              className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              onClick={() => setShowSuccessMessage(false)}
            >
              Close
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default dynamic(() => Promise.resolve(FeedbackForm), { ssr: false });
