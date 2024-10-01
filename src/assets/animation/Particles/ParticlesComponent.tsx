"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine, ISourceOptions } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import style from "./style.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

interface ParticleContainerProps {
  id: string;
}

export const ParticleContainer: React.FC<ParticleContainerProps> = ({ id }) => {
  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {},
    [],
  );

  const heroOptions: ISourceOptions = {
    autoPlay: true,

    fullScreen: {
      enable: false,
      zIndex: -1,
    },

    detectRetina: true,
    fpsLimit: 120,

    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "attract",
        },
        onHover: {
          enable: true,
          mode: "grab",
        },
        resize: true,
      },
    },

    particles: {
      collisions: {
        enable: true,
        mode: "bounce",
      },
      color: {
        value: "#fff",
      },
      move: {
        angle: {
          offset: 0,
          value: 90,
        },
        center: {
          x: 50,
          y: 50,
          mode: "percent",
          radius: 0,
        },
        direction: "none",
        drift: 0,
        enable: true,
        random: false,
        size: false,
        speed: 0.8,
        outMode: "bounce",
      },
      number: {
        limit: 0,
        value: 100,
      },

      opacity: {
        random: {
          enable: true,
          minimumValue: 0.4,
        },
        value: 0.6,
        animation: {
          count: 0,
          enable: true,
          speed: 0.2,
          decay: 0,
          sync: true,
          destroy: "none",
          startValue: "random",
        },
      },

      shape: {
        type: "character",
        character: [
          {
            fill: true,
            font: "Font Awesome 6 Brands",
            style: "",
            value: ["\uf13b"],
            weight: "400",
          },
          {
            fill: true,
            font: "Font Awesome 6 Brands",
            style: "",
            value: ["\uf38b"],
            weight: "400",
          },
          {
            fill: true,
            font: "Font Awesome 6 Brands",
            style: "",
            value: ["\uf3b9"],
            weight: "400",
          },
          {
            fill: true,
            font: "Font Awesome 6 Brands",
            style: "",
            value: ["\uf41b"],
            weight: "400",
          },
          {
            fill: true,
            font: "Font Awesome 5 Brands",
            style: "",
            value: ["\uf3b9"],
            weight: "400",
          },
          {
            fill: true,
            font: "Font Awesome 5 Brands",
            style: "",
            value: ["\uf841"],
            weight: "400",
          },
        ],
      },

      size: {
        random: {
          enable: true,
          minimumValue: 25,
        },
        animation: {
          count: 0,
          enable: true,
          speed: 0.2,
          decay: 0,
          sync: true,
          destroy: "none",
          startValue: "random",
        },
      },

      lineLinked: {
        blink: false,
        color: {
          value: "#ffffff",
        },
        consent: true,
        distance: 100,
        enable: true,
        frequency: 10,
        opacity: 0.4,
        width: 1,
      },
    },
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
    smooth: true,
  };

  return (
    <Particles
      className={style.particlesBackground}
      id={id}
      init={particlesInit}
      loaded={particlesLoaded}
      options={heroOptions}
    />
  );
};
