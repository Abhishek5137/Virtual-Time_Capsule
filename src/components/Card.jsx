import React from 'react';

const Card = ({ title, backgroundImage }) => {
  return (
    <div
      className="relative h-36 w-36 rounded-3xl m-2 shadow-lg ring-1 ring-sky-500 overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 ease-in-out"
    >
      <img
        src={backgroundImage}
        alt="image"
        className="w-full h-full bg-cover bg-center rounded-md object-cover"
      />
      <div className="h-36 w-36 absolute inset-0 flex items-center justify-center  ">
        <button className="text-gray-700 text-2xl font-bold absolute inset-x-0 bottom-0 h-8 
          text-center    bg-blue-500 ">{title}</button>
      </div>
    </div>
  );
};

export default Card;
