# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Medify - Medical Center Slot Booking Platform
 - Overview
    Medify is a React-based web application that allows users to search for medical centers across various states and cities in the USA and book appointment slots. Users can browse available centers by location, view details, and book appointments seamlessly.

 # Key Features
 - Landing Page:

    A top navigation bar giving users access to different sections of the platform (Doctors, Hospitals, Medicines).
    A search form that allows users to select a state and city, fetched via API.
    Displays medical centers based on selected state and city.
    Search Results Page:

    Lists available medical centers in the selected location.
    Option to book an appointment at any of the displayed 
    medical centers.

 - Booking Interface:

    Calendar-like interface to pick an appointment date within a one-week time frame from today.
    Option to select from available time slots for the chosen medical center.
    My Bookings Page:

    Displays user’s booked appointments, including the medical center name, appointment date, and time.
    Responsive Design:

    Fully responsive layout, adhering to the provided Figma design for mobile, tablet, and desktop screens.
    Swiper Library: Used to implement carousels as per the design.
    API Endpoints

# Get list of states:
https://meddata-backend.onrender.com/states

# Get list of cities for a specific state:
https://meddata-backend.onrender.com/cities/:state
- Example: https://meddata-backend.onrender.com/cities/Alaska

# Get list of medical centers for a state and city:
- https://meddata-backend.onrender.com/data?state=<state-name>& city=<city-name>
- Example: https://meddata-backend.onrender.com/data?state=Alaska&city=SOLDOTNA

- Note: The backend may take up to 50-60 seconds to respond.

# Tech Stack
Frontend: React.js
Styling: CSS (Responsive design using media query), Material UI for some components

# API: Fetch data from the provided API using fetch.
# State Management: React hooks (useState, useEffect)
# Swiper Library: For carousels
# Storage: localStorage to persist user bookings
 