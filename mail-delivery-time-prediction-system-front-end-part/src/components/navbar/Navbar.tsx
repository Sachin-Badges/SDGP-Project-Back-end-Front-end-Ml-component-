// import Link from "next/link";
// import Links from "./links/Links";
// import styles from "./navbar.module.css";

// const Navbar = () => {
//   return (
//     <div className={styles.container}>
//       <div className={styles.logo}>Logo</div>
//       <div>
//         <Links></Links>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import Link from "next/link";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import img1 from "../../../public/1-removebg-preview.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.container}>
      {/* Replace the text "Logo" with an img tag */}
      <div className={styles.logo}>
      <Image src={img1} alt="1-removebg-preview.png"  loading="eager"/>
      </div>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;

