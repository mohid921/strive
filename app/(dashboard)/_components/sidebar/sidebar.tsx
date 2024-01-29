"use client";

import { useScreen } from "@/hooks/use-screen";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import styles from "./sidebar.module.css";
import { ChevronDown, Menu, X, User } from "lucide-react";
import clsx from "clsx";
import { Links } from "../../layout";
import Link from "next/link";

interface SideBarProps {
  Links: Links[];
}

const SideBar = ({ Links }: SideBarProps) => {
  const screenSizeBoolean = useScreen();

  const [activeMenu, setActiveMenu] = useState(screenSizeBoolean);
  const [openDropDown, setOpenDropDown] = useState<number | null>(null);

  const router = useRouter();

  return (
    <>
      {activeMenu ? (
        <div className={clsx(styles.mainContainer, "no-scrollbar")}>
          <div className={styles.container}>
            <div className={styles.wrapper}>
              <div className={styles.imageCover}>
                <Image
                  src="/logo.png"
                  alt="logo"
                  width={170}
                  height={50}
                  style={{ objectFit: "contain", filter: "invert(1)" }}
                />
              </div>
              <button
                onClick={() =>
                  !screenSizeBoolean &&
                  setActiveMenu((prevActiveMenu) => !prevActiveMenu)
                }
                className={styles.menu}
              >
                <X size={30} />
              </button>
            </div>

            <div className={styles.links}>
              {Links.map((link, index) => (
                <div
                  key={link.path || index + link.name}
                  className={styles.linkWrapper}
                >
                  {link?.path ? (
                    <div className={styles.linkCover}>
                      <Link href={link.path} className={styles.link}>
                        <link.Icon size={30} />
                        <span>{link.name}</span>
                      </Link>
                    </div>
                  ) : (
                    <>
                      <div
                        onClick={() =>
                          setOpenDropDown((prev) =>
                            prev === index ? null : index
                          )
                        }
                        className={styles.linkCover}
                      >
                        <div className={styles.link}>
                          <link.Icon size={30} />
                          <span>{link.name}</span>
                        </div>
                        <ChevronDown
                          size={30}
                          style={{
                            rotate: openDropDown === index ? "180deg" : "0deg",
                            transition: "all 0.25sec ease-in-out",
                          }}
                        />
                      </div>
                      {openDropDown === index && (
                        <div className={styles.dropDownLinks}>
                          {link?.dropdown?.map((item, index) => (
                            <Link
                              key={item.path}
                              href={item.path}
                              className={styles.dropDownLink}
                            >
                              <item.Icon size={30} />
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
            <div className={styles.profile}>
              <Image
                src="/profile.png"
                alt="profile"
                width={50}
                height={50}
                style={{ objectFit: "cover", borderRadius: "99999px" }}
              />
              <p className={styles.profileText}>Jane Copper</p>
            </div>
          </div>
        </div>
      ) : (
        <div
          onClick={() => setActiveMenu((prev) => !prev)}
          style={{ padding: "1rem" }}
        >
          <Menu size={24} />
        </div>
      )}
    </>
  );
};

export default SideBar;
