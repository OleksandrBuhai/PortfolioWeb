"use client";

import { useEffect, useState } from "react";
import style from "./style.module.css";

export const Header: React.FC = () => {
  const [activeId, setActiveId] = useState<string | undefined>(undefined);

  const values = [
    { id: 1, text: "Main", link: "#Main" },
    { id: 2, text: "About", link: "#About" },
    { id: 3, text: "Experience", link: "#Experience" },
    { id: 4, text: "Projects", link: "#Projects" },
    { id: 5, text: "Contact", link: "#Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const elements = ["Main", "About", "Experience", "Projects", "Contact"];
      const offset = window.innerHeight * 0.8;

      for (let i = elements.length - 1; i >= 0; i--) {
        const element = elements[i];
        const el = document.getElementById(element);
        if (el && el.getBoundingClientRect().top <= offset) {
          setActiveId(element);
          window.history.replaceState(null, "", `#${element}`);
          break;
        }
      }
    };

    let timeoutId: NodeJS.Timeout;
    const debouncedHandleScroll = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(handleScroll, 100);
    };

    window.addEventListener("scroll", debouncedHandleScroll);

    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  const handleLinkClick = (link: string) => {
    const targetElement = document.querySelector(link);
    if (targetElement) {
      const offsetCorrection = link === "#Main" ? 500 : 10;
      window.scrollTo({
        top:
          targetElement.getBoundingClientRect().top +
          window.scrollY -
          offsetCorrection,
        behavior: "smooth",
      });
      window.history.pushState(null, "", link);
    }
  };

  return (
    <div className={style.headerWrapper}>
      <div className={style.navContainer}>
        <ul className={style.navMenu}>
          {values.map((el) => (
            <li key={el.id}>
              <a
                href={el.link}
                className={activeId === el.text ? style.active : ""}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(el.link);
                }}
              >
                {el.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
