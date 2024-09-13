import styles from "./Specialisation.module.css"
import { specialisationData } from "../../Data/data.js"
import ServiceCard from "../ServiceCard/ServiceCard"
import Button from "../Button/Button"
const Specialisation = () => {
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