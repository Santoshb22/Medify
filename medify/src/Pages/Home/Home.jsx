import HeroSection from '../../Component/HeroSection/HeroSection';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.homeWrapper}>
      <HeroSection />
    </div>
  );
};

export default Home;