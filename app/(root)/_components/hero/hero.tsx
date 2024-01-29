"use client";

import React, { useLayoutEffect } from "react";
import Image from "next/image";
import clsx from "clsx";
import { Mentor, User } from "@/components/icons";

import styles from "./hero.module.css";

import AOS from "aos";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

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
                Power your career in the UK by connecting with an experienced
                International Graduate
              </h3>
              <p className={styles.paragraph}>
                Looking to gain employment in the UK? Connect with experienced
                International graduates who knows what it takes to build a
                successful career in the UK. they will share with you valuable
                Insights on how to navigated the UK job market and will provide
                you with the intel on their journey through various routes
                including Graduate visas, entrepreneurship etc
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
            <Swiper
              modules={[Pagination, Autoplay]}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              loop={true}
              style={{ width: "100%", height: "100%" }}
            >
              <SwiperSlide>
                <div className={styles.imageContainer}>
                  <Image
                    src="/objects.png"
                    alt="objects"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.imageContainer}>
                  <Image
                    src="/objects.png"
                    alt="objects"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.imageContainer}>
                  <Image
                    src="/objects.png"
                    alt="objects"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </SwiperSlide>
            </Swiper>
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
