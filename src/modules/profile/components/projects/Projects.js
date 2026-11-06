import { GlassCard, Section } from '@/shared';
import { projects } from '../../data/profileData';
import styles from './Projects.module.css';

/**
 * <Projects> — featured projects.
 * The whole card is a link to the live project page.
 */
export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className={styles.grid}>
        {projects.map((p) => (
          <a
            key={p.id}
            href={p.live}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cardLink}
            aria-label={`${p.name} — open live site`}
          >
            <GlassCard lift className={styles.card}>
              <div className={styles.head}>
                <h3 className={styles.name}>{p.name}</h3>
                <span className={styles.tag}>{p.tag}</span>
              </div>

              <p className={styles.desc}>{p.desc}</p>

              <div className={styles.footer}>
                <ul className={styles.tech}>
                  {p.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <span className={styles.visit}>
                  Live <span aria-hidden="true">↗</span>
                </span>
              </div>
            </GlassCard>
          </a>
        ))}
      </div>
    </Section>
  );
}
