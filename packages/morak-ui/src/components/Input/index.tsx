import * as styles from './index.css';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  errorMessage?: string;
};

export function Input({ errorMessage = '', ...rest }: InputProps) {
  const { maxLength, disabled } = rest;

  return (
    <div
      className={`${styles.container} ${errorMessage && styles.error} ${
        disabled && styles.disabled
      }`}
    >
      <input
        className={styles.input}
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
