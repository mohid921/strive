"use client";

import Image from "next/image";
import React, { useLayoutEffect } from "react";

import AOS from "aos";

const Company = ({ path }: { path: string }) => {
  useLayoutEffect(() => {
    AOS.init({ once: false, offset: 0 });
  }, []);
  const box = {
    boxShadow: "0px 0px 22px 0px rgba(0, 0, 0, 0.18)",
    borderRadius: ".75rem",
    padding: "2rem 1rem",
  };

  return (
    <div style={box} data-aos="zoom-in-down">
      <Image
        src={`/logos/${path}`}
        alt="logo"
        width={150}
        height={40}
        style={{ objectFit: "contain" }}
      />
    </div>
  );
};

export default Company;
