import React from 'react';

const GameCard = ({ title, icon: Icon, url, description }) => {
  const handleClick = () => {
    window.open(url, '_blank');
  };

  return (
    <div 
      onClick={handleClick}
      className="bg-gray-800 p-6 rounded-lg cursor-pointer transform transition-all hover:scale-105 hover:shadow-xl"
    >
      <div className="flex flex-col items-center space-y-4">
        <Icon className="text-4xl text-blue-500" />
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-gray-400 text-center text-sm">{description}</p>
      </div>
    </div>
  );
};

export default GameCard;