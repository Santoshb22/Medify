import styles from "./Button.module.css";
import search from "../../assets/Search-icon.png";

const Button = ({ buttonText, color, searchIcon = false, onClick }) => {
  return (
    <button className={`${styles.button} ${styles[color]}`} onClick={onClick}>
      {
        searchIcon ? (
          <div className={styles.iconAndText}>
            <img src={search} alt="search icon" />
            <p>{buttonText}</p>
          </div>
        ) : (
          buttonText
        )
      }
    </button>
  );
};

export default Button;
