import { useEffect, useState } from "react";
import HospitalCard from "../../Component/TotalHospitals/HospitalCard/HospitalCard";
import styles from "./MyBookings.module.css";
import AdCard from "../../Component/AdCard/AdCard";
import Search from "../../Component/Search/Search";
import Button from "../../Component/Button/Button";
const MyBookings = () => {
  const [hospitals, setHospitals] = useState([]);
  useEffect(() => {
    const storedBooking = localStorage.getItem("hospitalBookings");

    if (storedBooking) {
      const parsedBooking = JSON.parse(storedBooking);
      setHospitals(parsedBooking);
    }
  }, []);

  return (
    <div className={styles.bookingContainer}>
       <div className={styles.dropdownWrapper}>
        <h1>My Bookings</h1>
      <div className={styles.dropDown}>
            <Search
              searchText={"Search by location"}
            />
            <Button
            buttonText = "Search" 
            searchIcon = {true}
            />
      </div>
    </div>
      <div className={styles.hospitalsContent}>
        <div>
          {hospitals.length > 0 ? (
            <div className={styles.hospitalCard}>
              {hospitals.map((data, index) => (
                <HospitalCard
                  className = {styles.card}
                  key={index}
                  hospital={data.hospital}
                  date = {data.date}
                  time = {data.slot}
                />
              ))}
            </div>
          ) : (
            <div>
              <h5>No Bookings</h5>
            </div>
          )}
        </div>
      
        <div className={styles.medicalAdCard}>
          <AdCard />
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
