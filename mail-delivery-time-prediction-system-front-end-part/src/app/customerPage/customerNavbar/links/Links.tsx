"use client";

import Link from "next/link";
import styles from "./links.module.css";
import NavLink from "./navLinks/navLink";
import { useState, useEffect } from "react";
import Image from "next/image";

const links = [
  {
    title: "Home",
    path: "/customerPage",
  },
  {
    title: "Profile",
    path: "/profile",
  },
  {
    title: "Mail-Box",
    path: "/mailBox",
  },
  {
    title: "Feedback",
    path: "/feedbackPage",
  },
];

const Links = ({}) => {
  const [open, setOpen] = useState(false);
  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {/* <button className={styles.logout}>Logout</button> */}
        <button
          onClick={handleLogout}
          className="bg-white text-black rounded-none p-3"
        >
          Logout
        </button>
      </div>

      <Image
        className={styles.menuButton}
        src="/menu.png"
        alt="menuImage"
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
      />

      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
