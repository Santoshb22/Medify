import Carousel from "../Carousel/Carousel"
import styles from "./Specialists.module.css"

import drAhmadKhan from "../../assets/dr-ahmadkhan.png"
import drHeenaSuchdeva from "../../assets/dr-heenaSuchdeva.png"
import drAnkurSharma from "../../assets/dr-ankurSharma.png"

export const specialistsData = [
  {img: drAhmadKhan,
    name: "Dr. Ahmad Khan",
    specialists: "Neurologist"
  },
  {img: drHeenaSuchdeva,
    name: "Dr. Heerna Suchdeva",
    specialists: "Orthopadics"
  },
  {img: drAhmadKhan,
    name: "Dr. Ankur Sharma",
    specialists: "Medicine"
  },
  {img: drAnkurSharma,
    name: "Dr. Ahmad Khan",
    specialists: "Neurologist"
  },
  {img: drHeenaSuchdeva,
    name: "Dr. Heerna Suchdeva",
    specialists: "Orthopadics"
  },
  {img: drAhmadKhan,
    name: "Dr. Ankur Sharma",
    specialists: "Medicine"
  }
]
const Specialists = () => {
  return (
    <div className={styles.specialistsWrapper}>
        <div className={styles.specialistsHeading}> 
          <h2>Our Medical Specialists</h2>
        </div>

        <div className={styles.specialistsCarousel}>
            <Carousel carouselData = {specialistsData} grabCursor = {true} drDetails = {true}/>
        </div>
    </div>
  )
}

export default Specialists