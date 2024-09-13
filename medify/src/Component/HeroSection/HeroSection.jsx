import { useState, useEffect } from 'react';
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

const HeroSection = () => {
  const serviceCardData = [
    { logo: person, text: "Doctors" },
    { logo: lab, text: "Labs" },
    { logo: hospital, text: "Hospitals" },
    { logo: capsule, text: "Medical Store" },
    { logo: ambulance, text: "Ambulance" },
  ];

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [isDisable, setIsDisable] = useState(true);



  useEffect(() => {
    const fetchStates = async () => {
      try {
        const res = await fetch("https://meddata-backend.onrender.com/states");
        const data = await res.json();
        setStates(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchStates();
  }, []);


  const fetchCities = async (state) => {
    try {
      const res = await fetch(`https://meddata-backend.onrender.com/cities/${state}`);
      const data = await res.json();
      setCities(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleStateChange = (e) => {
    const state = e.target.value;
    if (state) {
      fetchCities(state);
      setSelectedState(state);
      setIsDisable(false);
    } else {
      setIsDisable(true);
      setCities([]);
      setSelectedState(""); // Reset state if no selection
    }
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };



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
            <Button buttonText={"Find Centers"} />
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
              onChange={handleStateChange} // Added onChange handler for the first Search component
            />
            <Search
              searchText={"City"}
              data={cities}
              value={selectedCity}
              onChange={handleCityChange}
              isDisable={isDisable}
            />
            <Button
              buttonText={"Search"}
              searchIcon={true}
              isDisabled={!selectedState || !selectedCity} // Disable search if state/city not selected
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