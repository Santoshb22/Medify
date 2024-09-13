import styles from "./Specialisation.module.css"
import ServiceCard from "../ServiceCard/ServiceCard"
import Button from "../Button/Button"
import dentistry from "../../assets/dentistry-store-icon.png"
import stethoscope from "../../assets/stethoscope-icon.png"
import heart from "../../assets/heart-icon.png"
import mriMonitor from "../../assets/heart-rate-icon.png"
import bloodTest from "../../assets/blood-test-icon.png"
import immune from "../../assets/immune-icon.png"
import drugStore from "../../assets/drug-store-icon.png"
import xRay from "../../assets/x-ray-icon.png"


const Specialisation = () => {

  const specialisationData = [
    { logo: dentistry, text: "Dentistry" },
    { logo: stethoscope, text: "Primary Care" },
    { logo: heart, text: "Cardiology" },
    { logo: mriMonitor, text: "MRI Resonance" },
    { logo: bloodTest, text: "Blood Test" },
    { logo: immune, text: "Piscologist" },
    { logo: drugStore, text: "Laboratory" },
    { logo: xRay, text: "X-Ray" },
  ]

  return (
    <div className={styles.speacialisationWrapper}>
        <div className={styles.specialisationContent}>
            <h2>Find By Specialisation</h2>

            <div className={styles.specialists}>
                {
                  specialisationData.map((data, idx) => (
                    <ServiceCard logo = {data.logo} text = {data.text} key={idx} className = {"specialistsCard"}/>
                  ))
                }
            </div>

            <Button buttonText = {"View All"}/>
        </div>
    </div>
  )
}

export default Specialisation