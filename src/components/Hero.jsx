import styles from '../styles/Hero.module.css';
import mainImage from '';
import smallImage1 from '../assets/576d48c691b5d5527de2d294e957c8b.jpg';
import smallImage2 from '../assets/0785ec6a220a4654596057c785a7d.jpg';

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