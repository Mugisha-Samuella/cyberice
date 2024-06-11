import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ThreatForm from './ThreatForm';
import ThreatList from './ThreatList';

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
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Cybersecurity Threats</h1>
      <ThreatForm fetchThreats={fetchThreats} currentThreat={currentThreat} setCurrentThreat={setCurrentThreat} />
      <div className="mt-10">
        <ThreatList threats={threats} fetchThreats={fetchThreats} setCurrentThreat={setCurrentThreat} />
      </div>
    </div>
  );
};

export default ThreatDashboard;
