const Hero = () =>{
    return(
        <div>
            <img class='h-dvh w-11/12 relative left-16 top-24 z-0 opacity-80 blur-0 rounded-3xl' src="https://i.postimg.cc/cCtYdKYJ/pexels-shvetsa-3683074.jpg"></img>
            <div>
                <video src=""></video>
            </div>
            <div class='relative bg-inherit backdrop-blur-lg shadow-lg flex flex-row flex-1 items-center h-44 w-4/5 left-36 -top-0 rounded-3xl justify-around border-2'>
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