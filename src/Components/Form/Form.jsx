// Import necessary modules
import React, { useEffect, useState } from "react";
import axios from "axios";

const Form = () => {
  // Create state variables
  const [threatType, setThreatType] = useState("");
  const [threatLevel, setThreatLevel] = useState("");
  const [incidentDateTime, setIncidentDateTime] = useState("");
  const [incidentDescription, setIncidentDescription] = useState("");
  const [affectedSystems, setAffectedSystems] = useState("");
  const [detectionMethod, setDetectionMethod] = useState("");
  const [incidentStatus, setIncidentStatus] = useState("");
  const [incidentReport, setIncidentReport] = useState(null); // Use null for file state
  const [data, setData] = useState(null);

  // Handle form submission
  const handleSubmit = async () => {
    const data = {
      threatLevel,
      threatType,
      incidentDateTime,
      incidentDescription,
      incidentReport,
      affectedSystems,
      incidentStatus,
      detectionMethod,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/incidents",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      // Handle response or any other action after successful submission
    } catch (error) {
      // Handle error
      console.error("Error submitting form:", error);
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/incidents", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(({ data, status }) => {
        if (status == 200) {
          setData(data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  if (!data) {
    // Make it better
    return <div>loading...</div>;
  }

  // Render the form
  return (
    <div className="min-h-screen bg-gray-800 text-white py-6 flex flex-col justify-center sm:py-4">
      <div className="px-0 py-0 bg-gray-900 shadow-lg sm:rounded-3xl sm:p-0 flex justify-center items-center">
        <div className="">
          <div className="text-center">
            <h1 className="text-5xl font-semibold">CyberIce</h1>
            <p className="pt-5 text-xl"> Incident Form</p>
          </div>
          <div className="py-8 text-base leading-2 space-y-0 text-gray-300 sm:text-lg sm:leading-0">
            <div>
              <div className="flex flex-row gap-4">
                <div className="flex flex-col md:flex-col">
                  <input
                    className="block border border-gray-200 p-3 rounded mb-4"
                    type="text"
                    name="threatType"
                    placeholder="Threat Type"
                    value={threatType}
                    onChange={(e) => setThreatType(e.target.value)}
                  />
                  <input
                    className="block border border-gray-200 p-3 rounded mb-4"
                    type="text"
                    name="threatLevel"
                    placeholder="Threat Level"
                    value={threatLevel}
                    onChange={(e) => setThreatLevel(e.target.value)}
                  />
                  <input
                    className="block border border-gray-200 p-3 rounded mb-4"
                    type="datetime-local"
                    name="incidentDateTime"
                    placeholder="Incident Date & Time"
                    value={incidentDateTime}
                    onChange={(e) => setIncidentDateTime(e.target.value)}
                  />
                  <textarea
                    className="block border border-gray-200 p-3 rounded mb-4"
                    name="incidentDescription"
                    placeholder="Incident Description"
                    value={incidentDescription}
                    onChange={(e) => setIncidentDescription(e.target.value)}
                  ></textarea>
                </div>
                <div className="flex flex-col md:flex-col">
                  <input
                    className="block border border-gray-200 p-3 rounded mb-4"
                    type="text"
                    name="affectedSystems"
                    placeholder="Affected Systems"
                    value={affectedSystems}
                    onChange={(e) => setAffectedSystems(e.target.value)}
                  />
                  <input
                    className="block border border-gray-200 p-3 rounded mb-4"
                    type="text"
                    name="detectionMethod"
                    placeholder="Detection Method"
                    value={detectionMethod}
                    onChange={(e) => setDetectionMethod(e.target.value)}
                  />
                  <input
                    className="block border border-gray-200 p-3 rounded mb-4"
                    type="text"
                    name="incidentStatus"
                    placeholder="Incident Status"
                    value={incidentStatus}
                    onChange={(e) => setIncidentStatus(e.target.value)}
                  />
                  <input
                    className="block border border-gray-200 p-3 rounded mb-4"
                    type="file"
                    name="incidentReport"
                    onChange={(e) => setIncidentReport(e.target.files[0])}
                  />
                </div>
              </div>
              <button
                className="block w-full p-3 rounded bg-blue-600 text-white font-bold hover:bg-blue-500"
                onClick={handleSubmit} // Handle form submission on button click
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        {data.map((incident) => (
          <p key={incident._id}>{incident._id}</p>
        ))}
      </div>
    </div>
  );
};

export default Form;
