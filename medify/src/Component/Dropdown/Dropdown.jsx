import { useLocationContext } from "../../Context/LocationContext"
import Button from "../Button/Button"
import Search from "../Search/Search"
import styles from "./Dropdown.module.css"
const Dropdown = () => {

  const {states, cities, selectedState, selectedCity, handleStateChange, handleCityChange, } = useLocationContext()
  return (
    <div className={styles.dropdownWrapper}>
      <div className={styles.dropDown}>
            <Search
              searchText={"State"}
              data={states}
              value={selectedState}
              onChange={(e) => handleStateChange(e.target.value)} 
              locationIcon
            />
            <Search
              searchText={"City"}
              data={cities}
              value={selectedCity}
              onChange={(e) => handleCityChange(e.target.value)} 
              isDisable={selectedState === ""}
              locationIcon
            />
          <Button 
          buttonText = "Search" 
          searchIcon = {true}
          isDisable={selectedState === "" || cities.length === 0}
          />
      </div>
    </div>
  )
}

export default Dropdown