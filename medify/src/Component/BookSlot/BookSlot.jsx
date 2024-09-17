import { useEffect, useState } from "react";
import { Tabs, Tab, Box, Button, Typography, IconButton } from "@mui/material";
import CustomTab from "./CustomTab/CustomTab";
import styles from "./BookSlot.module.css"; 
import prevChevron from "../../assets/prev-chevron.png"
import nextChevron from "../../assets/next-chevron.png";

const BookSlot = ({ onSlotSelect }) => {
  const generateDate = () => {
    const date = [];
    const today = new Date();

    for(let i = 0; i < 7; i++) {
      const currDate = new Date(today);
      currDate.setDate(today.getDate() + i);

      let dateFormatteIs;

      if( i === 0) {
        dateFormatteIs = "Today";
      } else if(i ===1){
        dateFormatteIs = "Tomorrow";
      } else {
        dateFormatteIs = currDate.toLocaleDateString("en-US", {
          weekday: "short",
          day: "numeric",  
          month: "short",   
        })
      }

      date.push({
        date: dateFormatteIs,
        available: Math.floor(Math.random() * 20), 
        slots: {
          morning: ["11:00 AM"],
          afternoon: ["12:00 PM", "1:00 PM","2:30 PM", "3:00 PM", ],
          evening: ["4:00 PM", "5:00 PM", "6:00 PM"],
        }
      })
    }

    return date;
  }


  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState("Today");
  const [timeSlots, setTimeSlots] = useState([])
  const [visibleRange, setVisibleRange] = useState({ start: 0, end: 3 });

  useEffect(()=> {
    const slots = generateDate();
    setTimeSlots(slots)
    setSelectedDate(slots[0].date);
  }, [])
  
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
    setSelectedDate(timeSlots[newValue].date);
  };

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
    onSlotSelect(time, selectedDate);
  };

  const renderSlots = (slotCategory, slots) => (
    <Box sx={{ display: "flex", justifyContent: "start", alignItems: "center", gap: 0.4,}}>
    <Typography variant="h6"  className={styles.slotCategory} >
      {slotCategory}
    </Typography>
    {slots.length > 0 ? (
      slots.map((time) => (
        <Button
          key={time}
          variant={selectedTime === time ? "contained" : "outlined"}
          onClick={() => handleTimeSelection(time)}
          sx={{ marginTop: 1, color: "#2AA7FF",  }} 
        >
          {time}
        </Button>
      ))
    ) : (
      <Typography variant="body2" color="textSecondary">
        No slots available
      </Typography>
    )}
  </Box>
  );

  const handleNext = () => {
    if (visibleRange.end < timeSlots.length) {
      setVisibleRange({ start: visibleRange.start + 1, end: visibleRange.end + 1 });
    }
  };

  const handlePrev = () => {
    if (visibleRange.start > 0) {
      setVisibleRange({ start: visibleRange.start - 1, end: visibleRange.end - 1 });
    }
  };
  const currentDay = timeSlots[selectedTab] || { slots: { morning: [], afternoon: [], evening: [] } };

  return (
    <div className={styles.bookingSlots}>
      <Box 
        sx={{ 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "space-between",
          
        }}
      >
        <IconButton onClick={handlePrev} disabled={visibleRange.start === 0}>
          <img src={prevChevron} alt="prev btn icon" />
        </IconButton>

        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          className={styles.tabsContainer}
          sx={{
            ".MuiTab-root": {
              width: "auto",
             
            },
          }}
        >
          {timeSlots.slice(visibleRange.start, visibleRange.end).map((day, index) => (
            <Tab
              key={index + visibleRange.start} 
              label={<CustomTab date={day.date} available={day.available} />}
              className={styles.tab}
            />
          ))}
        </Tabs>

        <IconButton onClick={handleNext} disabled={visibleRange.end >= timeSlots.length}>
          <img src={nextChevron} alt="next btn icon" />
        </IconButton>
      </Box>

      <Box> 
        <Box className={styles.slots}>
          {renderSlots("Morning", currentDay.slots.morning)}
        </Box>

        <Box className={styles.slots}>
          {renderSlots("Afternoon", currentDay.slots.afternoon)}
        </Box>

        <Box className={styles.slots}>
          {renderSlots("Evening", currentDay.slots.evening)}
        </Box>
      </Box>
    </div>
  );
};

export default BookSlot;
