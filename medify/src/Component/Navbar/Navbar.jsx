import styles from "./Navbar.module.css"
import logo from "../../assets/navbar-logo.png"
import Button from "../Button/Button"
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <div className={styles.navbarLogo}>
            <img src={logo} alt="logo" />
            <p>Medify</p>
        </div>

        <div className={styles.navbarContent}>
            <ul>
                <li><Link to="/find-doctors" className={styles.navbarLink}>Find Doctors</Link></li>
                <li><Link to="/hospitals" className={styles.navbarLink}>Hospitals</Link></li>
                <li><Link to="/medicines" className={styles.navbarLink}>Medicines</Link></li>
                <li><Link to="/surgeries" className={styles.navbarLink}>Surgeries</Link></li>
                <li><Link to="/software" className={styles.navbarLink}>Software for Provider</Link></li>
                <li><Link to="/facilities" className={styles.navbarLink}>Facilities</Link></li>
            </ul>

            <Button buttonText={"My Bookings"} color={"bgBlue"} />            
        </div>
    </div>
  )
}

export default Navbar