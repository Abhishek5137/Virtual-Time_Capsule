// MemoryList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MemoryList = () => {
  const [memories, setMemories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the list of memories from your backend API
    const fetchMemories = async () => {
      try {
        const response = await axios.get('/api/memories'); // Adjust the endpoint based on your API

        // Ensure that the response data is an array before setting the state
        if (Array.isArray(response.data)) {
          setMemories(response.data); // Assuming the API response contains an array of memories
          setError(null);
        } else {
          console.error('Invalid memories data structure:', response.data);
          setMemories([]);
          //setError('Error fetching memories. Please try again later.');
        }
      } catch (error) {
        console.error('Error fetching memories:', error);
        setMemories([]);
        //setError('Error fetching memories. Please try again later.');
      }
    };

    fetchMemories(); // Fetch data when the component mounts
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Memory List</h2>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : memories.length === 0 ? (
        <p>No memories available.</p>
      ) : (
        <ul>
          {memories.map((memory) => (
            <li key={memory.id} className="mb-4">
              <h3 className="text-lg font-bold">{memory.title}</h3>
              <p>{memory.description}</p>
              {/* Add more details or actions as needed */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MemoryList;
