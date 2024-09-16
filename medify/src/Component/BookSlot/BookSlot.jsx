import { useState } from "react";
import { Tabs, Tab, Box, Button, Typography, IconButton } from "@mui/material";
import CustomTab from "./CustomTab/CustomTab";
import styles from "./BookSlot.module.css"; // Make sure to use your existing styles
import prevChevron from "../../assets/prev-chevron.png"
import nextChevron from "../../assets/next-chevron.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const BookSlot = ({ onSlotSelect }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState("Today");
  const [visibleRange, setVisibleRange] = useState({ start: 0, end: 3 }); // Visible tabs range

  const timeSlots = [
    {
      date: "Today",
      available: 11,
      slots: {
        morning: ["11:30 AM"],
        afternoon: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
        evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
      },
    },
    {
      date: "Tomorrow",
      available: 17,
      slots: {
        morning: [],
        afternoon: ["12:00 PM", "12:30 PM", "01:30 PM"],
        evening: ["06:00 PM", "06:30 PM", "07:00 PM"],
      },
    },
    {
      date: "Fri, 5 May",
      available: 18,
      slots: {
        morning: ["10:00 AM", "11:00 AM"],
        afternoon: ["12:00 PM", "01:00 PM", "02:00 PM"],
        evening: ["05:00 PM", "06:00 PM", "07:00 PM"],
      },
    },
    {
      date: "Fri, 6 May",
      available: 18,
      slots: {
        morning: ["10:00 AM", "11:00 AM"],
        afternoon: ["12:00 PM", "01:00 PM", "02:00 PM"],
        evening: ["05:00 PM", "06:00 PM", "07:00 PM"],
      },
    },
  ];

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
    setSelectedDate(timeSlots[newValue].date);
  };

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
    onSlotSelect(time, selectedDate);
  };

  const renderSlots = (slotCategory, slots) => (
    <Box sx={{ display: "flex", justifyContent: "start", alignItems: "center", gap: 2, }}>
      <Typography variant="h6" className={styles.slotCategory}>
        {slotCategory}
      </Typography>
      {slots.length > 0 ? (
        slots.map((time) => (
          <Button
            key={time}
            variant={selectedTime === time ? "contained" : "outlined"}
            onClick={() => handleTimeSelection(time)}
            sx={{ marginTop: 1, color: "#2AA7FF"}}
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

  return (
    <div className={styles.bookingSlots}>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <IconButton onClick={handlePrev} disabled={visibleRange.start === 0}>
          <img src={prevChevron} alt="prev btn icon" />
        </IconButton>

        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          className={styles.tabsContainer}
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

      <Box sx={{ padding: 4, }}>
        <Box className = {styles.slots}>
        {renderSlots("Morning", timeSlots[selectedTab].slots.morning)}
        </Box>

        <Box className = {styles.slots}>
        {renderSlots("Afternoon", timeSlots[selectedTab].slots.afternoon)}
        </Box>

        <Box>
        {renderSlots("Evening", timeSlots[selectedTab].slots.evening)}
        </Box>
      </Box>
    </div>
  );
};

export default BookSlot;
