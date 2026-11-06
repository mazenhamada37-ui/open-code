import styles from './GlassCard.module.css';

/**
 * <GlassCard> — reusable frosted-glass container (Apple-style).
 */
export default function GlassCard({ lift = false, className = '', children, ...rest }) {
  return (
    <div
      className={`${styles.card} ${lift ? styles.lift : ''} ${className}`.trim()}
      {...rest}
    >
      {children}
    </div>
  );
}
