import styles from './Button.module.css';

/**
 * <Button> — shared glass button (primary or ghost variant).
 * Renders an <a> when `href` is provided, otherwise a <button>.
 */
export default function Button({
  variant = 'ghost',
  active = false,
  href,
  className = '',
  children,
  ...rest
}) {
  const variantClass = variant === 'primary' ? styles.primary : styles.ghost;
  const classes = `${styles.btn} ${variantClass} ${active ? styles.active : ''} ${className}`.trim();

  if (href) {
    return (
      <a className={classes} href={href} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
