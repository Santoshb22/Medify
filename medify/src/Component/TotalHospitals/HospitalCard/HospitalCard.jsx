import { useState } from "react";
import styles from "./HospitalCard.module.css";
import hospitalImg from "../../../assets/hospitalimg.png";
import like from "../../../assets/like-icon.png";
import Button from "../../Button/Button";
import BookSlot from "../../BookSlot/BookSlot";
import { Button as MuiButton} from "@mui/material";

const HospitalCard = ({ hospital, onBookClick, slotBooking = false, date, time }) => {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  console.log(date, time)

  const handleBook = () => {
    if (!selectedSlot || !selectedDate) {
      alert("Please select a time slot and date before booking!");
      return;
    }
    onBookClick(hospital, selectedSlot, selectedDate);
  };

  return (
    <div className={slotBooking && styles.hospitalCardWrapper}>
      <div className={!slotBooking? `${styles.boxShadow} ${styles.hospitalCard}`: styles.hospitalCard}>
        <div className={styles.hospitalCardLeft}>
          <div className={styles.hospitalCardImg}>
            <img src={hospitalImg} alt="Hospital" />
          </div>

          <div className={styles.hospitalCardContent}>
              <h4>{hospital["Hospital Name"]}</h4>

              <div className={styles.aboutHospital}>
                <p className={styles.cityLocation}>
                  {hospital.City}, {hospital.State}
                </p>
                <p className={styles.centerType}>{hospital["Hospital Type"]}</p>
              </div>

              <div className={styles.consultingPrice}>
                { !date && !time && <p>
                  <span className={styles.freePrice}>FREE</span>{" "}
                  <span className={styles.actualPrice}>$500</span> Consultation fee
                  at clinic
                </p>}
              </div>
  
              <div className={styles.hospitalRating}>
                <img src={like} alt="like icon" />
                <p>{hospital["Hospital overall rating"] === "Not Available" ? "N/A" : hospital["Hospital overall rating"]}</p>
              </div>
          </div>
        </div>

        <div className={styles.hospitalCardContentRight}>
          {
            (date && time)? <div className={styles.dateTime}>
              <MuiButton  sx={{color: "#2AA7FF", border: "1px solid #2AA7FF", fontWeight: 400,  fontSize: "14px", marginRight: "10px"}} variant = "outlined">{time}</MuiButton>
              <MuiButton sx={{color: "#007100", border: "1px solid #007100", fontWeight: 700, fontSize: "14px"}} variant="outlined">{date}</MuiButton>
            </div> :
             <div className={styles.bookCenterVisit}>
             <p>Available Today</p>
             <Button
               buttonText={"Book FREE Center Visit"}
               onClick={handleBook}
             />
           </div>
          }
        </div>

      </div>

      {
        slotBooking && <div className={styles.bookSlot}>
        <BookSlot
          onSlotSelect={(slot, date) => {
            setSelectedSlot(slot);
            setSelectedDate(date);
          }}
        />
      </div>
      }

    </div>
  );
};

export default HospitalCard;
