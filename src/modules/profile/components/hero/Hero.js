'use client';

import { useState } from 'react';
import Image from 'next/image';
import { GlassCard, Button, Icon } from '@/shared';
import { profile } from '../../data/profileData';
import styles from './Hero.module.css';

/**
 * <Hero> — big glass hero card: portrait, name, role, actions, socials.
 */
export default function Hero() {
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <GlassCard className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.avatarWrap}>
          <div className={styles.avatar}>
            {photoFailed ? (
              <span className={styles.initials}>{profile.initials}</span>
            ) : (
              <Image
                src={profile.avatar}
                alt={`${profile.name} — portrait`}
                width={264}
                height={264}
                className={styles.photo}
                onError={() => setPhotoFailed(true)}
                priority
              />
            )}
          </div>
          <span className={styles.online} title={profile.availability} />
        </div>

        <div className={styles.head}>
          <h1 className={styles.name}>{profile.name}</h1>
          <p className={styles.role}>{profile.role}</p>
          <p className={styles.meta}>
            <span>📍 {profile.location}</span>
            <span className={styles.dot}>·</span>
            <span className={styles.available}>{profile.availability}</span>
          </p>
        </div>

        <div className={styles.actions}>
          <Button variant="primary" href={`mailto:${profile.email}`}>
            <span aria-hidden="true">✉</span> Email me
          </Button>
          <Button
            href={profile.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span aria-hidden="true">💬</span> WhatsApp
          </Button>
        </div>

        <div className={styles.socials}>
          {profile.socials.map((s) => (
            <a
              key={s.label}
              className={styles.social}
              href={s.href}
              {...(s.href.startsWith('http')
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              aria-label={s.label}
              title={s.label}
            >
              <Icon name={s.icon} />
            </a>
          ))}
        </div>
      </div>
    </GlassCard>
  );
}
