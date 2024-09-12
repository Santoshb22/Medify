import Header from "./Component/Header/Header"
import "./App.css"
import Footer from "./Component/Footer/Footer"
import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home/Home"
const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element ={<Home/>}/>
        {/* <Route path="/find-doctors" element={<FindDoctors />} />
        <Route path="/hospitals" element={<Hospitals />} />
        <Route path="/medicines" element={<Medicines />} />
        <Route path="/surgeries" element={<Surgeries />} />
        <Route path="/software" element={<Software />} />
        <Route path="/facilities" element={<Facilities />} /> */}
      </Routes>
      <Footer/>
    </div>
  )
}

export default App