import React from 'react';
import axios from 'axios';

const ThreatList = ({ threats, fetchThreats, setCurrentThreat }) => {
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/threats/${id}`);
      fetchThreats();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Severity</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Reported</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {threats.map((threat) => (
          <tr key={threat._id}>
            <td className="px-6 py-4 whitespace-nowrap">{threat.title}</td>
            <td className="px-6 py-4 whitespace-nowrap">{threat.description}</td>
            <td className="px-6 py-4 whitespace-nowrap">{threat.severity}</td>
            <td className="px-6 py-4 whitespace-nowrap">{new Date(threat.dateReported).toLocaleDateString()}</td>
            <td className="px-6 py-4 whitespace-nowrap">{threat.status}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <button
                onClick={() => setCurrentThreat(threat)}
                className="text-indigo-600 hover:text-indigo-900"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(threat._id)}
                className="ml-4 text-red-600 hover:text-red-900"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ThreatList;
