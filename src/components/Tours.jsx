import styles from '../styles/Tours.module.css';
import image1 from '../assets/4.png'; // Убедись, что файл 4.png есть
import image2 from '../assets/5.png'; // Убедись, что файл 5.png есть
import image3 from '../assets/6.png'; // Убедись, что файл 6.png есть
import image4 from '../assets/7.png'; // Убедись, что файл 7.png есть

function Tours() {
  const tours = [
    {
      id: 1,
      image: image1,
      title: 'Обзорная по городу (Казань)',
      description: 'Познакомьтесь с Казанью, её историей, культурой и традициями. На экскурсии вы посетите Казанский Кремль, мечеть Кул-Шариф, Старо-Татарскую слободу и другие знаковые места.',
      price: '618 ₽',
      duration: '6 часов',
    },
    {
      id: 2,
      image: image2,
      title: 'Конные прогулки',
      description: 'Конные прогулки по живописным местам. Подходит для новичков и опытных наездников. На маршруте вы увидите уникальные природные пейзажи.',
      price: '1809 ₽',
      duration: '15 часов',
    },
    {
      id: 3,
      image: image3,
      title: 'Каякинг',
      description: 'Маршрут на каяках проходит вдоль живописных берегов. Подходит для новичков и опытных гребцов. Вы увидите природу с нового ракурса.',
      price: '3515 ₽',
      duration: '25 часов',
    },
    {
      id: 4,
      image: image4,
      title: 'Кемпинг',
      description: 'Тур с ночёвкой в палатках в окружении природы. Вас ждут походы, костёр, звёздное небо и полное единение с природой.',
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