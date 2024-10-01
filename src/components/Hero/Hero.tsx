import { motion } from "framer-motion";
import { Button } from "@/components/reusableComponent/Button/Button";
import confetti from "canvas-confetti";
import { useRef } from "react";
import style from "./styled.module.css";
import { MotionDiv } from "../reusableComponent/MotionDiv/MotionDiv";
import { useParallaxScroll } from "@/hooks/useParallax";

type ButtonType = "link" | "custom" | "download";

interface ButtonData {
  type: ButtonType;
  url: string;
  src: string;
  alt: string;
}

export const Hero: React.FC = () => {
  const confettiRef = useRef<HTMLDivElement>(null);

  const handleConfetti = () => {
    if (confettiRef.current) {
      confetti({
        particleCount: 100,
        spread: 80,
        angle: 65,
        shapes: [
          confetti.shapeFromText({ text: "👋", scalar: 20 }),
          confetti.shapeFromText({ text: "👋", scalar: 20 }),
        ],
        origin: {
          x:
            (confettiRef.current.offsetLeft +
              confettiRef.current.offsetWidth / 2) /
            window.innerWidth,
          y:
            (confettiRef.current.offsetTop +
              confettiRef.current.offsetHeight / 1) /
            window.innerHeight,
        },
      });
    }
  };

  const buttonData: Array<ButtonData> = [
    {
      type: "download",
      url: "https://raw.githubusercontent.com/OleksandrBuhai/PortfolioWeb/main/src/assets/resume/Oleksandr_Buhai_CV.pdf",
      src: "/img/socialneb/assets/cv-icon.png",
      alt: "Download CV",
    },
    {
      type: "link",
      url: "https://www.linkedin.com/in/oleksandrbuhai",
      src: "/img/socialneb/assets/linkedin.png",
      alt: "LinkedIn",
    },
    {
      type: "link",
      url: "https://github.com/OleksandrBuhai",
      src: "/img/socialneb/assets/github.png",
      alt: "GitHub",
    },
  ];

  const { ref } = useParallaxScroll(120, 2000, -40, 500, 20, -2000);

  return (
    <motion.div className={style.main} id="Main" ref={ref}>
      <motion.div className={`${style.planet} ${style.planet1}`} />
      <motion.div className={`${style.planet} ${style.planet2}`} />
      <motion.div className={`${style.planet} ${style.planet3}`} />
      <motion.div className={`${style.planet} ${style.planet4}`} />

      <div className={style.centralElement} />

      <motion.div className={style.containerContent}>
        <MotionDiv delay={0.2} triggerRef={ref} classname={style.text}>
          <h3 className={style.greetText}>
            Hi there{" "}
            <span
              className={style.greet}
              ref={confettiRef}
              onClick={handleConfetti}
            >
              👋
            </span>
          </h3>
          <h3 className={style.introText}>I am Oleksandr Buhai</h3>
          <h3 className={style.title}>
            {"Front-end developer".split("").map((child, idx) => (
              <span className={style.hoverText} key={idx}>
                {child}
              </span>
            ))}
          </h3>
          <div className={style.buttonContainer}>
            {buttonData.map((button, index) => (
              <Button key={index} type={button.type} url={button.url}>
                <motion.div
                  className={style.iconContainer}
                  whileHover={{ scale: 1.1 }}
                >
                  <img
                    src={button.src}
                    alt={button.alt}
                    width={30}
                    height={30}
                  />
                </motion.div>
              </Button>
            ))}
          </div>
        </MotionDiv>
      </motion.div>
    </motion.div>
  );
};
