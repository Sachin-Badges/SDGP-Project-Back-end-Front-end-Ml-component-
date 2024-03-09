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
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <div className="col-span-7 place-self-center text-center sm:text-left justify-self-start">
            {/* <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
              Hi There! Welcome to the Customer Page
            </h1> */}
            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">
                Hello There! Welcome to {" Customer Page"}
              </span>
              {/* <TypeAnimation
                sequence={[
                  "Judy",
                  1000,
                  "Web Developer",
                  1000,
                  "Mobile Developer",
                  1000,
                  "UI/UX Designer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "2em", display: "inline-block" }}
                repeat={Infinity}
              /> */}
            </h1>

            <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
              This webpage has been created by CS g 26 Team 2024
            </p>
          </div>
          <div className="col-span-5 place-self-center">
            <div className="hidden lg:block rounded-full bg-[#181818] w-[450px] h-[450px] lg:w-[600px] lg:h-[600px] relative">
              <Image
                // src="./../../../public/hero.png"
                src={"/customer4.jpeg"}
                alt="hero image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={400}
                height={400}
              />
            </div>
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
        </div>
      </section>
    </RootLayout>
  );
};

export default CustomerPage;