import React from "react";
import Dashboard from "../../pages/driver-pages/Dashboard/Dashboard";
import Trips from "../../pages/driver-pages/trips/Trips";




const DriverMainContent = ({activePage}) => {
  return (
    <main className="flex-1 p-6 overflow-auto bg-white">
      {activePage === "Dashboard" && <Dashboard />}
      {activePage === "Trips" && <Trips />}
    </main>
  );
};

export default DriverMainContent;
