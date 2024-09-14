import searchIcon from "../../assets/Search-icon.png";
import styles from "./Search.module.css";

const Search = ({ searchText, data = [], onChange, isDisable = false, value = "" }) => {

  return (
    <div className={styles.searchContainer}>
      <img src={searchIcon} alt="Search icon" className={styles.searchIcon} />
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
          <input type="text" placeholder={searchText} className={styles.searchInput} />
        )
      }
    </div>
  );
};

export default Search;