'use client';

import { GlassCard, useTheme } from '@/shared';
import { profile } from '@/modules/profile/data/profileData';
import styles from './Header.module.css';

/**
 * <Header> — sticky glass nav bar with brand, section links, theme toggle.
 */
export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={styles.header}>
      <GlassCard className={styles.bar} lift>
        <a href="#top" className={styles.brand}>
          <span className={styles.brandDot} />
          {profile.name}
        </a>

        <nav className={styles.nav}>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <button
          type="button"
          className={styles.toggle}
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          <span className={styles.toggleIcon} aria-hidden="true">
            {theme === 'dark' ? '☀️' : '🌙'}
          </span>
        </button>
      </GlassCard>
    </header>
  );
}
