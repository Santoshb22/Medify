import styles from "./MedifyLogo.module.css"
import logo from "../../assets/navbar-logo.png"
import { useNavigate } from "react-router-dom"

const MedifyLogo = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.navbarLogo} onClick={() => navigate("/")}>
        <img src={logo} alt="logo" />
        <p>Medify</p>
    </div>
  )
}

export default MedifyLogo