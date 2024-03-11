import Link from "next/link";
import Links from "./links/Links";
import Image from "next/image";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/" className="block">
          <Image
            src="/navbar_logo.png"
            alt="Logo"
            className="h-6 w-auto object-cover rounded-full mr-8"
            layout="responsive"
            width={10}
            height={10}
          />
        </Link>
      </div>
      <div>
        <Links></Links>
      </div>
    </div>
  );
};

export default Navbar;
