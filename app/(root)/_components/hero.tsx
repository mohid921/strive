"use client";

import React, { useLayoutEffect } from "react";
import Image from "next/image";
import clsx from "clsx";
import { Mentor, User } from "@/components/icons";

import styles from "./hero.module.css";

import AOS from "aos";

const Hero = () => {
  useLayoutEffect(() => {
    AOS.init({ once: false, offset: 0 });
  }, []);

  return (
    <>
      <div className={styles.blueBg}>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div data-aos="fade-right" className={styles.content}>
              <h3 className={clsx(styles.heading, "font-inter")}>
                <span className={styles.underline}>Mentorship</span> Hub Connect
                with Mentors
              </h3>
              <p className={styles.paragraph}>
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className={styles.cover}>
                <button className={clsx(styles.button, styles.buttonNormal)}>
                  <Mentor size={24} />
                  <span>Mentor Login</span>
                </button>

                <button className={clsx(styles.button, styles.buttonOutline)}>
                  <User size={24} />
                  <span>Student Login/Signup</span>
                </button>
              </div>
            </div>
            <div data-aos="fade-left" className={styles.imageContainer}>
              <Image
                src="/objects.png"
                alt="objects"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </div>
      <picture>
        <img src="/Vector.png" alt="" style={{ width: "100%" }} />
      </picture>
    </>
  );
};

export default Hero;
