import { useState, useRef, HTMLInputTypeAttribute } from 'react';

import * as styles from './index.css';

type InputProps = {
  label?: string;
  placeholder?: string;
  errorMessage?: string;
  type?: HTMLInputTypeAttribute;
  disabled?: boolean;
  maxLength?: number;
  min?: number | string;
  max?: number;
  required?: boolean;
  defaultValue?: string;
};

export function Input({
  label = '',
  type = 'input',
  placeholder = '',
  errorMessage = '',
  disabled = false,
  maxLength,
  min,
  max,
  required = false,
  defaultValue,
}: InputProps) {
  const [inputCount, setInputCount] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleInput = () => {
    if (inputRef && inputRef.current) {
      setInputCount(inputRef.current.value.length);
    }
  };

  return (
    <div
      className={`${styles.container} ${errorMessage && styles.error} ${
        disabled && styles.disabled
      }`}
    >
      <div className={styles.titleWrapper}>
        <span className={`${styles.label} ${!label && styles.hide}`}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </span>
        {maxLength && (
          <span className={styles.count}>
            {inputCount}/{maxLength}
          </span>
        )}
      </div>
      <input
        ref={inputRef}
        className={styles.input}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        maxLength={maxLength}
        min={min}
        max={max}
        required={required}
        defaultValue={defaultValue}
        onChange={handleInput}
      />
      {!disabled && errorMessage && (
        <p className={styles.errorMessage}>{errorMessage}</p>
      )}
    </div>
  );
}
