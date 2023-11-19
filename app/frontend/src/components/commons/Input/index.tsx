import { HTMLInputTypeAttribute } from 'react';

import * as styles from './index.css';

type InputProps = {
  label?: string;
  placeholder?: string;
  errorMessage?: string;
  type?: HTMLInputTypeAttribute;
  disabled?: boolean;
  maxLength: number;
  required?: boolean;
};

export function Input({
  label = '',
  type = 'input',
  placeholder = '',
  errorMessage = '',
  disabled = false,
  maxLength,
  required = false,
}: InputProps) {
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
        <span className={styles.count}>0/{maxLength}</span>
      </div>
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        maxLength={maxLength}
        required={required}
      />
      {!disabled && errorMessage && (
        <p className={styles.errorMessage}>{errorMessage}</p>
      )}
    </div>
  );
}
