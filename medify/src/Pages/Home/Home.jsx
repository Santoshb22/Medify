import AskedQuestion from '../../Component/AskedQuestion/AskedQuestion';
import Carousel from '../../Component/Carousel/Carousel';
import HealthFamily from '../../Component/HealthFamily/HealthFamily';
import HeroSection from '../../Component/HeroSection/HeroSection';
import News from '../../Component/News/News';
import Specialists from '../../Component/Speacialists/Specialists';
import ParentCaring from '../../Component/PatientCaring/PatientCaring';
import Specialisation from '../../Component/Specialisation/Specialisation';

import caruselImg1 from "../../assets/carousel-img1.png"
import caruselImg2 from "../../assets/carousel-img2.png"
import caruselImg3 from "../../assets/carousel-img3.png"


import styles from './Home.module.css';

const Home = () => {

  const carouselImage = [
    {img: caruselImg1},
    {img: caruselImg2},
    {img: caruselImg3},
    {img: caruselImg1},
    {img: caruselImg2},
    {img: caruselImg3},
    {img: caruselImg1},
    {img: caruselImg2},
    {img: caruselImg3},
  ]
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

      <div className={styles.blogsAndNews}>
        <News/>
      </div>

      <div className={styles.ourFamilies}>
        <HealthFamily/>
      </div>   

      <div>
        <AskedQuestion/>
      </div>
    </div>
  );
};

export default Home;