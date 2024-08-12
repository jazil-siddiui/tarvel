import React from 'react';

const Card = ({ image, title, price, duration, durationIcon }) => {
  return (
    <div className="w-72 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img src={image} alt={title} className="w-72 rounded-t-2xl h-96" />
      <div className="p-4">
        <div className='flex justify-between text-[#5E6282]'>
          <h4 className="text-xl font-bold mb-2">{title}</h4>
          <h1 className='font-bold'>{price}</h1>
        </div>
        <div className='flex space-x-4 text-[#5E6282]'>
          <img src={durationIcon} alt="Duration Icon" />
          <p className="text-gray-700">{duration}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
