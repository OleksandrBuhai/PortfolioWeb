"use client";

import Image from "next/image";
import style from "./style.module.css";

interface AvatarProps {
  imgSrc: string;
}

export const Avatar: React.FC<AvatarProps> = ({ imgSrc }) => {
  return <Image src={imgSrc} alt={""} layout="fill" className={style.image} />;
};
