import searchIcon from "../../assets/Search-icon.png";
import styles from "./Search.module.css";
import location from "../../assets/location-icon.png"

const Search = ({ searchText, data = [], onChange, isDisable = false, value = "", locationIcon = false, setSearchText, searchValue}) => {


  const handleSearch = (e) => {
    setSearchText(e.target.value)
  }
  return (
    <div className={styles.searchContainer}>
      {
      locationIcon? <img src={location} alt="Search icon" className={styles.searchIcon} /> 
      : <img src={searchIcon} alt="Search icon" className={styles.searchIcon} />
      }

      {
        searchText === 'City' || searchText === 'State' ? (
          
          <select
            onChange={onChange}
            disabled={isDisable} 
            value={value}
            className={styles.searchInput}
          >
            <option value="">{searchText}</option>
            {
              data.map((item, idx) => <option key={idx} value={item}>{item}</option>)
            }
          </select>
        ) : (
          <input 
          type="text" 
          placeholder={searchText} 
          className={styles.searchInput} 
          onChange={(e) => handleSearch(e)}
          value = {searchValue}
          />
        )
      }
    </div>
  );
};

export default Search;