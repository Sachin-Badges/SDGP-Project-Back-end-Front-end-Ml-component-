import RootLayout from "../layout";
import Navbar from "../customerPage/customerNavbar/Navbar";
import styles from './profile.module.css'; 
import Image from "next/image";
import img3 from "../../../public/details.png";
import img4 from "../../../public/profile02.png";
import img2 from "../../../public/image2.jpg";
import Link from 'next/link';
// import { IoPersonCircle } from "react-icons/io5";
 import { IoPersonCircle } from "react-icons/io5";


const ProfilePage = () => {
  return (
    <RootLayout hideNavbar={true}>
      <Navbar />
      <div> <div className={styles.banner}>
          <div className={styles.bannerimage}>
              <Image src={img3} alt="sample.img"  className={styles.imageOne}/>
          </div>
          <div className={styles.bannerText}>
              <h1 className={styles.main}>The Mail Delivery Time  Prediction System</h1><br />
              <p className={styles.description}>
                You can view all of the relevant details linked with the email you received. Explore detailed information such as the sender's name, delivery date, and any further details. This allows you to find important information about your mails even before they reach your door.
              </p>
          </div>
      </div> 
      <div className={styles.container}>
        
     {/* <IoPersonCircle /> */}
     <Image src={img4} alt="profile.img" className={styles.profile} width={50} />

      <h3 className={styles.mailTopic}>Customer Profile</h3>
           Mail
        <div className={styles.formContainer}>
          <div className={styles.overlay}></div>
          <Image src={img2} alt="sample2.img" className={styles.imageTwo} />
              {/* <div className={styles.overlay}></div> */}

          <form className={styles.form}>
            <div className={styles.row}>
            <label htmlFor="Username" className={styles.label}>Username : </label>
            <input type="text"  name="username" className={styles.input} /><br /></div>

            <div className={styles.row}>
            <label htmlFor="Address" className={styles.label}>Address : </label>
            <input type="text" id="Address" name="Address" className={styles.input} /><br /></div>

            <div className={styles.row}>
            <label htmlFor="NIC No " className={styles.label}>NIC No :</label>
            <input type="text" id="NIC No " name="NIC No " className={styles.input} /><br /></div>

            <div className={styles.row}>
            <label htmlFor="Longitude " className={styles.label}> Longitude : </label>
            <input type="text" id="Longitude " name="Longitude " className={styles.input} /><br /></div>

            <div className={styles.row}>
            <label htmlFor="Latitude" className={styles.label}> Latitude : </label>
            <input type="text" id="Latitude" name="Latitude" className={styles.input} /><br /></div>

            <div className={styles.row}>
            <label htmlFor="Contact Number " className={styles.label}> Contact Number : </label>
            <input type="text" id="Contact Number " name="Contact Number " className={styles.input} /><br /></div>

            


          </form>
        </div>
      </div> 
      </div>
    </RootLayout>
  );
};

export default ProfilePage;
