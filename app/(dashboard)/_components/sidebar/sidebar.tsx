"use client";

import { useScreen } from "@/hooks/use-screen";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import styles from "./sidebar.module.css";
import { ChevronDown, Menu, X } from "lucide-react";
import clsx from "clsx";
import Link from "next/link";

import {
  Calendar,
  GraduationCap,
  LayoutDashboard,
  ScrollText,
  UserPlus,
  User
} from "lucide-react";

const Links = [
  {
    Icon: User,
    name: "Mentors",
    dropdown: [
      {
        Icon: UserPlus,
        name: "Add Mentor",
        path: "/dashboard/add-mentor",
      },
      {
        Icon: LayoutDashboard,
        name: "Manage Mentors",
        path: "/dashboard/manage-mentors",
      },
    ],
  },

  {
    Icon: GraduationCap,
    name: "Manage Students",
    path: "/dashboard/manage-students",
  },
  {
    Icon: Calendar,
    name: "Manage Events",
    path: "/dashboard/manage-events",
  },

  {
    Icon: ScrollText,
    name: "Write Blog/News",
    path: "/dashboard/write-blog",
  },
];

const SideBar = () => {
  const screenSizeBoolean = useScreen();

  const [activeMenu, setActiveMenu] = useState(screenSizeBoolean);
  const [openDropDown, setOpenDropDown] = useState<number | null>(null);
  const [openDropDown2, setOpenDropDown2] = useState(false);
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
                              <span>{item.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
            <div style={{ position: "relative", width: "100%" }}>
              <div
                className={styles.profile}
                onClick={() => setOpenDropDown2((prev) => !prev)}
              >
                <Image
                  src="/profile.png"
                  alt="profile"
                  width={50}
                  height={50}
                  style={{ objectFit: "cover", borderRadius: "99999px" }}
                />
                <p className={styles.profileText}>Jane Copper</p>
              </div>
              {openDropDown2 && (
                <div
                  style={{
                    zIndex: 999999,
                    position: "absolute",
                    top: "-2rem",
                    right: "0",
                    left: "0",
                    borderRadius: "0.5rem",
                    width: "11rem",
                    fontWeight: 400,
                    backgroundColor: "#ffffff",
                  }}
                >
                  <div
                    style={{ paddingTop: "0.25rem", paddingBottom: "0.25rem" }}
                  >
                    <button
                      style={{
                        display: "block",
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        paddingLeft: "1rem",
                        paddingRight: "1rem",
                        fontSize: "0.875rem",
                        lineHeight: "1.25rem",
                        color: "black",
                        background: "transparent",
                        width: "100%",
                        cursor: "pointer",
                      }}
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              )}
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
