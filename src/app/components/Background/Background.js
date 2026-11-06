import styles from './Background.module.css';

/**
 * <Background> — fixed animated gradient blobs behind all glass panels.
 * Purely decorative, non-interactive.
 */
export default function Background() {
  return (
    <div className={styles.blobs} aria-hidden="true">
      <div className={`${styles.blob} ${styles.blobA}`} />
      <div className={`${styles.blob} ${styles.blobB}`} />
      <div className={`${styles.blob} ${styles.blobC}`} />
    </div>
  );
}
