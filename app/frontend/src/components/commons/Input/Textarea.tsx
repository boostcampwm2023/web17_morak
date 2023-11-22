import { useRef, useState } from 'react';

import * as styles from './Textarea.css';

type TextareaProps = {
  label?: string;
  maxLength: number;
  placeholder?: string;
  errorMessage?: string;
  disabled?: boolean;
  required?: boolean;
  fullWidth?: boolean;
};

const MIN_HEIGHT = '10rem';

export function Textarea({
  label,
  placeholder = '',
  errorMessage = '',
  disabled = false,
  maxLength,
  required = false,
  fullWidth = false,
}: TextareaProps) {
  const [textCount, setTextCount] = useState<number>(0);
  const textRef = useRef<HTMLTextAreaElement | null>(null);

  const handleInput = () => {
    if (textRef && textRef.current) {
      setTextCount(textRef.current.value.length);
      textRef.current.style.height = MIN_HEIGHT;
      textRef.current.style.height = `${textRef.current.scrollHeight}px`;
    }
  };

  return (
    <div
      className={`${styles.container} ${errorMessage && styles.error} ${
        disabled && styles.disabled
      } ${fullWidth && styles.fullWidth}`}
    >
      <div className={styles.titleWrapper}>
        <span className={`${styles.label} ${!label && styles.hide}`}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </span>
        <span className={styles.count}>
          {textCount}/{maxLength}
        </span>
      </div>
      <textarea
        ref={textRef}
        className={styles.textarea}
        placeholder={placeholder}
        disabled={disabled}
        maxLength={maxLength}
        required={required}
        onChange={handleInput}
      />
      {!disabled && errorMessage && (
        <p className={styles.errorMessage}>{errorMessage}</p>
      )}
    </div>
  );
}
