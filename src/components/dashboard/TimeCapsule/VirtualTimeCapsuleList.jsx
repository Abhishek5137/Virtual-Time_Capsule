// VirtualTimeList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VirtualTimeCapsuleList = () => {
  const [timeCapsules, setTimeCapsules] = useState([]);

  useEffect(() => {
    // Fetch the list of virtual time capsules from your backend API
    const fetchTimeCapsules = async () => {
      try {
        const response = await axios.get('/api/time-capsules'); // Adjust the endpoint based on your API

        // Check if the response data is an array
        if (Array.isArray(response.data)) {
          setTimeCapsules(response.data);
        } else {
          console.error('Invalid API response format. Expected an array.');
        }
      } catch (error) {
        console.error('Error fetching virtual time capsules:', error);
      }
    };

    fetchTimeCapsules(); // Fetch data when the component mounts
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Virtual Time Capsules</h2>
      {timeCapsules.length === 0 ? (
        <p>No virtual time capsules available.</p>
      ) : (
        <ul>
          {timeCapsules.map((timeCapsule) => (
            <li key={timeCapsule.id} className="mb-4">
              <h3 className="text-lg font-bold">{timeCapsule.title}</h3>
              <p>{timeCapsule.description}</p>
              {/* Add more details or actions as needed */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default VirtualTimeCapsuleList;
