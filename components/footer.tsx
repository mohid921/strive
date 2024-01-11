import React from "react";

import styles from "@/styles/footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.bg}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.box}>
            <Image
              src="/logo.png"
              alt="logo"
              width={150}
              height={40}
              style={{ objectFit: "contain" }}
            />
            <p className={styles.paragraph}>
              Sed ut perspiciatis unde omnis natus error voluptatem accusantium
              totam re aperiam,explicabo.
            </p>
          </div>

          <div className={styles.box}>
            <h6 className={styles.heading}>Quick Links</h6>
            <ul className={styles.ul}>
              <li>Home</li>
              <li>Find Mentor</li>
              <li>Events</li>
              <li>About Us</li>
              <li>Career</li>
            </ul>
          </div>
          <div className={styles.box}>
            <h6 className={styles.heading}>Help & Support</h6>
            <ul className={styles.ul}>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className={styles.box}>
            <h6 className={styles.heading}>Help & Support</h6>
            <p className={styles.paragraph}>Send Your Email to join </p>
            <div className={styles.inputContainer}>
              <input
                type="text"
                placeholder="Enter Your Email"
                className={styles.input}
              />
              <button className={styles.button}>Send</button>
            </div>
          </div>
        </div>
        <p className={styles.paragraph} style={{ textAlign: "center" }}>
          Copyright 2024.All Right Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
