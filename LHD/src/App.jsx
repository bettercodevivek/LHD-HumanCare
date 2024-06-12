import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Vision from './Components/Vision';
import Profile from './Components/Profile';
import Products from './Components/Products';
import Contact from './Components/Contact';
import Network from './Components/Network';
import Hero from './Pages/Hero';
import Page2 from './Pages/Page2';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Vision />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/products" element={<Products />} />
        <Route path="/network" element={<Network />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Hero />
      <Page2 />
    </Router>
    
  );
};

export default App;
