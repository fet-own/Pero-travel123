import Header from './components/Header';
import Hero from './components/Hero';
import Tours from './components/Tours';
import Footer from './components/Footer';
import styles from './styles/Header.module.css'; // Импортируем стили из Header.module.css
import './App.css';

function App() {
  const instagramIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMTIgMUM2LjQ4IDEgMiA1LjQ4IDIgMTFzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDEgMTIgMXptMCAxOGMtNC40MSAwLTgtMy41OS04LThzMy41OS04IDgtOCA4IDMuNTkgOCA4LTMuNTkgOC04IDh6bTQuNS0xMy41aC05djloOS0uNXYtOC41em0tMS41IDdoLTV2LTVoNXoiLz48L3N2Zz4=";
  const vkIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMTIgMUM2LjQ4IDEgMiA1LjQ4IDIgMTFzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDEgMTIgMXptMCAxOGMtNC40MSAwLTgtMy41OS04LThzMy41OS04IDgtOCA4IDMuNTkgOCA4LTMuNTkgOC04IDh6bS0yLjUtNS41aC0yLjV2LTFoMi41di0xaC0zLjV2LTFoMy41di0xaC00LjV2LTFoNC41di0xaDV2MWgtNC41djFoNC41djFoLTMuNXYxaDMuNXYxaC01eiIvPjwvc3ZnPg==";
  const facebookIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMTIgMUM2LjQ4IDEgMiA1LjQ4IDIgMTFzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDEgMTIgMXptMCAxOGMtNC40MSAwLTgtMy41OS04LThzMy41OS04IDgtOCA4IDMuNTkgOCA4LTM3LjU5IDgtOC04IDh6bS0yLjUtNS41di0zaC0ydjNoLTF2LTFoMXYtM2gydjNoMXYzaC0xdi0xaDJ2M3oiLz48L3N2Zz4=";

  return (
    <div className="App">
      <Header />
      <Hero />
      <Tours />
      <Footer />
      <div className={styles.socialIcons}>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" className={styles.socialIcon} />
        </a>
        <a href="https://vk.com" target="_blank" rel="noopener noreferrer">
          <img src={vkIcon} alt="VK" className={styles.socialIcon} />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={facebookIcon} alt="Facebook" className={styles.socialIcon} />
        </a>
      </div>
    </div>
  );
}

export default App;