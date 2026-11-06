import { GlassCard, Section } from '@/shared';
import { profile } from '../../data/profileData';
import styles from './About.module.css';

/**
 * <About> — short factual bio.
 */
export default function About() {
  return (
    <Section id="about" title="About">
      <GlassCard lift className={styles.card}>
        <p className={styles.bio}>{profile.bio}</p>
      </GlassCard>
    </Section>
  );
}
