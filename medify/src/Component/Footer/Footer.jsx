import AskedQuestion from "../AskedQuestion/AskedQuestion"
import DownloadApp from "../DownloadApp/DownloadApp"
import styles from "./Footer.module.css"
const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.frequentlyAskedQuestion}>
        <AskedQuestion/>
      </div>      

      <div className={styles.downloadAppSection}>
        <DownloadApp/>
      </div>

      <div className={styles.footer}>
        footer
      </div>
    </div>
  )
}

export default Footer