import { useState } from "react";
import { Tabs, Tab, Box, Button, Typography } from "@mui/material";
import CustomTab from "./CustomTab/CustomTab";
import styles from "./BookSlot.module.css"; // Make sure to use your existing styles

const BookSlot = ({ onSlotSelect }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState("Today");

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
    <Box sx={{ display: "flex", justifyContent: "start", alignItems: "center", gap: 2 }}>
      <Typography variant="h6" className={styles.slotCategory}>
        {slotCategory}
      </Typography>
      {slots.length > 0 ? (
        slots.map((time) => (
          <Button
            key={time}
            variant={selectedTime === time ? "contained" : "outlined"}
            onClick={() => handleTimeSelection(time)}
            sx={{ marginTop: 1 }}
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

  return (
    <div className={styles.bookingSlots}>
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        centered
        className={styles.tabsContainer}
        TabIndicatorProps={{
          style: {
            backgroundColor: "#00BFA5",
          },
        }}
      >
        {timeSlots.map((day, index) => (
          <Tab
            key={index}
            label={<CustomTab date={day.date} available={day.available} />}
            className={styles.tab}
          />
        ))}
      </Tabs>

      <Box sx={{ padding: 2 }}>
        {renderSlots("Morning", timeSlots[selectedTab].slots.morning)}
        {renderSlots("Afternoon", timeSlots[selectedTab].slots.afternoon)}
        {renderSlots("Evening", timeSlots[selectedTab].slots.evening)}
      </Box>
    </div>
  );
};

export default BookSlot;
