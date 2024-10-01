import React from "react";
import style from "./style.module.css";
import Description from "./Description/Description";
import { ParticleContainer } from "@/assets/animation/Particles/ParticlesComponent";

export const AboutMe: React.FC = () => {
  return (
    <div className={style.container} id={"About"}>
      <div style={{ position: "absolute", width: "100%", height: "auto" }}>
        <ParticleContainer id={"particles"} />
      </div>
      <div className={style.aboutmeContainer}>
        <div className={style.description}>
          <Description />
        </div>
      </div>
    </div>
  );
};
