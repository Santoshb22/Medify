import TagHero from "../../Component/TagHero/TagHero"
import styles from "./Home.module.css"
import heroImage from "../../assets/hero-image.png"
const Home = () => {
  return (
    <div className={styles.heroWrapper}>

        <div className={styles.heroContent}>

          <div className={styles.topHeroSection}>
            <TagHero/>
            <div className={styles.heroImage}>
              <img src={heroImage} alt="hero-image" />
            </div>
          </div>

          <div className={styles.bottomHeroSection}>

          </div>
        </div>
    </div>
  )
}

export default Home