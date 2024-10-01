import { useEffect, useState } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import style from "./SkillDescription.module.css";

export const SkillDescription = () => {
  const skillText = [
    { title: "React", img: "/img/colorful/react.svg", progress: 90 },
    { title: "TypeScript", img: "/img/colorful/ts.svg", progress: 90 },
    { title: "JavaScript", img: "/img/colorful/js.svg", progress: 90 },
    {
      title: "TailwindCSS",
      img: "/img/colorful/tailwindCSS.svg",
      progress: 78,
    },
    { title: "HTML", img: "/img/colorful/html.svg", progress: 90 },
    { title: "CSS", img: "/img/colorful/css.svg", progress: 84 },
    { title: "NextJS", img: "/img/colorful/nextJS.svg", progress: 90 },
    { title: "Redux", img: "/img/colorful/redux.svg", progress: 81 },
    { title: "Git", img: "/img/colorful/git.svg", progress: 82 },
  ];

  const [progressValues, setProgressValues] = useState(skillText.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setProgressValues((prevValues) =>
        prevValues.map((value, index) =>
          value < skillText[index].progress ? value + 5 : value,
        ),
      );
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={style.wrapper}>
      <h3 className={style.header}>Skills</h3>
      <div className={style.gridContainer}>
        {skillText.map((el, index) => {
          return (
            <div key={index} className={style.circular}>
              <CircularProgressbarWithChildren
                value={progressValues[index]}
                minValue={0}
                styles={buildStyles({
                  strokeLinecap: "butt",
                  textSize: "16px",
                  pathColor: `rgba(238, 109, 82, ${progressValues[index] / 1})`,
                  textColor: "white",
                  trailColor: "black",
                  backgroundColor: "white",
                })}
              >
                <div className={style.gridItem}>
                  <img style={{ width: "2rem" }} src={el.img} />
                  <span>{el.title}</span>
                </div>
              </CircularProgressbarWithChildren>
            </div>
          );
        })}
      </div>
    </div>
  );
};
