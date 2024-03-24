// "use client";
import React from "react";
import Image from "next/image";
import RootLayout from "../layout";
import Navbar from "./customerNavbar/Navbar";
import dynamic from "next/dynamic";
import Link from "next/link";

const DynamicNavbar = dynamic(() => import("./customerNavbar/Navbar"), {
  loading: () => null, // Placeholder while Navbar is loading
  ssr: false, // Disable server-side rendering for the Navbar component
});

const CustomerPage = () => {
  return (
    <RootLayout hideNavbar={true}>
      <DynamicNavbar />
      {/* <Navbar /> */}
      <section className="lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-y-8">
          <div className="col-span-7 place-self-center text-center sm:text-left justify-self-start">
            
            <h1 className="text-white mb-4 text-2xl sm:text-4xl lg:text-6xl lg:leading-normal font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600 blocktext-5xl sm:text-7xl lg:text-7xl lg:leading-normal">
                Hello There!
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600 block text-5xl sm:text-7xl lg:text-6xl lg:leading-normal">
                Welcome to 
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600 block text-4xl sm:text-7xl lg:text-5xl lg:leading-normal">
                Customer Page
              </span>
            </h1>

            <p className="text-[#ADB7BE] text-base sm:text-lg mb-8 lg:text-xl">
              This webpage has been created by CS group 26 Team 2024
            </p>
            <div className="hidden lg:block">
              <Link
                href="/"
                className="px-5 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-white text-black text-lg border border-black hover:bg-rose-500 hover:text-white transition-all"
              >
                About Us
              </Link>

              <Link
                href="/"
                className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3 text-lg"
              >
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-3">
                  Back to Home
                </span>
              </Link>
            </div>
          </div>
          <div className="col-span-5 place-self-center">
            <div className="hidden lg:block rounded-full bg-[#181818] w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] relative">
              <Image
                src={"/customer4.jpeg"}
                alt="hero image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={350}
                height={350}
              />
            </div>
          </div>
        </div>
      </section>
    </RootLayout>
  );
};

export default dynamic(() => Promise.resolve(CustomerPage), { ssr: false });
