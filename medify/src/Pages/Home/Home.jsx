import Carousel from '../../Component/Carousel/Carousel';
import HeroSection from '../../Component/HeroSection/HeroSection';
import Specialisation from '../../Component/Specialisation/Specialisation';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.homeWrapper}>
      <div className={styles.heroSection}>
        <HeroSection /> 
      </div>

      <div className={styles.imgCarousel}>
        <Carousel/>
      </div>

      <div className={styles.specialisation}>
        <Specialisation/>
      </div>
    </div>
  );
};

export default Home;