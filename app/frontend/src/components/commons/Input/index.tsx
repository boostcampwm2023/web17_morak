import { HTMLInputTypeAttribute } from 'react';

import * as styles from './index.css';

type InputProps = {
  label: string;
  maxLength: number;
  placeholder?: string;
  errorMessage?: string;
  type?: HTMLInputTypeAttribute;
  disabled?: boolean;
};

export function Input({
  label,
  type = 'input',
  placeholder = '',
  errorMessage = '',
  disabled = false,
  maxLength,
}: InputProps) {
  return (
    <div className={`${styles.container} ${errorMessage && styles.error} ${disabled && styles.disabled}`}>
      <div className={styles.titleWrapper}>
        <span className={styles.label}>{label}</span>
        <span className={styles.count}>0/{maxLength}</span>
      </div>
      <input className={styles.input} type={type} placeholder={placeholder} disabled={disabled} maxLength={maxLength} />
      {!disabled && errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
    </div>
  );
}
