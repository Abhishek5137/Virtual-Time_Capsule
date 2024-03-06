import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MemoryList = () => {
  const [memories, setMemories] = useState([]);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // Fetch the list of memories from your backend API
    const fetchMemories = async () => {
      try {
        const response = await axios.get('/api/memory/allmemories'); // Adjust the endpoint based on your API

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {memories.map((memory) => (
            <Link key={memory._id} to={`/memory/${memory._id}`}>
              <div className="bg-white rounded-lg shadow-md p-4 cursor-pointer">
                <h3 className="text-lg font-bold mb-2">{memory.title}</h3>
                <p className="mb-2">{memory.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {memory.selectedFiles.map((file, index) => (
                    <img key={index} src={file} alt='no image' className="w-full h-auto" />
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MemoryList;
