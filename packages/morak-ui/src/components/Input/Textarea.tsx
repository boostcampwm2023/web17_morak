import { FieldLabel } from '@morak/ui';

import * as styles from './Textarea.css';

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  errorMessage?: string;
  fullWidth?: boolean;
};

export function Textarea({
  label = '',
  errorMessage = '',
  fullWidth = false,
  ...rest
}: TextareaProps) {
  const { value, maxLength, disabled, required } = rest;

  return (
    <div
      className={`${styles.container} ${errorMessage && styles.error}
      ${disabled && styles.disabled} ${fullWidth && styles.fullWidth}`}
    >
      {label && (
        <div className={styles.titleWrapper}>
          <FieldLabel label={label} required={required} />
          {maxLength && (
            <span className={styles.count}>
              {value?.toString()?.length || 0}/{maxLength}
            </span>
          )}
        </div>
      )}
      <textarea
        className={styles.textarea}
        disabled={disabled}
        maxLength={maxLength}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      />
      {!disabled && errorMessage && (
        <p className={styles.errorMessage}>{errorMessage}</p>
      )}
    </div>
  );
}
