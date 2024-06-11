import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ThreatForm = ({ fetchThreats, currentThreat, setCurrentThreat }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    severity: '',
    dateReported: '',
    status: ''
  });

  useEffect(() => {
    if (currentThreat) {
      setFormData(currentThreat);
    } else {
      setFormData({
        title: '',
        description: '',
        severity: '',
        dateReported: '',
        status: ''
      });
    }
  }, [currentThreat]);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (currentThreat) {
        await axios.put(`http://localhost:3001/threats/${currentThreat._id}`, formData);
        setCurrentThreat(null);
      } else {
        await axios.post("http://localhost:3001/threats", formData);
      }
      fetchThreats();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label htmlFor="title" className="text-sm font-medium mb-2">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          onChange={handleChange}
          value={formData.title}
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="description" className="text-sm font-medium mb-2">Description</label>
        <input
          id="description"
          name="description"
          type="text"
          className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          onChange={handleChange}
          value={formData.description}
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="severity" className="text-sm font-medium mb-2">Severity</label>
        <input
          id="severity"
          name="severity"
          type="text"
          className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          onChange={handleChange}
          value={formData.severity}
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="dateReported" className="text-sm font-medium mb-2">Date Reported</label>
        <input
          id="dateReported"
          name="dateReported"
          type="date"
          className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          onChange={handleChange}
          value={formData.dateReported}
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="status" className="text-sm font-medium mb-2">Status</label>
        <input
          id="status"
          name="status"
          type="text"
          className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          onChange={handleChange}
          value={formData.status}
          required
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center px-20 py-2 bg-Dark text-white rounded-md hover:bg-Dark2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {currentThreat ? 'Update' : 'Submit'}
      </button>
    </form>
  );
};

export default ThreatForm;
