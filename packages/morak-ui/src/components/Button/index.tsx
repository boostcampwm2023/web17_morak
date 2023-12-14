import * as styles from './index.css';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  theme: 'primary' | 'danger';
  shape: 'fill' | 'line' | 'text';
  size: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
};

export function Button({
  theme,
  shape,
  size,
  fullWidth = false,
  ...rest
}: ButtonProps) {
  const { type = 'button', disabled = false, children, className } = rest;

  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      className={`${styles.button({
        theme,
        shape,
        size,
        disabled,
        fullWidth,
      })} ${className || ''}`}
    >
      {children}
    </button>
  );
}
