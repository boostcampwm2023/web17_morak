import { HTMLInputTypeAttribute } from 'react';

import * as styles from './index.css';
import { FieldLabel } from '../FieldLabel';

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
  value?: string | number;
  onChange?: () => void;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  list?: string;
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
  defaultValue = '',
  value,
  onChange,
  onClick,
  list,
}: InputProps) {
  return (
    <div
      className={`${styles.container} ${errorMessage && styles.error} ${
        disabled && styles.disabled
      }`}
    >
      {label && (
        <div className={styles.titleWrapper}>
          <FieldLabel label={label} required={required} />
          {maxLength && (
            <span className={styles.count}>
              {value ? value.toString().length : 0}/{maxLength}
            </span>
          )}
        </div>
      )}
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        maxLength={maxLength}
        min={min}
        max={max}
        value={value || defaultValue}
        onChange={onChange}
        onClick={onClick}
        list={list}
      />
      {!disabled && errorMessage && (
        <p className={styles.errorMessage}>{errorMessage}</p>
      )}
    </div>
  );
}
