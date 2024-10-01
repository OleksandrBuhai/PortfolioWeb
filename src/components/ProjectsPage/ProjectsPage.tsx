"use client";

import { fadeIn } from "@/assets/animation/fadeIn/fadeIn";
import { motion } from "framer-motion";
import { ProjectsCard } from "./ProjectCard/ProjectCard";
import style from "./style.module.css";

export const ProjectsPage: React.FC = () => {
  return (
    <div className={style.container} id="Projects">
      <div className={style.floatingShape}></div>
      <div className={style.textContainer}>
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className={style.headerText}
        >
          My work <span className={style.textAccent}>.</span>
        </motion.h2>
        <motion.span
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className={style.decsriptionProject}
        >
          Throughout my career journey, I have worked on a variety of projects
          that have helped me refine my skills as a developer. These projects
          showcase my ability to solve complex problems, collaborate with teams,
          and continuously grow as a professional in the field of web
          development.
        </motion.span>
      </div>
      <motion.div
        variants={fadeIn("down", 0.6)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className={style.sliderContainer}
      >
        <ProjectsCard />
      </motion.div>
    </div>
  );
};
