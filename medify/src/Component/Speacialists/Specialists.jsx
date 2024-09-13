import {specialists } from "../../Data/data"
import Carousel from "../Carousel/Carousel"
import styles from "./Specialists.module.css"

const Specialists = () => {
  return (
    <div className={styles.specialistsWrapper}>
        <div className={styles.specialistsHeading}> 
          <h2>Our Medical Specialists</h2>
        </div>

        <div className={styles.specialistsCarousel}>
            <Carousel carouselData = {specialists} grabCursor = {true} drDetails = {true}/>
        </div>
    </div>
  )
}

export default Specialists