import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Wind, 
  Cloud, 
  Waves, 
  Music, 
  Bird, 
  TreePine 
} from 'lucide-react';
import { motion } from 'framer-motion';
import useSound from 'use-sound';
import SoundCard from '../components/SoundCard';

// Import your sound files here
const sounds = [
  {
    title: 'Ocean Waves',
    icon: Waves,
    url: 'https://assets.mixkit.co/music/preview/mixkit-ocean-waves-loop-1196.mp3',
    gradient: 'from-blue-500 to-cyan-600'
  },
  {
    title: 'Forest Birds',
    icon: Bird,
    url: 'https://assets.mixkit.co/music/preview/mixkit-forest-birds-loop-1242.mp3',
    gradient: 'from-green-500 to-emerald-600'
  },
  {
    title: 'Rain Sounds',
    icon: Cloud,
    url: 'https://assets.mixkit.co/music/preview/mixkit-rain-and-thunder-loop-1248.mp3',
    gradient: 'from-indigo-500 to-blue-600'
  },
  {
    title: 'Wind Chimes',
    icon: Wind,
    url: 'https://assets.mixkit.co/music/preview/mixkit-wind-chimes-loop-1185.mp3',
    gradient: 'from-purple-500 to-indigo-600'
  },
  {
    title: 'Forest Ambience',
    icon: TreePine,
    url: 'https://assets.mixkit.co/music/preview/mixkit-forest-ambience-loop-1236.mp3',
    gradient: 'from-emerald-500 to-green-600'
  },
  {
    title: 'Meditation Music',
    icon: Music,
    url: 'https://assets.mixkit.co/music/preview/mixkit-meditation-music-loop-1256.mp3',
    gradient: 'from-violet-500 to-purple-600'
  }
];

const Meditation = () => {
  const navigate = useNavigate();
  const [currentSound, setCurrentSound] = useState(null);
  const [soundStates, setSoundStates] = useState(
    sounds.reduce((acc, sound) => ({ ...acc, [sound.title]: false }), {})
  );

  // Initialize sounds with useSound hook
  const soundPlayers = sounds.map(sound => {
    const [play, { stop }] = useSound(sound.url, {
      volume: 0.5,
      interrupt: true
    });
    return { title: sound.title, play, stop };
  });

  useEffect(() => {
    return () => {
      // Cleanup: stop all sounds when component unmounts
      soundPlayers.forEach(({ stop }) => stop());
    };
  }, []);

  const handleSoundClick = (title) => {
    if (currentSound === title) {
      // Stop current sound
      const player = soundPlayers.find(s => s.title === title);
      player.stop();
      setCurrentSound(null);
      setSoundStates(prev => ({ ...prev, [title]: false }));
    } else {
      // Stop previous sound if any
      if (currentSound) {
        const prevPlayer = soundPlayers.find(s => s.title === currentSound);
        prevPlayer.stop();
        setSoundStates(prev => ({ ...prev, [currentSound]: false }));
      }
      // Play new sound
      const player = soundPlayers.find(s => s.title === title);
      player.play();
      setCurrentSound(title);
      setSoundStates(prev => ({ ...prev, [title]: true }));
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <motion.button
          onClick={() => navigate('/activities')}
          className="flex items-center text-gray-700 hover:text-gray-900 transition-colors mb-8 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-xl shadow-sm hover:shadow-md"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ x: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Activities
        </motion.button>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-4 text-violet-900"
        >
          Meditation & Relaxation
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-gray-600 mb-12"
        >
          Choose from a variety of calming sounds to enhance your meditation practice
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-4"
        >
          {sounds.map((sound) => (
            <motion.div key={sound.title} variants={item}>
              <SoundCard
                title={sound.title}
                icon={sound.icon}
                isPlaying={soundStates[sound.title]}
                onClick={() => handleSoundClick(sound.title)}
                gradient={sound.gradient}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Meditation;