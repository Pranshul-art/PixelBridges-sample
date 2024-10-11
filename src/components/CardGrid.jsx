import React from 'react';
import Card from './Card';

export const CardGrid = () => {
  const cardsData = [
    {
      image: 'first.png',
      title: 'Community Building',
      description: 'Initial Launch',
      bgColor: 'bg-yellow-500',
    },
    {
      image: 'second.png',
      title: 'Merchandise Store',
      description: 'Store Launch',
      bgColor: 'bg-blue-500',
    },
    {
      image: 'eigth.png',
      title: 'Events and Contests',
      description: 'Community Events',
      bgColor: 'bg-purple-500',
    },
    {
      image: 'seventh.png',
      title: 'New Features',
      description: 'Expansions',
      bgColor: 'bg-red-500',
    },
  ];

  return (
    <div className="flex space-x-6 justify-center ">
        
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          image={card.image}
          bgColor={card.bgColor}
        />
      ))}
    </div>
  );
};


