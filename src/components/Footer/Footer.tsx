"use client";
import styles from "./style.module.css";
import { FaArrowUp } from "react-icons/fa";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footersBlock}>
        <footer className={styles.footer}>
          Copyryting © 2024 by Oleksandr Buhai |
        </footer>
        <div className={styles.goUp}>
          <Link href={"#Main"} scroll={true}>
            <FaArrowUp />
          </Link>
        </div>
      </div>
    </div>
  );
};
