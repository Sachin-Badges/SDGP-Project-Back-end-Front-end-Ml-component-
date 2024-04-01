"use client";

import Link from "next/link";
import styles from "./links.module.css";
import NavLink from "./navLinks/navLink";
import { useState } from "react";
import Image from "next/image";
import React from "react";

// import styles from "../../../page"

const links = [
  {
    title: "Home",
    path: "/employeePage",
  },
  {
    title: "Alert",
    path: "/Alert",
  },
  {
    title: "Back-To-Main",
    path: "/",
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
        {links.map((link, index) => (
          <NavLink item={link} key={link.title} />
        ))}
        <button className={styles.logout} onClick={handleLogout}>
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
