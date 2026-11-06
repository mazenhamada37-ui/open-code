import Hero from './components/hero/Hero';
import About from './components/about/About';
import Education from './components/education/Education';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import styles from './Profile.module.css';

/**
 * <Profile> — composes all profile feature components.
 * This is the module's public entry (modular monolith boundary).
 */
export default function Profile() {
  return (
    <div className={styles.profile}>
      <Hero />
      <About />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
}
