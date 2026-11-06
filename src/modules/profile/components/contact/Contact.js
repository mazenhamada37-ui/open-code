import { GlassCard, Section, Icon } from '@/shared';
import { contact } from '../../data/profileData';
import styles from './Contact.module.css';

/**
 * <Contact> — direct contact channels.
 */
export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <GlassCard className={styles.card}>
        {contact.map((c) => (
          <a
            key={c.label}
            className={styles.row}
            href={c.href}
            {...(c.href.startsWith('http')
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
          >
            <span className={styles.icon} aria-hidden="true">
              <Icon name={c.icon} size={19} />
            </span>
            <span className={styles.text}>
              <span className={styles.label}>{c.label}</span>
              <span className={styles.value}>{c.value}</span>
            </span>
            <span className={styles.arrow} aria-hidden="true">
              ↗
            </span>
          </a>
        ))}
      </GlassCard>
    </Section>
  );
}
