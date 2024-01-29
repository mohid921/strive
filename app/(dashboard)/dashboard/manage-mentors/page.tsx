"use client";

import { Search } from "lucide-react";
import React from "react";

import styles from "./manage-mentor.module.css";
import MentorCard from "../../_components/mentor-card/mentor-card";
import Select from "@/components/Select";
import { countriesList } from "@/constants/countries";
import { universitiesList } from "@/constants/universities";
import { schoolList } from "@/constants/school";

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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: "1rem",
          }}
        >
          <h3 style={{ color: "#121212", fontSize: "38px", fontWeight: 500 }}>
            Manage Mentors
          </h3>
          <div style={{ display: "flex", gap: "1rem" }}>
            <Select
              placeholder="Area of study"
              onChange={() => {}}
              label=""
              options={schoolList}
              padding={".15rem 0"}
            />
            <Select
              placeholder="Country of Origin"
              onChange={() => {}}
              label=""
              options={countriesList}
              padding={".15rem 0"}
            />
            <Select
              placeholder="School of study"
              onChange={() => {}}
              label=""
              options={universitiesList}
              padding={".15rem 0"}
            />
            <Select
              placeholder="company"
              onChange={() => {}}
              label=""
              options={[
                { label: "NHS", value: "e" },
              ]}
              padding={".15rem 0"}
            />
          </div>
        </div>
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
