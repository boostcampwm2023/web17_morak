import * as styles from './index.css';

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  errorMessage?: string;
  fullWidth?: boolean;
};

export function Textarea({
  errorMessage = '',
  fullWidth = false,
  ...rest
}: TextareaProps) {
  const { maxLength, disabled } = rest;

  return (
    <div
      className={`${styles.container} ${errorMessage && styles.error}
      ${disabled && styles.disabled} ${fullWidth && styles.fullWidth}`}
    >
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
