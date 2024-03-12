import React from "react";
import RootLayout from "../layout";
import Link from 'next/link';

const FeedbackPage = () => {
  // Emojis for user selection
  const emojis = [ "👍","😊", "👎"];

  return (
    <RootLayout>
      <section className="absolute h-full w-full filter blur-[2px] brightness-30%"></section>
      <div className="w-360 bg-black shadow-lg opacity-60 mx-auto">
        <form className="w-full text-center p-8">
          <h1 className="p-10 text-2xl">Give your Feedback</h1>
          <div className="relative">
            <select
              className="w-full h-12 border border-gray-500 rounded bg-gray-800 px-4 text-xl focus:outline-none focus:border-blue-400 transition duration-300"
            >
              {emojis.map((emoji, index) => (
                <option key={index} value={emoji}>
                  {emoji}
                </option>
              ))}
            </select>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Full name"
              className="w-full h-12 m-2 border border-gray-500 rounded bg-gray-800 px-4 text-xl"
            />
          </div>
          <div className="relative">
            <input
              type="email"
              placeholder="Email address"
              className="w-full h-12 m-2 border border-gray-500 rounded bg-gray-800 px-4 text-xl"
            />
          </div>
          <textarea
            placeholder="Enter your opinion here.."
            className="w-full h-12 m-2 border border-gray-500 rounded bg-gray-800 text-xl w-full"
          ></textarea>
          <button className="mt-5 border-none bg-blue-400 text-black p-4 w-full text-xl font-bold cursor-pointer rounded">
            Send
          </button>
        </form>
      </div>
    </RootLayout>
  );
};

export default FeedbackPage;