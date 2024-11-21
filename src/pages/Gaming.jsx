import React from 'react';
import GameCard from '../components/GameCard';
import { FaGamepad, FaGhost } from 'react-icons/fa';
import BackButton from '../components/BackButton';

const games = [
  {
    title: 'Pac-Man',
    icon: FaGhost,
    url: 'https://www.google.com/logos/2010/pacman10-i.html',
    description: 'Play the classic Pac-Man arcade game'
  },
  {
    title: 'Tic-Tac-Toe',
    icon: FaGamepad,
    url: 'https://rajmaurya29.github.io/Tic-Tac-Toe/',
    description: 'Challenge your friends in Tic-Tac-Toe'
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 mt-16">
      <BackButton/>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          Gaming Portal
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {games.map((game, index) => (
            <GameCard key={index} {...game} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;