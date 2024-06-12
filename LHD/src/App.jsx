import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Vision from './Components/Vision';
import Profile from './Components/Profile';
import Products from './Components/Products';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Hero from './Pages/Hero';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';
import Page4 from './Pages/Page4';

const App = () => {
  return (
    <Router>
      <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/products" element={<Products />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Hero />
      <Page2 />
      <Page3/>
      <Page4/>
      <Footer/>
      </div>
    </Router>
    
    
  );
};

export default App;
