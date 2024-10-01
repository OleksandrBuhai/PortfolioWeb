import { motion } from "framer-motion";
import { fadeIn } from "@/assets/animation/fadeIn/fadeIn";
import { useInView } from "framer-motion";
import React from "react";

interface MotionDivProps {
  children: React.ReactNode;
  delay: number;
  triggerRef: React.RefObject<HTMLDivElement>;
  classname?: string;
}

export const MotionDiv: React.FC<MotionDivProps> = ({
  children,
  delay,
  triggerRef,
  classname,
}) => {
  const isInView = useInView(triggerRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      variants={fadeIn("up", delay)}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className={classname}
    >
      {children}
    </motion.div>
  );
};
