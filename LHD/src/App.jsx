import React from 'react';

import Navbar from './Navbar/Navbar'
import Slideshow from './Hero/Hero';

function App() {
  return (
    <div class='bg-white text-black font-serif antialiased tracking-wide overflow-x-hidden overflow-y-hidden'>
    <Navbar />
    <Slideshow/>
    </div>
  );
}

export default App;
