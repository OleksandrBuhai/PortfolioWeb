"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import emailjs from "emailjs-com";
import styles from "./style.module.css";
import { InputField } from "@/components/reusableComponent/InputField/InputField";
import { Button } from "@/components/reusableComponent/Button/Button";
import { TitleHeader } from "@/components/reusableComponent/TitleHeader/TitleHeader";
import { MotionDiv } from "@/components/reusableComponent/MotionDiv/MotionDiv";
import { useRef } from "react";
import { motion } from "framer-motion";
import { TextArea } from "../reusableComponent/TextArea/TextArea";
import {
  formsTextAreaValidation,
  formsInpuFieldsValidation,
} from "@/validation/formValidation";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type ButtonType = "link" | "custom" | "download";

interface ButtonData {
  type: ButtonType;
  url: string;
  src: string;
  alt: string;
}

export const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm<FormData>();
  const ref = useRef(null);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        data as unknown as Record<string, unknown>,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string,
      )
      .then(() => {
        reset();
      });
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
      url: "https://www.linkedin.com/in/oleksandr-buhai-95a35227b/",
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

  return (
    <div className={styles.container} ref={ref} id="Contact">
      <div className={styles.textFormWrapper}>
        <MotionDiv triggerRef={ref} delay={0.2}>
          <TitleHeader headerText="Contact me" />
        </MotionDiv>
        <div className={styles.contactContainer}>
          <MotionDiv triggerRef={ref} delay={0.4}>
            <div className={styles.contactText}>
              <span>
                {"Let's get in touch"}{" "}
                <span className={styles.textAccent}>!</span>
              </span>
              <a
                href="mailto:oleksandr.buugay@gmail.com"
                className={styles.email}
              >
                oleksandr.buugay@gmail.com
              </a>
              <div className={styles.buttonContainer}>
                {buttonData.map((button, index) => (
                  <Button key={index} type={button.type} url={button.url}>
                    <Image
                      src={button.src}
                      alt={button.alt}
                      width={30}
                      height={30}
                    />
                  </Button>
                ))}
              </div>
            </div>
          </MotionDiv>
          <MotionDiv
            triggerRef={ref}
            delay={0.4}
            classname={styles.textFormWrapper}
          >
            <motion.form
              onSubmit={handleSubmit(onSubmit)}
              className={styles.textFormWrapper}
              style={{ gap: "1rem" }}
            >
              <div className={styles.inputGroup}>
                {formsInpuFieldsValidation.map((field, index) => (
                  <InputField
                    key={index}
                    label={field.label}
                    type={field.type}
                    placeholder={field.placeholder}
                    register={register}
                    validation={field.validation}
                    error={errors[field.label as keyof FormData]}
                    setError={setError}
                  />
                ))}
              </div>
              <div className={styles.textareaWrapper}>
                <TextArea
                  label={formsTextAreaValidation.label}
                  type={formsTextAreaValidation.type}
                  placeholder={formsTextAreaValidation.placeholder}
                  register={register}
                  validation={formsTextAreaValidation.validation}
                  error={
                    errors[formsTextAreaValidation.label as keyof FormData]
                  }
                />
              </div>
              <div className={styles.buttonContainer}>
                <Button type={"custom"} onCustomClick={handleSubmit(onSubmit)}>
                  {" "}
                  Send
                </Button>
              </div>
            </motion.form>
          </MotionDiv>
        </div>
      </div>
    </div>
  );
};
