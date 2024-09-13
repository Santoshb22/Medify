import styles from "./MedifyLogo.module.css"
import logo from "../../assets/navbar-logo.png"

const MedifyLogo = () => {
  return (
    <div className={styles.navbarLogo}>
        <img src={logo} alt="logo" />
        <p>Medify</p>
    </div>
  )
}

export default MedifyLogo