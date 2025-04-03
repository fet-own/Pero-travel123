import styles from '../styles/Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>Pero Travel</h3>
          <p>Ваши незабываемые путешествия начинаются здесь!</p>
        </div>
        <div className={styles.footerSection}>
          <h3>Контакты</h3>
          <p>Email: info@perotravel.com</p>
          <p>Телефон: +7 (123) 456-78-90</p>
        </div>
        <div className={styles.footerSection}>
          <h3>Следите за нами</h3>
          <p>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </p>
          <p>
            <a href="https://vk.com" target="_blank" rel="noopener noreferrer">ВКонтакте</a>
          </p>
          <p>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          </p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2025 Pero Travel. Все права защищены.</p>
      </div>
    </footer>
  );
}

export default Footer;