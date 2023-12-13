import * as styles from './index.css';

type TextLabelProps = {
  label: string;
  required?: boolean;
};

export function TextLabel({ label, required = false }: TextLabelProps) {
  return (
    <span className={styles.label}>
      {label}
      {required && <span className={styles.required}>*</span>}
    </span>
  );
}
