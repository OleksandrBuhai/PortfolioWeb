"use client";

import { MotionDiv } from "@/components/reusableComponent/MotionDiv/MotionDiv";
import { motion } from "framer-motion";
import { useRef } from "react";
import { About } from "./About/About";
import { Credentials } from "./Credential/Credentials";
import { SkillDescription } from "./Skill/SkillDescription";
import style from "./style.module.css";

const Description: React.FC = () => {
  const ref = useRef(null);

  return (
    <MotionDiv classname={style.wrapper} delay={0.3} triggerRef={ref}>
      <div className={style.descriptionContainer}>
        <MotionDiv classname={style.leftColumn} delay={0.3} triggerRef={ref}>
          <About />
        </MotionDiv>
        <motion.div className={style.rightColumn} ref={ref}>
          <Credentials />
        </motion.div>
      </div>
      <div>
        <SkillDescription />
      </div>
    </MotionDiv>
  );
};

export default Description;
