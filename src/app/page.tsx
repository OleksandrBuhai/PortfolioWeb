"use client";

import { AboutMe } from "@/components/AboutMe/About";
import { Contact } from "@/components/Contact/Contact";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { ProjectsPage } from "@/components/ProjectsPage/ProjectsPage";
import { useRef } from "react";
import { Experience } from "@/components/Experience/Experience";

function useParallax(
  value: MotionValue<number>,
  startDistance: number,
  endDistance: number,
) {
  return useTransform(value, [0, 1], [-startDistance, endDistance]);
}

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const heroY = useParallax(scrollYProgress, 0, 500);
  const aboutY = useParallax(scrollYProgress, 0, -100);

  return (
    <main ref={ref}>
      <Header />
      <motion.div style={{ y: heroY }}>
        <Hero />
      </motion.div>
      <motion.div style={{ y: aboutY }}>
        <AboutMe />
      </motion.div>
      <Experience />
      <ProjectsPage />
      <Contact />
      <Footer />
    </main>
  );
}
