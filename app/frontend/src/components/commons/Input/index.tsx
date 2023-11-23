import { HTMLInputTypeAttribute } from 'react';

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
  value?: string;
  onChange?: () => void;
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
  value,
  onChange,
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
        {maxLength && (
          <span className={styles.count}>
            {value ? value.length : 0}/{maxLength}
          </span>
        )}
      </div>
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        maxLength={maxLength}
        min={min}
        max={max}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
      />
      {!disabled && errorMessage && (
        <p className={styles.errorMessage}>{errorMessage}</p>
      )}
    </div>
  );
}
