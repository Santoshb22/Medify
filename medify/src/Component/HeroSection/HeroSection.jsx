// HeroSection.js
import TagHero from '../TagHero/TagHero';
import Button from '../../Component/Button/Button';
import heroImage from '../../assets/hero-image.png';
import Search from '../../Component/Search/Search';
import ServiceCard from '../../Component/ServiceCard/ServiceCard';
import styles from './HeroSection.module.css';
import lab from "../../assets/lab-icon.png";
import ambulance from "../../assets/ambulance-icon.png";
import capsule from "../../assets/capsule-icon.png";
import hospital from "../../assets/hospital-icon.png";
import person from "../../assets/person-icon.png";

const HeroSection = () => {

  const serviceCardData = [
    { logo: person, text: "Doctors" },
    { logo: lab, text: "Labs" },
    { logo: hospital, text: "Hospitals" },
    { logo: capsule, text: "Medical Store" },
    { logo: ambulance, text: "Ambulance" },
  ];

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
            <Button buttonText={"Search"} searchIcon = {true}/>
          </div>

          <div className={styles.healthCenters}>
            <p>You may be looking for</p>
            <div className={styles.services}>
              {
                serviceCardData.map((card, idx) => <ServiceCard logo={card.logo} text={card.text} key={idx}  className={"serviceCard"} />)
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
