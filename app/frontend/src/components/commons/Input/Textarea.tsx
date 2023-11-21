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

export function Textarea({
  label,
  placeholder = '',
  errorMessage = '',
  disabled = false,
  maxLength,
  required = false,
  fullWidth = false,
}: TextareaProps) {
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
        <span className={styles.count}>0/{maxLength}</span>
      </div>
      <textarea
        className={styles.textarea}
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
