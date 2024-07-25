import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Screens/Home";
import Contact from "./Screens/Contact";
import AboutUs from "./Screens/AboutUs";
import Principal from "./Screens/Principal";
import ZooRoad from "./Screens/ZooRoad";
import Beltola from "./Screens/Beltola";
import SixMile from "./Screens/SixMile";
import Moran from "./Screens/Moran";
import Dharmanagar from "./Screens/Dharmanagar";
import ScrollToTop from "./Components/ScrollToTop";
import Classes from "./Screens/Classes";

function App() {
  return(
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contactus" element={<Contact/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/principals-desk" element={<Principal/>}/>
        <Route path="/sparsh-zoo-road" element={<ZooRoad/>}/>
        <Route path="/sparsh-beltola" element={<Beltola/>}/>
        <Route path="/sparsh-six-mile" element={<SixMile/>}/>
        <Route path="/sparsh-moran" element={<Moran/>}/>
        <Route path="/sparsh-dharmanagar" element={<Dharmanagar/>}/>
        <Route path="/classes" element={<Classes/>}/>
      </Routes>
      <ScrollToTop/>
    </>
  )
}

export default App;
