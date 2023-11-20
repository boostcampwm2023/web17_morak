import * as styles from './index.css';

export function ChattingFooter() {
  return (
    <form className={styles.footer}>
      <textarea className={styles.textarea} rows={4} />
      <button type="submit" className={styles.submitButton}>
        보내기
      </button>
    </form>
  );
}
