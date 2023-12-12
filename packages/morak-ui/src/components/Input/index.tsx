import { TextLabel } from '@morak/ui';

import * as styles from './index.css';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  errorMessage?: string;
};

export function Input({ label = '', errorMessage = '', ...rest }: InputProps) {
  const { value, maxLength, disabled, required } = rest;

  return (
    <div className={`${styles.container} ${errorMessage && styles.error} ${disabled && styles.disabled}`}>
      {label && (
        <div className={styles.titleWrapper}>
          <TextLabel label={label} required={required} />
          {maxLength && (
            <span className={styles.count}>
              {value?.toString()?.length || 0}/{maxLength}
            </span>
          )}
        </div>
      )}
      <input
        className={styles.input}
        disabled={disabled}
        maxLength={maxLength}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      />
      {!disabled && errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
    </div>
  );
}
