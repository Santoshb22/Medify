// HeroSection.js
import TagHero from '../../Component/TagHero/TagHero';
import Button from '../../Component/Button/Button';
import heroImage from '../../assets/hero-image.png';
import Search from '../../Component/Search/Search';
import { serviceCardData } from '../../Data/data';
import ServiceCard from '../../Component/ServiceCard/ServiceCard';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <div className={styles.heroWrapper}>
      <div className={styles.heroContent}>
        <div className={styles.topHeroSection}>
          <div>
            <TagHero />
            <br /><br />
            <Button buttonText={"Find Centers"} />
          </div>
          <div className={styles.heroImage}>
            <img src={heroImage} alt="hero-image" />
          </div>
        </div>

        <div className={styles.bottomHeroSection}>
          <div className={styles.searchLocation}>
            <Search searchText={"State"} />
            <Search searchText={"City"} />
            <Button buttonText={"Search"} />
          </div>

          <div className={styles.healthCenters}>
            <p>You may be looking for</p>
            <div className={styles.services}>
              {
                serviceCardData.map((card, idx) => <ServiceCard logo={card.logo} text={card.text} key={idx} />)
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
