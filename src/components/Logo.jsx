import { Link } from 'react-router-dom';
import styles from './Logo.module.css';

function Logo({ className }) {
  return (
    <Link to="/">
      <img
        src="/logo.png"
        alt="GlobeMark logo"
        className={`${styles.logo} ${className}`}
      />
    </Link>
  );
}

export default Logo;
