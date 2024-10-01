import { MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function useParallax(
  value: MotionValue<number>,
  startDistance: number,
  endDistance: number,
) {
  return useTransform(value, [0, 1], [-startDistance, endDistance]);
}

function useParallaxRev(
  value: MotionValue<number>,
  startDistance: number,
  endDistance: number,
) {
  return useTransform(value, [0, 1], [startDistance, -endDistance]);
}

// Update hook to accept custom distances via props
export function useParallaxScroll(
  xStart: number,
  xEnd: number,
  yStart: number,
  yEnd: number,
  zStart: number,
  zEnd: number,
) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const x = useParallaxRev(scrollYProgress, xStart, xEnd);
  const y = useParallax(scrollYProgress, yStart, yEnd);
  const z = useParallax(scrollYProgress, zStart, zEnd);

  return { ref, x, y, z };
}
