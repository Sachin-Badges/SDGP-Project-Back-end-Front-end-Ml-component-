"use client";
import Image from "next/image";
import styles from "./home.module.css";
import Link from "next/link";
import ProjectsSection from "./ProjectsSection";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
            {/* {userData ? (
              <button className={styles.button}>
                <Link href="/employeePage">Employee Page</Link>
              </button>
            ) : (
              <button className={styles.button}>
                <Link href="/login">Employee Page</Link>
              </button>
            )} */}
            <button className={styles.button}>
              <Link href="/employeePage">Employee Page</Link>
            </button>
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
              <h1>10 K+</h1>
              <p>Year of experience</p>
            </div>
            <div className={styles.box}>
              <h1>10 K+</h1>
              <p>Year of experience</p>
            </div>
            <div className={styles.box}>
              <h1>10 K+</h1>
              <p>Year of experience</p>
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
                <span>Available Now</span>
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
                <span>Available Now</span>
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
                <span>Available Now</span>
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
    </>
  );
};

export default Home;
