import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const VirtualTimeCapsuleList = () => {
  const [timeCapsules, setTimeCapsules] = useState([]);

  useEffect(() => {
    // Fetch the list of virtual time capsules from your backend API
    const fetchTimeCapsules = async () => {
      try {
        const response = await axios.get('/api/capsule/allCapsules'); // Adjust the endpoint based on your API
       console.log(response)
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

  const convertToLocalTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Virtual Time Capsules</h2>
      {timeCapsules.length === 0 ? (
        <p>No virtual time capsules available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 h-96 gap-4 ">
               {/*  */}

          {timeCapsules.map((timeCapsule) => (
             <Link key={timeCapsule._id} to={`/timecapsule/${timeCapsule._id}`}>
            <div key={timeCapsule._id} className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-bold mb-2 bg-blue-100 rounded-md p-2">Title : 
               <span className='text-slate-700 pl-3'>
                {timeCapsule.title}
                 </span>
               </h3>
              <p className="mb-2 bg-blue-50 p-2 rounded-md">Description :-{timeCapsule.description}</p>
              <p className="text-sm text-gray-500 mb-2">Reminder Date: {convertToLocalTime(timeCapsule.reminderDate)}</p>
              
              <div className="grid grid-cols-2 gap-2">
                {timeCapsule.selectedFiles.map((file, index) => (
                  <img key={index} src={file} alt={`Image ${index + 1}`} className="w-full h-auto" />
                ))}
              </div>
              {/* Add more details or actions as needed */}
            </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default VirtualTimeCapsuleList;
