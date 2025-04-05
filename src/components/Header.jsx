import styles from '../styles/Header.module.css';
import logo from '../assets/image.webp'; // Убедись, что файл image.webp есть в src/assets/

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
          <li><a href="/">Главная</a></li>
          <li><a href="/excurse">Экскурсии</a></li>
          <li><a href="/cabinet">Личный кабинет</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;