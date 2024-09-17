import styles from "./BookConsultation.module.css"
import contactIcon from "../../../assets/contact-icon.png"
const BookConsultation = () => {
  return (
<div className={styles.bookConsultation}>
    <div className={styles.freeConsulting}>
        <img src={contactIcon} alt="contact icon" />
        <p className={styles.freeConsultingText}>Free Consultation</p>
    </div>

    <div>
      <p>Consulting with the best</p>
    </div>
</div>
  )
}

export default BookConsultation