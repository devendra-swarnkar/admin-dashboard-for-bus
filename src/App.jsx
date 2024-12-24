import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Dashboardpage from "./components/Dashboardpage";
import BusTracking from "./components/BusTracking";
import EmployeeData from "./components/EmployeeData";
import WebsiteStatus from "./components/WebsiteStatus";
import BusRoutes from "./components/BusRoutes";
import Booking from "./components/Booking";
import BranchData from "./components/BranchData";
import BusData from "./components/BusData";
import PassengersData from "./components/PassengersData";
import LogInPage from "./pages/login";



const App = () => {

  const loggedInUserLocal = localStorage.getItem("LoggedInUser");

  const loggedIn = loggedInUserLocal ?? false;
  const currentUser = loggedInUserLocal ? JSON.parse(loggedInUserLocal) : null;
  console.log(currentUser);

  return (

    <div>
      {
        loggedIn ? (
          <BrowserRouter>
            <div>

              <Navbar />

            </div>
          </BrowserRouter>
        ) : (
          ""
        )
      }
      <Router>
        <div>
          <Routes>
            <Route path="/Dashboardpage" element={<Dashboardpage />} />
            {

              loggedIn ? (
                <Route path="/" element={<Dashboardpage />} />) : (<Route path="/" element={<LogInPage />} />)
            }
            <Route path="/BusRoutes" element={<BusRoutes />} />
            <Route path="/Booking" element={<Booking />} />
            <Route path="/BranchData" element={<BranchData />} />
            <Route path="/BusTracking" element={<BusTracking />} />
            <Route path="/EmployeeData" element={<EmployeeData />} />
            <Route path="/WebsiteStatus" element={<WebsiteStatus />} />
            <Route path="/PassengersData" element={<PassengersData />} />
            <Route path="/BusData" element={<BusData />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
