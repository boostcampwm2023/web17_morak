import * as styles from './index.css';

type InputProps = {
  label: string;
  required?: boolean;
};

export function FieldLabel({ label, required = false }: InputProps) {
  return (
    <span className={styles.label}>
      {label}
      {required && <span className={styles.required}>*</span>}
    </span>
  );
}
