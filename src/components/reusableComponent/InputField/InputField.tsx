import { useEffect, useState } from "react";
import { FieldError, UseFormSetError } from "react-hook-form";
import style from "./style.module.css";

interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
  error?: FieldError;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setError: UseFormSetError<any>; // Додали
  validation: {
    required?: boolean | string;
    minLength?: { value: number; message: string };
    maxLength?: { value: number; message: string };
    [key: string]: unknown;
  };
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  placeholder,
  register,
  error,
  setError,
  validation,
}) => {
  const [inputLength, setInputLength] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputLength(e.target.value.length);
    if (error) {
      setError(label, { message: "" });
    }
  };

  const maxLength = validation.maxLength?.value;

  return (
    <div className={style.inputWrapper}>
      <input
        type={type}
        placeholder={placeholder}
        className={style.input}
        {...register(label, validation)}
        onChange={handleInputChange}
        maxLength={maxLength}
      />
      <label className={style.label}>{label}</label>
      {maxLength && (
        <div className={style.charCounter}>
          {inputLength}/{maxLength}
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
