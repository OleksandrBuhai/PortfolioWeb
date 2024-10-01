"use client";
import { useState, useEffect } from "react";
import style from "./style.module.css";
import { TitleHeader } from "@/components/reusableComponent/TitleHeader/TitleHeader";

interface ExperienceItem {
  title: string;
  years: string;
  description: string;
}

export const Experience: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedExperience, setSelectedExperience] =
    useState<ExperienceItem | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const truncateText = (text: string, maxLength: number): string => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  const handleShowMore = (experience: ExperienceItem): void => {
    setSelectedExperience(experience);
    setShowModal(true);
  };

  const experience: ExperienceItem[] = [
    {
      title: "Giftify",
      years: "08.2023 - 09.2024",
      description: `Front-End Developer\nDevelop a service for personalized online greetings and quests using TypeScript, Next.js, React, SCSS, and TailwindCSS. Ensure responsive design for seamless user experiences across devices. Participate in Scrum ceremonies and collaborate with cross-functional teams. Contribute to project architecture discussions and decisions. Conduct code reviews to maintain high code quality.\n\nFocus:\nDeliver engaging, high-quality user experiences, Maintain performance and scalability, Enhance development processes and team collaboration.`,
    },
    {
      title: "Junfolio",
      years: "04.2024 - 08.2024",
      description: `Volunteering Front-End Developer at Junfolio.top\nResponsibilities: Implement features and enhancements for a service that helps junior software developers gain experience. Collaborate with developers and designers to ensure cohesive and efficient project delivery. Utilize Next.js, React.js, React Hooks, styled-components, and JavaScript for development. Ensure adaptive design for optimal user experience across devices.\n\nFocus:\nSupport junior developers in gaining practical experience. Collaborate effectively with a cross-functional team. Deliver functional and user-friendly features.`,
    },
    {
      title: "Berlin Labs LLC",
      years: "04.2023 - 08.2023",
      description: `Front-End Developer\nDeveloped landing pages and implemented features to improve UX/UI on client products. Collaborated with cross-functional teams to ensure high-quality project delivery. Utilized HTML, CSS, JavaScript, React.js. Conducted thorough testing and debugging to maintain code quality.\n\nFocus: Deliver high-quality, user-friendly landing pages. Enhance user experience and interface design. Collaborate effectively with team members to meet project goals.`,
    },
    {
      title: "Independent Contractor Front-End Developer",
      years: "01.2023 - 04.2023",
      description: `Working as an independent contractor, focusing on delivering front-end development solutions for various clients. Responsibilities include creating responsive and user-friendly interfaces using modern technologies such as React.js, Next.js, TypeScript, and CSS frameworks. Engaging in requirements gathering, UI/UX design, and ensuring high code quality and performance. Demonstrating flexibility and adaptability to meet diverse client needs and project specifications.\n\nFocus:\nProvide high-quality front-end solutions, Adapt to different project requirements, Maintain strong client communication, Ensure timely and efficient delivery of projects.`,
    },
  ];

  return (
    <div className={style.credentials} id="Experience">
      <TitleHeader headerText={"Experience"} />
      {experience.map((el, index) => {
        const truncatedDescription = isMobile
          ? truncateText(el.description, 20)
          : el.description;

        return (
          <div className={style.blocksWrapper} key={index}>
            <div className={style.blocks}>
              <span className={style.yearsText}>{el.title}</span>
              <span className={style.yearsText}>{el.years}</span>
              <span style={{ color: "#EE6D52", fontWeight: "400" }}>
                {truncatedDescription}
              </span>
              {isMobile &&
                truncatedDescription.length < el.description.length && (
                  <button
                    className={style.showMoreButton}
                    onClick={() => handleShowMore(el)}
                  >
                    Show More
                  </button>
                )}
            </div>
          </div>
        );
      })}

      {showModal && selectedExperience && (
        <div className={style.modalOverlay} onClick={() => setShowModal(false)}>
          <div
            className={style.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{selectedExperience.title}</h2>
            <span>{selectedExperience.years}</span>
            <p>{selectedExperience.description}</p>
            <button onClick={() => setShowModal(false)}>X</button>
          </div>
        </div>
      )}
    </div>
  );
};
