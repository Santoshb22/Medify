import {useEffect } from 'react';
import TagHero from '../TagHero/TagHero';
import Button from '../../Component/Button/Button';
import heroImage from '../../assets/hero-image.png';
import Search from '../Search/Search';
import ServiceCard from '../../Component/ServiceCard/ServiceCard';
import styles from './HeroSection.module.css';
import lab from "../../assets/lab-icon.png";
import ambulance from "../../assets/ambulance-icon.png";
import capsule from "../../assets/capsule-icon.png";
import hospital from "../../assets/hospital-icon.png";
import person from "../../assets/person-icon.png";
import { useLocationContext } from '../../Context/LocationContext.jsx';
import { Link } from 'react-router-dom';
const HeroSection = () => {
  const serviceCardData = [
    { logo: person, text: "Doctors" },
    { logo: lab, text: "Labs" },
    { logo: hospital, text: "Hospitals" },
    { logo: capsule, text: "Medical Store" },
    { logo: ambulance, text: "Ambulance" },
  ];

  const {selectedCity, selectedState, states, cities, handleCityChange, handleStateChange} = useLocationContext()

  useEffect(() => {
    console.log('Selected State:', selectedState);
    console.log('Selected City:', selectedCity);
  }, [selectedState, selectedCity]);

  return (
    <div className={styles.heroWrapper}>
      <div className={styles.heroContent}>
        <div className={styles.topHeroSection}>
          <div>
            <TagHero />
            <br /><br />
            <Link to = "/find-doctors"><Button buttonText={"Find Centers"} /> </Link>
          </div>
          <div className={styles.heroImage}>
            <img src={heroImage} alt="hero-image" />
          </div>
        </div>

        <div className={styles.bottomHeroSection}>
          <div className={styles.searchLocation}>
            <Search
              searchText={"State"}
              data={states}
              value={selectedState}
              onChange={(e) => handleStateChange(e.target.value)} 
            />
            <Search
              searchText={"City"}
              data={cities}
              value={selectedCity}
              onChange={(e) => handleCityChange(e.target.value)} 
              isDisable={selectedState === ""}
            />
            
            <Button
              buttonText={"Search"}
              searchIcon={true}
              isDisable={selectedState === "" || cities.length === 0}
            />
          </div>

          <div className={styles.healthCenters}>
            <p>You may be looking for</p>
            <div className={styles.services}>
              {serviceCardData.map((card, idx) => (
                <ServiceCard
                  logo={card.logo}
                  text={card.text}
                  key={idx}
                  className={"serviceCard"}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;