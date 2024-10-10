"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import style from "./style.module.css";
import Image from "next/image";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ProjectsCard: React.FC = () => {
  const projectSlides = [
    {
      images: [
        {
          name: "Junfolio",
          picture: "/img/projectsImg/junfolio.png",
          text: "Platform for hiring developer's",
          gitHubLink: "https://junfolio.top",
        },
        {
          name: "Caption Builder",
          picture: "/img/projectsImg/caption.png",
          text: "Caption builder application for your video.",
          gitHubLink: "https://github.com/OleksandrBuhai/Portfolio",
        },
        {
          name: "Giftify",
          picture: "/img/projectsImg/giftify.png",
          text: "Service for personalized online greetings and quests",
          gitHubLink: "https://giftify.quest/",
        },
        {
          name: "Gym Website",
          picture: "/img/projectsImg/GymWebSite.png",
          text: "Gym website example.",
          gitHubLink: "https://github.com/OleksandrBuhai/GymSite",
        },
      ],
    },
    {
      images: [
        {
          name: "eCommerce",
          picture: "/img/projectsImg/eCommerce_001.png",
          text: "eCommerce website.",
          gitHubLink: "https://github.com/OleksandrBuhai/eCommerce",
        },
        {
          name: "Ski Resort",
          picture: "/img/projectsImg/SkiResort.png",
          text: "Ski resort landing page.",
          gitHubLink: "https://github.com/OleksandrBuhai/SkiResort",
        },
        {
          name: "Influexa",
          picture: "/img/projectsImg/influexa.png",
          text: "Landing page",
          gitHubLink: "https://github.com/OleksandrBuhai/Influenser",
        },
      ],
    },
  ];

  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className={style.swiperContainer}
    >
      {projectSlides.map((slide, slideIndex) => (
        <SwiperSlide key={slideIndex}>
          <div className={style.gridContainer}>
            {slide.images.map((project, projectIndex) => (
              <div className={style.imageContainer} key={projectIndex}>
                <div className={style.imageWrapper}>
                  <Image
                    src={project.picture}
                    width={300}
                    height={500}
                    alt={project.name}
                    className={style.image}
                  />
                  <div className={style.overlay}></div>
                  <div className={style.titleContainer}>
                    <div className={style.title}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "1rem",
                        }}
                      >
                        <span className={style.titlePart1}>{project.name}</span>
                        <span className={style.titlePart2}>{project.text}</span>
                      </div>
                      <a
                        href={project.gitHubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className={style.titleIcon}>
                          <FontAwesomeIcon icon={faLink} />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
