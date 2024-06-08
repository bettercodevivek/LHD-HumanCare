import { useState ,useEffect } from "react";
const Hero = () =>{   

    const ImageSlide = [
        'https://i.postimg.cc/cCtYdKYJ/pexels-shvetsa-3683074.jpg',
        'https://i.postimg.cc/3JRk6SbC/walter-otto-PT70-CT6m-ATQ-unsplash.jpg',
        'https://i.postimg.cc/SRP4PjCp/diana-polekhina-ZBst-HWt9v-Lc-unsplash.jpg'
    ]
   

        const [currentIndex,setIndex]=useState(0);

        useEffect(()=>{
            const interval =setInterval(()=>{
               setIndex((prevIndex)=>(prevIndex+1)% ImageSlide.length);
            },4000)

            return()=>clearInterval(interval);
        },[])

    return(
        <div className="relative bg-blue-700">
      <div className="h-vh aspect-video w-11/12 relative left-16 top-24 z-0 opacity-80 blur-0 rounded-3xl">
        {ImageSlide.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover rounded-3xl" />
          </div>
        ))}
      </div>
           <div class='absolute top-60 w- left-32 w-3/6'>
           <div class='flex flex-row items-center gap-4'><h1 class='font-bold text-6xl'>LHD Human Care</h1>
           <img class='h-12 w-20 animate-bounce' src='src/assets/injection-svgrepo-com.svg'></img> </div> <br/>
            <h2 class='font-bold text-4xl '>Crafting Health,Shaping Future</h2>
           </div>
           <div class='flex flex-row items-center gap-2 relative -top-48 left-32'>
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