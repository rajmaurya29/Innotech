import { FaGamepad, FaChess, FaPuzzlePiece, FaGhost } from 'react-icons/fa';

export const games = [
  {
    title: 'Pac-Man',
    icon: FaGhost,
    url: 'https://www.google.com/logos/2010/pacman10-i.html',
    description: 'Play the classic Pac-Man arcade game'
  },
  {
    title: 'Tic-Tac-Toe',
    icon: FaGamepad,
    url: 'https://playtictactoe.org/',
    description: 'Challenge your friends in Tic-Tac-Toe'
  },
  {
    title: 'Chess',
    icon: FaChess,
    url: 'https://www.chess.com/play/online',
    description: 'Play chess online against players worldwide'
  },
  {
    title: 'Puzzle Games',
    icon: FaPuzzlePiece,
    url: 'https://www.jigsawplanet.com/',
    description: 'Explore a variety of challenging puzzle games'
  }
];