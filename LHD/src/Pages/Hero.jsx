import { useState ,useEffect } from "react";
import CountUp from 'react-countup';
const Hero = () =>{   

    const ImageSlide = [
      'https://i.postimg.cc/7LxSPp0W/robert-collins-l-P-Fb-Bk-Mn1c-unsplash.jpg',
        'https://i.postimg.cc/cCtYdKYJ/pexels-shvetsa-3683074.jpg',
          'https://i.postimg.cc/SRP4PjCp/diana-polekhina-ZBst-HWt9v-Lc-unsplash.jpg',
        'https://i.postimg.cc/3JRk6SbC/walter-otto-PT70-CT6m-ATQ-unsplash.jpg'
    ]
   

        const [currentIndex,setIndex]=useState(0);

        useEffect(()=>{
            const interval =setInterval(()=>{
               setIndex((prevIndex)=>(prevIndex+1)% ImageSlide.length);
            },3000)

            return()=>clearInterval(interval);
        },[])

    return(
        <div className="relative  h-full -top-4">
      <div className="relative mx-auto top-16 z-0 opacity-80 rounded-3xl aspect-video w-full sm:w-11/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12">
      {ImageSlide.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover rounded-3xl" />
        </div>
      ))}
    </div>
          
           <div class='flex flex-row items-center gap-2 relative hidden'>
           <div> <button class='  bg-black text-white border-2 px-8 py-4 border-solid border-black rounded-lg hover:bg-inherit hover:text-black'>Start Discovery</button></div>
           <div><button class=' bg-inherit border-2 px-8 py-4 border-solid border-black rounded-lg hover:bg-black hover:text-white'>Contact Us</button></div>
           </div>
           <div class="relative bg-inherit backdrop-blur-lg shadow-lg flex flex-wrap items-center justify-around w-11/12 sm:w-4/5 md:h-44 lg:h-44 mx-auto left-0 right-0 top-16 md:top-0 lg:top-0 -mt-8 rounded-3xl border-2">
    <div class="text-center p-2">
        <span class="font-bold text-xl md:text-3xl lg:text-3xl sm:text-3xl"><CountUp end={46} delay={4} /></span> 
        <br />
        <span class="text-sm md:text-lg lg:text-lg sm:text-lg">Years of Experience</span>
    </div>
    <div class="text-center p-2">
        <span class="font-bold text-xl md:text-3xl lg:text-3xl sm:text-3xl"><CountUp end={100000} delay={4} />+</span> 
        <br />
        <span class="text-sm md:text-lg lg:text-lg sm:text-lg">Active Clients</span>
    </div>
    <div class="text-center p-2">
        <span class="font-bold text-xl md:text-3xl lg:text-3xl sm:text-3xl"><CountUp end={700} delay={4} />+</span> 
        <br />
        <span class="text-sm md:text-lg lg:text-lg sm:text-lg">Employees</span>
    </div>
    <div class="text-center p-2">
        <span class="font-bold text-xl md:text-3xl lg:text-3xl sm:text-3xl">All North Indian</span> 
        <br />
        <span class="text-sm md:text-lg lg:text-lg sm:text-lg">States Covered</span>
    </div>
</div>

           
        </div>
    );
}

export default Hero;