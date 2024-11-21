import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Activities from './pages/Activities';
import Reading from './pages/Reading';
import Quotes from './pages/sections/Quotes';
import Stories from './pages/sections/Stories';
import Biographies from './pages/sections/Biographies';
import Jokes from './pages/sections/Jokes';
import Paheli from './pages/sections/Paheli';
import BrainTeasers from './pages/sections/BrainTeasers';
import Dohe from './pages/sections/Dohe';
import Shayari from './pages/sections/Shayari';
import Meditation from './pages/Meditation';
import Drawing from './pages/Drawing';
import  Todo from './pages/Todo';
import HabEx from './pages/HabEx';
import RexSpots from './pages/RexSpots';
import Gaming from './pages/Gaming';
import WeeklyPlanner from './pages/WeeklyPlanner';
import Stopwatch from './pages/Stopwatch';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/activities/reading/" element={<Reading />} />
          <Route path="/activities/reading/quotes" element={<Quotes />} />
          <Route path="/activities/reading/stories" element={<Stories />} />
          <Route path="/activities/reading/biographies" element={<Biographies />} />
          <Route path="/activities/reading/jokes" element={<Jokes />} />
          <Route path="/activities/reading/paheli" element={<Paheli />} />
          <Route path="/activities/reading/brain teasers" element={<BrainTeasers />} />
          <Route path="/activities/reading/dohe" element={<Dohe />} />
          <Route path="/activities/reading/shayari" element={<Shayari />} />
          <Route path="/activities/meditation" element={<Meditation />} />
          <Route path="/activities/checks" element={<Todo />} />
          <Route path="/activities/habex" element={<HabEx />} />
          <Route path="/activities/rexspots" element={<RexSpots />} />
          <Route path="/activities/gaming" element={<Gaming />} />
          <Route path="/activities/Drawing" element={<Drawing />} />
          <Route path="/activities/stopwatch" element={<Stopwatch />} />
          <Route path="/activities/weekly-planner" element={<WeeklyPlanner />} />
          
          
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;