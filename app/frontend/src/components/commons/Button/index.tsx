import * as styles from './index.css';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  theme: 'primary' | 'danger';
  shape: 'fill' | 'line' | 'text';
  size: 'small' | 'medium' | 'large';
  disabled?: boolean;
  fullWidth?: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

export function Button({
  type = 'button',
  theme,
  shape,
  size,
  disabled = false,
  fullWidth = false,
  onClick,
  children,
}: ButtonProps) {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={styles.button({
        theme,
        shape,
        size,
        disabled,
        fullWidth,
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
