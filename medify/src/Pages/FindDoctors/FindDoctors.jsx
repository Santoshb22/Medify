import AdCard from "../../Component/AdCard/AdCard";
import Dropdown from "../../Component/Dropdown/Dropdown";
import HospitalCount from "../../Component/TotalHospitals/HopitalCount/HospitalCount";
import HospitalCard from "../../Component/TotalHospitals/HospitalCard/HospitalCard";
import { useLocationContext } from "../../Context/LocationContext";
import styles from "./FindDoctors.module.css";
import AskedQuestion from "../../Component/AskedQuestion/AskedQuestion";

const FindDoctors = () => {
  const { hospitals, selectedState, selectedCity } = useLocationContext();
  const totalCenters = hospitals.length;
  console.log(totalCenters, selectedState);
  const handleBooking = (hospital, slot, date) => {
    if (!slot || !date) {
      alert("Please select a time slot and date before booking!");
      return;
    }
  
    const existingBookings = JSON.parse(localStorage.getItem("hospitalBookings")) || [];
    
    const bookingDetails = {
      hospital,
      slot,
      date,
    }
  
    existingBookings.push(bookingDetails);
  
    localStorage.setItem("hospitalBookings", JSON.stringify(existingBookings));
  
    alert(
      `Booking confirmed for ${hospital["Hospital Name"]} on ${date} at ${slot}`
    );
  };
  

  return (
    <div className={styles.availableDoctors}>
      <div className={styles.searchByState}>
        <Dropdown locationIcon = {true}/>
      </div>

      <div className={styles.hospitalsContent}>
        <div>
         {
          selectedState && selectedCity &&  <div className={styles.hospitalHeader}>
          <HospitalCount totalCenters = {totalCenters} state = {selectedState}/>
          </div>
         }

          <div className={styles.hospitalCard}>
            {hospitals.length > 0 ? (
              hospitals.map((data) => (
                <HospitalCard
                  key={data["Provider ID"]}
                  hospital={data}
                  onBookClick={handleBooking}
                  slotBooking = {true}
                />
              ))
            ) : (
              <div>
                <h5>Search Centers by Location</h5>
              </div>
            )}
          </div>
        </div>

        <div className={styles.medicalAdCard}>
          <AdCard />
        </div>
      </div>

      <AskedQuestion />
    </div>
  );
};

export default FindDoctors;
