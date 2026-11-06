import { profile } from '@/modules/profile/data/profileData';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        marginTop: '64px',
        textAlign: 'center',
        fontSize: '13px',
        color: 'var(--text-faint)',
      }}
    >
      <p>
        © {year} {profile.name} · Built with React, CSS Modules &amp; a modular
        monolith architecture.
      </p>
    </footer>
  );
}
