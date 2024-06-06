import React from 'react';
import ImageSlide from '../ImageSlide/ImageSlide';
import { useState  } from 'react';
const Hero = () =>{   
    return(
        <div>
            <img class='h-dvh w-11/12 relative left-16 top-24 z-0 opacity-80 blur-0 rounded-3xl' src="https://i.postimg.cc/cCtYdKYJ/pexels-shvetsa-3683074.jpg"></img>
           <div class='absolute top-60 w- left-32 w-3/6'>
           <div class='flex flex-row items-center gap-4'><h1 class='font-bold text-6xl'>LHD Human Care</h1>
           <img class='h-12 w-20 animate-bounce' src='src/assets/injection-svgrepo-com.svg'></img> </div> <br/>
            <h2 class='font-bold text-4xl '>Crafting Health,Shaping Future</h2>
           </div>
           <div class='flex flex-row items-center gap-2 relative -top-20 left-32'>
           <div> <button class=' relative bg-black text-white border-2 px-8 py-4 border-solid border-black rounded-lg hover:bg-inherit hover:text-black'>Start Discovery</button></div>
           <div><button class=' relative bg-inherit border-2 px-8 py-4 border-solid border-black rounded-lg hover:bg-black hover:text-white'>Contact Us</button></div>
           </div>
            <div class='relative bg-inherit backdrop-blur-lg shadow-lg flex flex-row flex-1 items-center h-44 w-4/5 left-36 -top-8 rounded-3xl justify-around border-2'>
                <div class=''>
                   <span class='font-bold text-4xl'>28</span>  <br></br>
                    Years of Experience
                </div>
                <div class=''>
                   <span class='font-bold text-4xl'> 5000+</span> <br/>
                    Active Clients</div>
                <div class=''><span class='font-bold text-4xl'>All North Indian</span> <br/>
                States Covered</div>
            </div>
        </div>
    );
}

export default Hero;