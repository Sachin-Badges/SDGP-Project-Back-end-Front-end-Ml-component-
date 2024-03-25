import Image from 'next/image';
import styles from '../Contact/Contact.module.css';

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <div className={styles.contactImage}>
          <Image src="/contactus.jpg" alt="Contact Us" width={6625} height={300} />
          <div className={styles.logoOverlay}>
            <Image src="/mylogo.png" alt="Epicode Solutions Logo" width={200} height={200} />
          </div>
          <div className={styles.contactText}>
            <h2 className={`${styles.boldText} ${styles.largeText}`}>Contact Epicode Solutions</h2>
            <p className={styles.blackText}>
              Thank you for your interest in Epicode Solutions. For inquiries or assistance, please feel free to contact us.
            </p>
            <ul className={styles.contactList}>
              <li>
                <span>Email:</span> info@epicodesolutions.com
              </li>
              <li>
                <span>Phone:</span> +94 (091) 2259371
              </li>
              <li>
                <span>Address:</span> 04, Armond Street, Colombo 04
              </li>
              <li>
                <span>Facebook:</span> @Mail time prediction system
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.whiteTab}>
        {/* White tab */}
      </div>
    </div>
  );
};

export default ContactPage;
