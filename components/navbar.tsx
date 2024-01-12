import React from "react";

import styles from "@/styles/navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.wrapper}>
        <div>
          <Image
            src="/logo.png"
            alt="logo"
            width={170}
            height={50}
            style={{ objectFit: "contain" }}
          />
        </div>
        <ul className={styles.ul}>
          <li>Home</li>
          <li>Find Mentor</li>
          <li>Events</li>
          <li>About Us</li>
          <li>Career</li>
        </ul>
        <a href="#" className={styles.link}>
          Login/Signup
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
