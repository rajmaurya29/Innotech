import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { gsap } from 'gsap';

// Register GSAP plugins globally
gsap.config({
  nullTargetWarn: false,
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);