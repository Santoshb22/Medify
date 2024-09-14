import styles from "./Navbar.module.css";
import Button from "../Button/Button";
import { NavLink } from 'react-router-dom';  // Import NavLink
import MedifyLogo from "../MedifyLogo/MedifyLogo";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  function hanldeBooking() {
    navigate("/mybookings");
    console.log("booking");
  }

  return (
    <div className={styles.navbar}>
    <div>
      <MedifyLogo />
    </div>

    <div className={styles.navbarContent}>
      <ul>
        <li>
          <NavLink
            to="/find-doctors"
            className={({ isActive }) => 
              `${styles.navbarLink} ${isActive ? styles.active : ''}`
            }
          >
            Find Doctors
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/hospitals"
            className={({ isActive }) => 
              `${styles.navbarLink} ${isActive ? styles.active : ''}`
            }
          >
            Hospitals
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/medicines"
            className={({ isActive }) => 
              `${styles.navbarLink} ${isActive ? styles.active : ''}`
            }
          >
            Medicines
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/surgeries"
            className={({ isActive }) => 
              `${styles.navbarLink} ${isActive ? styles.active : ''}`
            }
          >
            Surgeries
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/software"
            className={({ isActive }) => 
              `${styles.navbarLink} ${isActive ? styles.active : ''}`
            }
          >
            Software for Provider
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/facilities"
            className={({ isActive }) => 
              `${styles.navbarLink} ${isActive ? styles.active : ''}`
            }
          >
            Facilities
          </NavLink>
        </li>
      </ul>

      <Button buttonText={"My Bookings"} color={"bgBlue"} onClick={hanldeBooking} />
    </div>
  </div>  );
}

export default Navbar;
