import blueTick from "../../../assets/blueTick.png"
import styles from "./CaringGuide.module.css"
const CaringGuide = ({text}) => {
  return (
    <div className={styles.caringGuide}>
        <img src={blueTick} alt="Blue tick icon" />
        <p>{text}</p>
    </div>
  )
}

export default CaringGuide