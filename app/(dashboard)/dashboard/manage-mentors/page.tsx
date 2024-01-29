import { Search } from "lucide-react";
import React from "react";

import styles from "./manage-mentor.module.css";
import MentorCard from "@/app/(root)/_components/mentor-card/mentor-card";

const ManageMentor = () => {
  const arr = new Array(20).fill(0);

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.search}>
          <div className={styles.searchIconCover}>
            <Search size={20} className={styles.searchIcon} />
          </div>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search..."
          />
        </div>
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
      <div className={styles.wrapper}>
        <div className={styles.mentorGrid}>
          {arr.map((item, index) => (
            <MentorCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageMentor;
