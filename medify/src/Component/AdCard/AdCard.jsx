import styles from "./AdCard.module.css"
import adImg from "../../assets/sensodyne_dweb.png"
const AdCard = () => {
  return (
    <div className={styles.adCard}>
        <img src={adImg} alt="health card ad" />
    </div>
    )
}

export default AdCard