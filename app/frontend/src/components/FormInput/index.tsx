import { Input, TextLabel } from '@morak/ui';

import * as styles from './index.css';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  errorMessage?: string;
};

export function FormInput({
  label = '',
  errorMessage = '',
  ...rest
}: InputProps) {
  const { value, maxLength, disabled, required } = rest;

  return (
    <div className={styles.container}>
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
      <Input
        disabled={disabled}
        maxLength={maxLength}
        errorMessage={errorMessage}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      />
    </div>
  );
}
