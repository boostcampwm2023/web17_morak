import { Textarea, TextLabel } from '@morak/ui';

import * as styles from './index.css';

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  errorMessage?: string;
  fullWidth?: boolean;
};

export function FormTextarea({
  label = '',
  errorMessage = '',
  fullWidth = false,
  ...rest
}: TextareaProps) {
  const { value, maxLength, required } = rest;

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
      <Textarea
        maxLength={maxLength}
        errorMessage={errorMessage}
        fullWidth={fullWidth}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      />
    </div>
  );
}
