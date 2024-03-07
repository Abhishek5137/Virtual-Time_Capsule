import React, { useState, useEffect } from 'react';
import Card from '../Card';

const CardContainer = () => {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    // Fetch data from your API
    const fetchData = async () => {
      try {
        const response = await fetch('/api/capsule/allCapsules');
        if (response.ok) {
          const data = await response.json();
          setCardsData(data.reverse()); // Assuming your API response is an array of objects with properties like 'title', 'backgroundImage', 'createdAt', 'description', 'reminderDate', 'selectedFiles', 'updatedAt', '__v', and '_id'
        } else {
          console.error('Error fetching data from the API');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div className="flex flex-wrap justify-center">
      {cardsData.map((capsule, index) => (
        <Card
          key={index}
          title={capsule.title}
          backgroundImage={capsule.selectedFiles[0]} // Use the first image URL as backgroundImage
          
        />
      ))}
    </div>
  );
};

export default CardContainer;
