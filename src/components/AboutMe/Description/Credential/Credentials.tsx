"use client";

import React, { useState } from "react";
import style from "./style.module.css";
import { TitleHeader } from "@/components/reusableComponent/TitleHeader/TitleHeader";

export const Credentials: React.FC = () => {
  const credential = [
    {
      title: "IT-Incubator",
      years: "2022-2023",
      description: "Front End Developer",
      img: "/img/credentialsImg/itIncubator.svg",
    },
    {
      title: "NTUU KPI",
      years: "2015-2019",
      description: "Bachelor in Automation Engineering",
      img: "/img/credentialsImg/kpi-big-logo.png",
    },
  ];

  return (
    <div className={style.credentials}>
      <TitleHeader headerText={"Credentials"} />
      <div className={style.blocksContainer}>
        {credential.map((el, index) => {
          return (
            <div
              className={style.blocks}
              key={index}
              style={{
                backgroundImage: `url(${el.img})`,
                backgroundSize: "cover",
              }}
            >
              <span>{el.title}</span>
              <span>{el.years}</span>
              <span style={{ color: "#EE6D52", fontWeight: "700" }}>
                {el.description}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
