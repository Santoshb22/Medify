import AskedQuestion from "../AskedQuestion/AskedQuestion"
import DownloadApp from "../DownloadApp/DownloadApp"
import MedifyLogo from "../MedifyLogo/MedifyLogo"
import styles from "./Footer.module.css"
import FooterLinkGroup from "./FooterLinkGroup/FooterLinkGroup"
import faceBook from "../../assets/facebook.png"
import pinterest from "../../assets/pinterest.png"
import twitter from "../../assets/twitter.png"
import youtube from "../../assets/youtube.png"
const Footer = () => {

  const footerLinks = [
    ['About Us', 'Our Pricing', 'Our Gallery', 'Appointment', 'Privacy Policy'],
    ['Orthology', 'Neurology', 'Dental Care', 'Ophthalmology', 'Cardiology'],
    ['About Us', 'Our Pricing', 'Our Gallery', 'Appointment', 'Privacy Policy'],
  ];

  const socialIcons = [
    {logo: youtube}, {logo: twitter}, {logo: pinterest}, {logo: faceBook}
  ]

  return (
    <div className={styles.footerWrapper}>
      <div className={styles.frequentlyAskedQuestion}>
        <AskedQuestion/>
      </div>      

      <div className={styles.downloadAppSection}>
        <DownloadApp/>
      </div>

      <div className={styles.mainFooterWrapper}>
        <div className={styles.footerContent}>

          <div className={styles.footerTop}>
            <div className={styles.medifySocials}>
              <MedifyLogo/>
              <div className={styles.socialMedia}>
                {
                  socialIcons.map((data, idx) => (
                    <img key={idx} src={data.logo} alt="social icon" />
                  ))
                }
              </div>
            </div>

            <div className={styles.footerLists}>
              {footerLinks.map((group, idx) => (
                <FooterLinkGroup key={idx} links={group}/>
              ))}
            </div>
          </div>

          <div className={styles.footerBottom}>
            <p>Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer