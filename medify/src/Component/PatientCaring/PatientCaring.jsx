import styles from "./PatientCaring.module.css"
import PatientCaring1 from "../../assets/PatientCaring1.png"
import PatientCaring2 from "../../assets/PatientCaring2.png"
import BookConsultation from "./BookConsultation/BookConsultation"
import CaringGuide from "./CaringGuide/CaringGuide"
const PatientCaring = () => {
  return (
    <div className={styles.PatientCaringWrapper}>

        <div className={styles.PatientCaringContent}>

            <div className={styles.PatientCaringLeft}>
                <div className={styles.parentLeftTop}>
                   <div className={styles.consultationCard}>
                      <BookConsultation/>
                    </div>
                    <div>
                      <img src={PatientCaring1} alt="doctor parent caring img" />
                    </div>
                </div>

                <div className={styles.parentLeftBottom}>
                    <img src={PatientCaring2} alt="doctor parent caring img" />
                </div>
            </div>

            <div className={styles.PatientCaringRight}>
                <p className={styles.PatientCaringTitle}>HELPING PATIENTS FROM AROUND THE GLOBE!!</p>
                <h2 className={styles.PatientCaringHeading}>Patient <span>Caring</span></h2>
                <p className={styles.PatientCaringPara}>Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare.</p>
                <div className={styles.PatientCaringGuide}>
                  <CaringGuide text="Stay Updated About Yout Health"/>
                  <CaringGuide text="Check Your Result Online"/>
                  <CaringGuide text="Manage Your Appointments"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PatientCaring