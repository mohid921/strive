"use client";

import Image from "next/image";
import styles from "./about.module.css";
import { useLayoutEffect } from "react";

import AOS from "aos";

export default function About() {
  useLayoutEffect(() => {
    AOS.init({ once: false, offset: 0 });
  }, []);
  return (
    <div className={styles.bg}>
      <div className="container">
        <h3 className={styles.title}>About us</h3>
        <div className={styles.container}>
          {/* images */}
          <div data-aos="fade-down-right">
            <div className={styles.wrapper}>
              <div className={styles.wrapperInside}>
                <div className={styles.flex}>
                  <div className={styles.imageWrapper}>
                    <div className={styles.imageGroup}>
                      <div className={styles.imageCover}>
                        <Image
                          src="/person.png"
                          alt=""
                          width={176}
                          height={256}
                          className={styles.image}
                        />
                      </div>
                      <div className={styles.imageCover}>
                        <Image
                          src="/person.png"
                          alt=""
                          width={176}
                          height={256 * 0.5}
                          className={styles.image}
                        />
                      </div>
                    </div>
                    <div className={styles.imageGroup}>
                      <div className={styles.imageCover}>
                        <Image
                          src="/person.png"
                          alt=""
                          width={176}
                          height={256 * 0.5}
                          className={styles.image}
                        />
                      </div>
                      <div className={styles.imageCover}>
                        <Image
                          src="/person.png"
                          alt=""
                          width={176}
                          height={256}
                          className={styles.image}
                        />
                      </div>
                    </div>
                    <div className={styles.imageGroup}>
                      <div className={styles.imageCover}>
                        <Image
                          src="/person.png"
                          alt=""
                          width={176}
                          height={256}
                          className={styles.image}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* content */}
          <div data-aos="fade-down-left" className={styles.content}>
            <div>
              <h6 className={styles.heading}>Founders</h6>
              <p className={styles.paragraph}>
                Sed ut perspiciatis unde omnis iste natus accusantium doloremqu
                laudantium, totam veritatis et quasi architecto beatae vitae
                dicta sunt explicabo.
              </p>
            </div>
            <div>
              <h6 className={styles.heading}>Mission</h6>
              <p className={styles.paragraph}>
                Sed ut perspiciatis unde omnis iste natus accusantium doloremqu
                laudantium, totam veritatis et quasi architecto beatae vitae
                dicta sunt explicabo.
              </p>
            </div>
            <div>
              <h6 className={styles.heading}>Vision</h6>
              <p className={styles.paragraph}>
                Sed ut perspiciatis unde omnis iste natus accusantium doloremqu
                laudantium, totam veritatis et quasi architecto beatae vitae
                dicta sunt explicabo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
