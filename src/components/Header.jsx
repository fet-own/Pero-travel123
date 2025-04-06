import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';
import logo from '../assets/logo.png';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <div className={styles.logo}>
          <img src={logo} alt="Pero Travel Logo" />
        </div>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/excurse">Экскурсии</Link></li>
          <li><Link to="/cabinet">Личный кабинет</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;