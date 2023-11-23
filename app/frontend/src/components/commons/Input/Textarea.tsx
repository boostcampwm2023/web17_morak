import * as styles from './Textarea.css';

type TextareaProps = {
  label?: string;
  maxLength: number;
  placeholder?: string;
  errorMessage?: string;
  disabled?: boolean;
  required?: boolean;
  fullWidth?: boolean;
  rows?: number;
  value?: string;
  onChange?: () => void;
};

export function Textarea({
  label,
  placeholder = '',
  errorMessage = '',
  disabled = false,
  maxLength,
  required = false,
  fullWidth = false,
  rows = 2,
  value,
  onChange,
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
        <span className={styles.count}>
          {value ? value.length : 0}/{maxLength}
        </span>
      </div>
      <textarea
        rows={rows}
        className={styles.textarea}
        placeholder={placeholder}
        disabled={disabled}
        maxLength={maxLength}
        value={value}
        onChange={onChange}
      />
      {!disabled && errorMessage && (
        <p className={styles.errorMessage}>{errorMessage}</p>
      )}
    </div>
  );
}
