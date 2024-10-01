import { TitleHeader } from "@/components/reusableComponent/TitleHeader/TitleHeader";
import style from "./style.module.css";

export const About: React.FC = () => {
  const description =
    "Experienced Front-End Developer with a professional background in crafting complex. My primary JavaScript framework is React, and I'm deeply immersed in interaction design, web standards, usability, and application architecture.";

  return (
    <div className={style.about}>
      <TitleHeader headerText={"Who am I?"} />
      <span className={style.hoverText}>{description}</span>
    </div>
  );
};
