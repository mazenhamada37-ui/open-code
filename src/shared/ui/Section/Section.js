import styles from './Section.module.css';

/**
 * <Section> — page section wrapper with a shared heading.
 */
export default function Section({ id, title, children }) {
  return (
    <section id={id} className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </section>
  );
}
