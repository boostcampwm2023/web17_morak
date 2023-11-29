import * as styles from './Textarea.css';
import { FieldLabel } from '../FieldLabel';

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
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
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
      {label && (
        <div className={styles.titleWrapper}>
          <FieldLabel label={label} required={required} />
          <span className={styles.count}>
            {value ? value.length : 0}/{maxLength}
          </span>
        </div>
      )}
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
