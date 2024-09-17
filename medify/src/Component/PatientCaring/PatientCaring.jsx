import styles from "./patientCaring.module.css"
import parentCaring1 from "../../assets/parentcaring1.png"
import parentCaring2 from "../../assets/parentcaring2.png"
import BookConsultation from "./BookConsultation/BookConsultation"
import CaringGuide from "./CaringGuide/CaringGuide"
const ParentCaring = () => {
  return (
    <div className={styles.parentCaringWrapper}>

        <div className={styles.parentCaringContent}>

            <div className={styles.parentCaringLeft}>
                <div className={styles.parentLeftTop}>
                   <div className={styles.consultationCard}>
                      <BookConsultation/>
                    </div>
                    <div>
                      <img src={parentCaring1} alt="doctor parent caring img" />
                    </div>
                </div>

                <div className={styles.parentLeftBottom}>
                    <img src={parentCaring2} alt="doctor parent caring img" />
                </div>
            </div>

            <div className={styles.parentCaringRight}>
                <p className={styles.parentCaringTitle}>HELPING PATIENTS FROM AROUND THE GLOBE!!</p>
                <h2 className={styles.parentCaringHeading}>Patient <span>Caring</span></h2>
                <p className={styles.parentCaringPara}>Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare.</p>
                <div className={styles.parentCaringGuide}>
                  <CaringGuide text="Stay Updated About Yout Health"/>
                  <CaringGuide text="Check Your Result Online"/>
                  <CaringGuide text="Manage Your Appointments"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ParentCaring