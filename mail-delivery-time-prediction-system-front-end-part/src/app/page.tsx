"use client";
import Image from "next/image";
import styles from "./home.module.css";
import Link from "next/link";
import ProjectsSection from "./ProjectsSection";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import dynamic from "next/dynamic";
import { FaEnvelope, FaFacebookSquare, FaInstagram } from "react-icons/fa";

const Home = () => {
  const isLocalStorageAvailable =
    typeof window !== "undefined" && window.localStorage;
  const userData = isLocalStorageAvailable
    ? localStorage.getItem("user")
    : null;
  return (
    <>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Mail Delivery Time Prediction</h1>
          <p className={styles.desc}>
            To establish a user-friendly and accessible application that
            empowers to predict mail delivery time.
          </p>

          <div className={styles.buttons}>
            {userData ? (
              <button className={styles.button}>
                <Link href="/customerPage">Customer Page</Link>
              </button>
            ) : (
              <button className={styles.button}>
                <Link href="/login">Customer Page</Link>
              </button>
            )}
            {userData ? (
              <button className={styles.button}>
                <Link href="/employeePage">Employee Page</Link>
              </button>
            ) : (
              <button className={styles.button}>
                <Link href="/employeeLogin">Employee Page</Link>
              </button>
            )}
          </div>
          <div className={styles.brands}>
            <Image src="/brands.png" alt="" fill className={styles.brandImg} />
          </div>
        </div>

        <div className="hidden lg:block   w-[450px] h-[450px] lg:w-[600px] lg:h-[600px] relative">
          <Image
            // src="./../../../public/hero.png"
            src={"/MainPostOffice.png"}
            alt="hero image"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            width={600}
            height={600}
          />
        </div>
      </div>
      <div className={styles.packages}>
        <h1>Packages</h1>
        <div className={styles.container_3}>
          <div className={styles.card}>
            <div className={styles.imgbx}>
              <Image
                src="/basic.jpg"
                alt="About Image"
                fill
                className={styles.img}
              />
            </div>
            <div className={styles.content}>
              <h2>
                Basic Package
                <br />
                <span>Available Now</span>
              </h2>
              <p>
                This package could offer the core functionality of predicting
                mail delivery times based on standard factors such as distance,
                weather conditions, and traffic.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.imgbx}>
              <Image
                src="/premium.jpg"
                alt="About Image"
                fill
                className={styles.img}
              />
            </div>
            <div className={styles.content}>
              <h2>
                Premium Package
                <br />
                <span>Coming Soon!</span>
              </h2>
              <p>
                In addition to the features of the Basic Package, the Premium
                Package could offer more accurate predictions by taking into
                account additional factors such as historical delivery times,
                specific courier speed data, and real-time updates.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.imgbx}>
              <Image
                src="/Business .jpg"
                alt="About Image"
                fill
                className={styles.img}
              />
            </div>
            <div className={styles.content}>
              <h2>
                Business Package
                <br />
                <span>Coming Soon!</span>
              </h2>
              <p>
                This package could be tailored for businesses and include
                features like bulk mail delivery time predictions, integration
                with existing logistics systems, and dedicated customer support.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.imgbx}>
              <Image
                src="/custom.jpg"
                alt="About Image"
                fill
                className={styles.img}
              />
            </div>
            <div className={styles.content}>
              <h2>
                Custom Package:
                <br />
                <span>Coming Soon!</span>
              </h2>
              <p>
                This package could allow customers to pick and choose the
                features they need, offering a more personalized solution.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.imgbx}>
              <Image
                src="/Enterprise.jpg"
                alt="About Image"
                fill
                className={styles.img}
              />
            </div>
            <div className={styles.content}>
              <h2>
                Enterprise Package
                <br />
                <span>(Coming Soon!)</span>
              </h2>
              <p>
                The Enterprise Package could offer all the features of the
                Business Package, but for larger volumes of mail. It could also
                include features like API access, custom integrations, and a
                dedicated account manager.
              </p>
            </div>
          </div>
        </div>
      </div>

      <ProjectsSection />
      <div className={styles.container_2}>
        <div className={styles.textContainer_2}>
          <h2 className={styles.subtitle_2}>About&nbsp; Us</h2>
          <h1 className={styles.title_2}>
            We create digital ideas that are bigger, bolder, braver and better.
          </h1>
          <p className={styles.desc}>
            We are a group of students currently pursuing B.Sc.(Hons) in
            Computer Science degree at Informatics Institute of Technology, Sri
            Lanka affiliated with University of Westminster, UK.
          </p>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <h1>100%</h1>
              <p>Accurate</p>
            </div>
            <div className={styles.box}>
              <h1>100%</h1>
              <p>User-friendly</p>
            </div>
            <div className={styles.box}>
              <h1>100%</h1>
              <p>Cost-effective </p>
            </div>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="/about.png"
            alt="About Image"
            fill
            className={styles.img}
          />
        </div>
      </div>
      <div className="p-4 pt-16 mt-1 rounded">
        <div className="mx-auto max-w-7xl">
          <h2 className="items-center pb-10 mb-4 text-3xl font-bold text-center">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-5">
            <div className="member-card">
              <img
                src="/sachin1.jpg"
                alt="Member 1"
                className="object-cover w-full h-40 rounded lg:h-64"
              />
              <div className="justify-center pl-10 mt-4 t-white pl-space-x-4">
                <h1>R. Sachin Ayeshmantha</h1>
                <div className="flex flex-col pl-4 ">
                  <div className="flex mt-4 space-x-4 text-white">
                    <a
                      href="https://www.facebook.com"
                      className="hover:text-blue-500"
                    >
                      <FaFacebookSquare className="text-2xl" />
                    </a>
                    <a
                      href="https://www.instagram.com"
                      className="hover:text-pink-500"
                    >
                      <FaInstagram className="text-2xl" />
                    </a>
                    <a
                      href="mailto:example@example.com"
                      className="hover:text-green-900"
                    >
                      <FaEnvelope className="text-2xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="member-card">
              <img
                src="/princely.jpg"
                alt="Member 1"
                className="object-cover w-full h-40 rounded lg:h-64"
              />
              <div className="justify-center pl-10 mt-4 t-white pl-space-x-4">
                <h1>W.M.P.S Fernando</h1>
                <div className="flex flex-col pl-4 ">
                  <div className="flex mt-4 space-x-4 text-white">
                    <a
                      href="https://www.facebook.com"
                      className="hover:text-blue-500"
                    >
                      <FaFacebookSquare className="text-2xl" />
                    </a>
                    <a
                      href="https://www.instagram.com"
                      className="hover:text-pink-500"
                    >
                      <FaInstagram className="text-2xl" />
                    </a>
                    <a
                      href="mailto:example@example.com"
                      className="hover:text-green-900"
                    >
                      <FaEnvelope className="text-2xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="member-card">
              <img
                src="/koojana.png"
                alt="Member 1"
                className="object-cover w-full h-40 rounded lg:h-64"
              />
              <div className="justify-center pl-10 mt-4 xt-white plspace-x-4">
                <h1>Koojana Shakya</h1>
                <div className="flex flex-col pl-2">
                  <div className="flex mt-4 space-x-4 text-white">
                    <a
                      href="https://www.facebook.com"
                      className="hover:text-blue-500"
                    >
                      <FaFacebookSquare className="text-2xl" />
                    </a>
                    <a
                      href="https://www.instagram.com"
                      className="hover:text-pink-500"
                    >
                      <FaInstagram className="text-2xl" />
                    </a>
                    <a
                      href="mailto:example@example.com"
                      className="hover:text-green-900"
                    >
                      <FaEnvelope className="text-2xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="member-card">
              <img
                src="/thrisha.jpg"
                alt="Member 1"
                className="object-cover w-full h-40 rounded lg:h-64"
              />
              <div className="justify-center pl-16 mt-4 space-x-4 text-white">
                <h1>K.Thirisani</h1>
              </div>
              <div className="flex flex-col pl-12">
                <div className="flex mt-4 space-x-4 text-white">
                  <a
                    href="https://www.facebook.com"
                    className="hover:text-blue-500"
                  >
                    <FaFacebookSquare className="text-2xl" />
                  </a>
                  <a
                    href="https://www.instagram.com"
                    className="hover:text-pink-500"
                  >
                    <FaInstagram className="text-2xl" />
                  </a>
                  <a
                    href="mailto:example@example.com"
                    className="hover:text-green-900"
                  >
                    <FaEnvelope className="text-2xl" />
                  </a>
                </div>
              </div>
            </div>

            <div className="member-card">
              <img
                src="/samindi.jpg"
                alt="Member 1"
                className="object-cover w-full h-40 rounded lg:h-64"
              />
              <div className="justify-center pl-10 mt-4 space-x-4 text-white">
                <h1>H.W.L.Samindani</h1>
                <div className="flex flex-col ">
                  <div className="flex mt-4 space-x-4 text-white">
                    <a
                      href="https://www.facebook.com"
                      className="hover:text-blue-500"
                    >
                      <FaFacebookSquare className="text-2xl" />
                    </a>
                    <a
                      href="https://www.instagram.com"
                      className="hover:text-pink-500"
                    >
                      <FaInstagram className="text-2xl" />
                    </a>
                    <a
                      href="mailto:example@example.com"
                      className="hover:text-green-900"
                    >
                      <FaEnvelope className="text-2xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default dynamic(() => Promise.resolve(Home), { ssr: false });
