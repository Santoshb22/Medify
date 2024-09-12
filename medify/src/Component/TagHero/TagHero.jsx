import styles from "./TagHero.module.css"

const TagHero = () => {
  return (
    <div className={styles.tagHero}>
        <div  className={styles.mainHeading}>
            <p>Skip the travel! Find Online <br />
               <span className={styles.highlightedHeading}>Medical <span className={styles.centers}>Centers</span></span>
            </p>
        </div>

        <div className={styles.heroParagraph}>
            <p>
            Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.
            </p>
        </div>
    </div>
  )
}

export default TagHero