import styles from '../styles/Hero.module.css';
import mainImage from '../assets/3.png'; // Убедись, что файл 3.png есть в src/assets/
import smallImage1 from '../assets/1.png'; // Убедись, что файл 1.png есть
import smallImage2 from '../assets/2.png'; // Убедись, что файл 2.png есть

function Hero() {
  return (
    <section className={styles.hero}>
      <img src={mainImage} alt="Travel Banner" className={styles.heroImage} />
      <div className={styles.smallImages}>
        <img src={smallImage1} alt="Small Image 1" className={styles.smallImage} />
        <img src={smallImage2} alt="Small Image 2" className={styles.smallImage} />
      </div>
      <div className={styles.heroContent}>
        <h1>Путешествуй вместе с Pero Travel</h1>
        <p>Исследуй мир с нашими уникальными турами!</p>
        <button className={styles.heroButton}>К экскурсиям</button>
      </div>
    </section>
  );
}

export default Hero;