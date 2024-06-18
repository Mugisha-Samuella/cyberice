// src/Pages/ThreatDashboard.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import ThreatForm from "./ThreatForm";
import ThreatList from "./ThreatList";

const ThreatDashboard = () => {
  const [threats, setThreats] = useState([]);
  const [currentThreat, setCurrentThreat] = useState(null);

  const fetchThreats = async () => {
    try {
      const response = await axios.get("http://localhost:3001/threats");
      setThreats(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchThreats();
  }, []);

  return (
    <div className="p-10 overflow-y-none">
      <h1 className="text-3xl font-bold mb-6 text-center">Cybersecurity Threats</h1>
      <div className="flex flex-col md:flex-row md:gap-10 md:p-10 max-h-screen">
        <div className="w-screen">
          <ThreatForm
            fetchThreats={fetchThreats}
            currentThreat={currentThreat}
            setCurrentThreat={setCurrentThreat}
          />
        </div>
        <div className="mt-10 ">
          <ThreatList
            threats={threats}
            fetchThreats={fetchThreats}
            setCurrentThreat={setCurrentThreat}
          />
        </div>
      </div>
    </div>
  );
};

export default ThreatDashboard;
