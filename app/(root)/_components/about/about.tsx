"use client";

import Image from "next/image";
import styles from "./about.module.css";
import { useLayoutEffect } from "react";

import AOS from "aos";
import clsx from "clsx";

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
                    <div className={clsx(styles.imageGroup, styles.hidden)}>
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
            <div className={styles.contentCover}>
              <h6 className={styles.heading}>Founders</h6>
              <p className={styles.paragraph}>
                Blessed Pepple Nana Yeboah, Akoto-Bamfo & Obinna Okereke
              </p>
            </div>
            <div className={styles.contentCover}>
              <h6 className={styles.heading}>Mission</h6>
              <p className={styles.paragraph}>
                As a hopeful international student in the UK, our dream of
                securing meaningful employment post-graduation were shattered,
                and the disappointment was overwhelming. Despite possessing the
                right skills, we faced the harsh reality of the UK job market,
                leaving us uncertain about my future. So, we empathize deeply
                with the struggles countless international students like me
                endure. This shared journey fuels our passion to empower fellow
                international students. To transform uncertainties into
                opportunities.
              </p>
            </div>
            <div className={styles.contentCover}>
              <h6 className={styles.heading}>Vision</h6>
              <p className={styles.paragraph}>
                We will be assembling the best international graduates from
                companies across the UK to provide support for current
                international students and give them the necessary guidance
                required to navigate the UK Job market. We believe the best
                people to provide the key information needed to unlock their
                career potential in the UK are people who have gone through the
                process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
