import React from 'react';

import Navbar from './Navbar/Navbar'
import Slideshow from './Hero/Hero';
import Page2 from './Page-2/Page-2';
import Page3 from './Page-3/Page-3';

function App() {
  return (
    <div class='bg-white text-black font-serif antialiased tracking-wide overflow-x-hidden overflow-y-hidden'>
    <Navbar />
    <Slideshow/>
    <Page2 />
    <Page3 />
    </div>
  );
}

export default App;
