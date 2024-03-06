import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const MemoryDetail = () => {
  const { memoryId } = useParams();
  const [memory, setMemory] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMemory = async () => {
      try {
        const response = await axios.get(`/api/memory/viewmemory/${memoryId}`);
        setMemory(response.data);
        setError(null);
      } catch (error) {
        console.error('Error fetching memory:', error);
        setError('Error fetching memory. Please try again later.');
      }
    };

    fetchMemory();
  }, [memoryId]);

  const handleEdit = () => {
    navigate(`/memory/edit/${memoryId}`);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/memory/delete/${memoryId}`);
      // Optionally, show success message or update state
      // Redirect to memory list or another page
      navigate('/dashboard/memorylist');
    } catch (error) {
      console.error('Error deleting memory:', error);
      // Optionally, show error message
    }
  };

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!memory) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Memory Details</h2>
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="text-lg font-bold mb-2">{memory.title}</h3>
        <p className="mb-2">{memory.description}</p>
        <div className="grid grid-cols-2 gap-2">
          {memory.selectedFiles.map((file, index) => (
            <img key={index} src={file} alt={`Memory ${memoryId} Image ${index + 1}`} className="w-full h-auto" />
          ))}
        </div>
        <div className="mt-4">
          <button onClick={handleEdit} className="bg-blue-500 text-white px-4 py-2 rounded-full mr-2 hover:bg-blue-600">
            Edit
          </button>
          <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MemoryDetail;
