import Link from "next/link";
import Links from "./links/Links";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src="mylogo.png" alt="Logo" className={styles.logoImg} />{" "}
      </div>
      <div>
        <Links></Links>
      </div>
    </div>
  );
};

export default Navbar;
