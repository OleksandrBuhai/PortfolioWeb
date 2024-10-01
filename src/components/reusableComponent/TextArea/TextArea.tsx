import { FieldError } from "react-hook-form";
import style from "./style.module.css";
import { useState } from "react";

interface TextAreaProps {
  label: string;
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
  error?: FieldError;
  placeholder: string;
  validation: {
    required?: boolean | string;
    minLength?: { value: number; message: string };
    maxLength?: { value: number; message: string };
    [key: string]: unknown;
  };
}

export const TextArea: React.FC<TextAreaProps> = ({
  label,
  register,
  error,
  validation,
}) => {
  const [inputLength, setInputLength] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputLength(e.target.value.length);
  };

  return (
    <div className={style.textareaWrapper}>
      <textarea
        placeholder=" "
        id={label}
        {...register(label, validation)}
        className={style.textarea}
        onChange={handleInputChange}
      ></textarea>
      <label className={style.label}>{label}</label>
      {validation.maxLength && (
        <div className={style.charCounter}>
          {inputLength}/{validation.maxLength.value}
        </div>
      )}
      {error && (
        <div className={style.errorBlock}>
          <span className={style.errorMessage}>{error.message}</span>
        </div>
      )}
    </div>
  );
};
