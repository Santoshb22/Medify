import styles from "./HospitalCount.module.css"
import verifiedIcon from "../../../assets/verified-icon.png"
const HospitalCount = ({totalCenters, state}) => {
  return (
    <div className={styles.hospitalCount}>
        <h3>{totalCenters} Medical centers available in {state}</h3>
        <div className={styles.hospitalCountText}>
            <img src={verifiedIcon} alt="verified" />
            <p>Book appointments with minimum wait-time & verified doctor details</p>
        </div>
    </div>
  )
}

export default HospitalCount