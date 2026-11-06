import { GlassCard, Section, Icon } from '@/shared';
import { education } from '../../data/profileData';
import styles from './Education.module.css';

/**
 * <Education> — degree and institution.
 */
export default function Education() {
  return (
    <Section id="education" title="Education">
      <GlassCard lift className={styles.card}>
        <span className={styles.badge} aria-hidden="true">
          <Icon name="graduation" size={24} />
        </span>

        <div className={styles.body}>
          <h3 className={styles.field}>{education.field}</h3>
          <p className={styles.school}>{education.school}</p>
          <p className={styles.text}>{education.text}</p>
        </div>

        <span className={styles.degree}>{education.degree}</span>
      </GlassCard>
    </Section>
  );
}
