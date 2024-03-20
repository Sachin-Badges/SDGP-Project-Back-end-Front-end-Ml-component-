// The "use client" directive at the top of the file indicates that this module is client-side only.
// It ensures that this module is only executed in the client-side environment when using Vercel's serverless functions.
// This is important because certain code, such as accessing the window object or using browser-specific APIs, can only run on the client-side.
// By including "use client", we ensure that this component will only be rendered and executed in the browser, not during server-side rendering.

"use client";

import styles from "./links.module.css"; // Import styles for links component
import NavLink from "./navLinks/navLink"; // Import NavLink component
import { useState } from "react"; // Import useState hook
import Image from "next/image"; // Import Image component from Next.js

// Define an array of navigation links
const links = [
  {
    title: "HomePage",
    path: "/",
  },
  {
    title: "Register",
    path: "/register",
  },
  {
    title: "Login",
    path: "/login",
  },
  {
    title: "Gallery",
    path: "/gallery",
  },
];

// Define the Links component
const Links = ({}) => {
  const [open, setOpen] = useState(false); // Define state to track if mobile menu is open

  // Render the container div with the specified CSS class
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link, index) => (
          <NavLink item={link} key={link.title} />
        ))}
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
