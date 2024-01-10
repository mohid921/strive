"use client";

import React, { useLayoutEffect } from "react";
import Image from "next/image";

import { Bag, Atom } from "@/components/icons";

import styles from "./mentor-car.module.css";

import AOS from "aos";

const MentorCard = () => {
  useLayoutEffect(() => {
    AOS.init({ once: false, offset: 0 });
  }, []);

  return (
    <div data-aos="zoom-in">
      <div className={styles.imageContainer}>
        <Image
          src="/mentor.png"
          alt="mentor"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={styles.wrapper}>
        <h6 className={styles.heading}>Malkova Mike</h6>
        <div className={styles.cover}>
          <div className={styles.flex}>
            <Bag size={20} className={styles.icon} />
            <span className={styles.categoryText}>Techcrunch</span>
          </div>

          <div className={styles.flex}>
            <Atom size={20} className={styles.icon} />
            <span className={styles.categoryText}>Birmingham University</span>
          </div>
        </div>
        <p className={styles.paragraph}>
          Sed ut perspiciatis unde omnis iste natus error voluptatem accusantum
          doloremq laudantium
        </p>
        <button className={styles.button}>Join Waitlist</button>
      </div>
    </div>
  );
};

export default MentorCard;
