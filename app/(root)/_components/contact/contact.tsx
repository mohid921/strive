"use client";

import React, { useLayoutEffect } from "react";

import styles from "./contact.module.css";
import { Location, Mail, Phone } from "@/components/icons";

import AOS from "aos";

const Contact = () => {
  useLayoutEffect(() => {
    AOS.init({ once: false, offset: 0 });
  }, []);

  return (
    <div className={styles.grid}>
      <form data-aos="fade-right">
        <div className={styles.inputContainer}>
          <input
            type="text"
            placeholder="Enter Your Name"
            className={styles.input}
          />
          <input
            type="text"
            placeholder="Enter Your Email"
            className={styles.input}
          />
          <input
            type="text"
            placeholder="Enter Your Phone Number"
            className={styles.input}
          />
          <textarea
            placeholder="Type your message..."
            className={styles.input}
            rows={8}
          />
        </div>
        <button className={styles.button}>Submit</button>
      </form>

      <div data-aos="fade-left" className={styles.box}>
        <h6 className={styles.heading}>Get in touch!</h6>
        <div className={styles.icon}>
          <Location size={40} />
          <div>
            <span className={styles.span}>Location</span>
            <p className={styles.paragraph}>123 Street, New York, USA</p>
          </div>
        </div>
        <div className={styles.icon}>
          <Mail size={40} />
          <div>
            <span className={styles.span}>Mail</span>
            <p className={styles.paragraph}>abc@gmail.com</p>
          </div>
        </div>
        <div className={styles.icon}>
          <Phone size={40} />
          <div>
            <span className={styles.span}>Phone Number</span>
            <p className={styles.paragraph}>+1 234 567 789</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
