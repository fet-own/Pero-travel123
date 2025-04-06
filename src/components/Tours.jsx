import styles from '../styles/Tours.module.css';
import image1 from '../assets/horseback-riding-meadow.png';
import image2 from '../assets/atv-ride.png';
import image3 from '../assets/kayak.jpg';
import image4 from '../assets/ancient-tunnel.png';

function Tours() {
  const tours = [
    {
      id: 1,
      image: image1,
      title: 'Конная прогулка в Казани',
      description: 'Насладитесь конной прогулкой по живописным полям и окрестностям Казани.',
      price: '618 ₽',
      duration: '6 часов',
    },
    {
      id: 2,
      image: image2,
      title: 'Прогулка на квадроциклах',
      description: 'Экстремальная поездка на квадроциклах по лесным тропам для любителей активного отдыха.',
      price: '1809 ₽',
      duration: '15 часов',
    },
    {
      id: 3,
      image: image3,
      title: 'Каякинг в фьорде',
      description: 'Исследуйте живописный фьорд на каяке, окружённый горами и природой.',
      price: '3515 ₽',
      duration: '25 часов',
    },
    {
      id: 4,
      image: image4,
      title: 'Поход и кемпинг в лесу',
      description: 'Пеший поход с ночёвкой в лесу, наслаждайтесь природой и свежим воздухом.',
      price: '6185 ₽',
      duration: '48 часов',
    },
  ];

  return (
    <section className={styles.tours}>
      <h2>Популярные экскурсии</h2>
      <div className={styles.toursGrid}>
        {tours.map((tour) => (
          <div key={tour.id} className={styles.tourCard}>
            <img src={tour.image} alt={tour.title} className={styles.tourImage} />
            <h3>{tour.title}</h3>
            <p className={styles.duration}>{tour.duration}</p>
            <p className={styles.description}>{tour.description}</p>
            <p className={styles.price}>{tour.price}</p>
            <button className={styles.tourButton}>Подробнее</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Tours;