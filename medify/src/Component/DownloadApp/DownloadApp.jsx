import styles from "./DownloadApp.module.css"
import smallMobileBorder from "../../assets/mobileBorderSmall.png"
import smallScreenImg from "../../assets/smallScreen.png"
import largeMobileBorder from "../../assets/mobileBorderlarge.png"
import largeScreenImg from "../../assets/largeScreen.png"
import playStore from "../../assets/google_play.png"
import appleStore from "../../assets/apple_store.png"
import Button from "../Button/Button"
import arrow from "../../assets/arrow.png"
const DownloadApp = () => {
  return (
    <div className={styles.downloadAppWrapper}>
        <div className={styles.downloadAppContainer}>

            <div className={styles.mobileScreen}>
                <div className={styles.smallScreen}>
                    <img className={styles.mobileBorderSmall} src={smallMobileBorder} alt="mobile border" />
                    <img className={styles.displayImgSmall} src={smallScreenImg} alt="mobile screen" />
                </div>

                <div className={styles.largeScreen}>
                    <img className={styles.mobileBorderLarge} src={largeMobileBorder} alt="mobile screen" />
                    <img className={styles.displayImgLarge} src={largeScreenImg} alt="mobile screen" />
                </div>
            </div>

            <div className={styles.downLoadLinks}>
                <div className={styles.vectorIcon}>
                    <img src={arrow} alt="arrow icon" />
                </div>

                <div>
                    <h2>Download the <br /> <span>Medify</span> App</h2>
                    <p>Get the link to download the app</p>

                    <div className={styles.linkOnSMS}>
                    <Button buttonText="send SMS"/>
                    </div>
                    
                    <div className={styles.appDownloadLink}>
                        <img className={styles.playStore} src={playStore} alt="google play store" />
                        <img className = {styles.appStore} src={appleStore} alt="Apple store" />
                    </div>
                </div>    
            </div>
        </div>
    </div>
  )
}

export default DownloadApp