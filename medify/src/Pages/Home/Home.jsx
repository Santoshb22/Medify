import Carousel from '../../Component/Carousel/Carousel';
import HeroSection from '../../Component/HeroSection/HeroSection';
import ParentCaring from '../../Component/ParentCaring/ParentCaring';
import Specialists from '../../Component/Speacialists/Specialists';
import Specialisation from '../../Component/Specialisation/Specialisation';
import { carouselImage } from '../../Data/data';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.homeWrapper}>
      <div className={styles.heroSection}>
        <HeroSection /> 
      </div>

      <div className={styles.imgCarousel}>
        <Carousel carouselData ={carouselImage}/>
      </div>

      <div className={styles.specialisation}>
        <Specialisation/>
      </div>

      <div className={styles.medicalSpecialists}>
        <Specialists/>
      </div>

      <div className={styles.parentCaringConsultation}>
        <ParentCaring/>
      </div>
    </div>
  );
};

export default Home;