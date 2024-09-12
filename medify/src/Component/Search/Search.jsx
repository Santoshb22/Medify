import searchIcon from "../../assets/Search-icon.png"
import styles from "./Search.module.css"
const Search = ({searchText}) => {
  return (
    <div className={styles.searchContainer}>
        <img src={searchIcon} alt="Search icon" className={styles.searchIcon}/>
        <input type='text' placeholder={searchText} className={styles.searchInput}/>
    </div>
  )
}

export default Search
