import Dropdown from "../../Component/Dropdown/Dropdown"
import styles from "./FindDoctors.module.css"
const FindDoctors = () => {
  return (
    <div className={styles.availableDoctors}>
      <div className={styles.searchByState}>
        <Dropdown/>
      </div>
    </div>
  )
}

export default FindDoctors