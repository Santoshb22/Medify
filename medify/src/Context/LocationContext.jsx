import { createContext, useState, useEffect, useContext } from 'react';

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const stateApiKey = "https://meddata-backend.onrender.com/states";

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const res = await fetch(stateApiKey);
        const data = await res.json();
        setStates(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchStates();
  }, [stateApiKey]);

  const fetchCities = async (state) => {
    try {
      const res = await fetch(`https://meddata-backend.onrender.com/cities/${state}`);
      const data = await res.json();
      setCities(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleStateChange = (state) => {
    setSelectedState(state);
    fetchCities(state);
  };

  const handleCityChange = (city) => {
    setSelectedCity(city);
  };

  return (
    <LocationContext.Provider value={{ states, cities, selectedState, selectedCity, handleStateChange, handleCityChange }}>
      {children}
    </LocationContext.Provider>
  );
};


export const useLocationContext = () => useContext(LocationContext);
