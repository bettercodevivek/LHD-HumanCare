const Navbar = ()=>{
  return(
   <nav id='navbar' class=' flex flex-1 justify-between h-20 w-dvw items-center z-10 fixed top-0 left-0 bg-white'>
    <div class='flex items-center text-2xl mx-2'>
      <img class='h-20 rounded-full aspect-square mx-16' src="src/assets/LHD Human Care Logo.JPG"></img>
      <div class='flex-row flex-1 -mx-12'>
       <div> LHD Human Care </div>
        <div class='text-base'>Crafting Health,Shaping Future</div>
      </div>
    </div>
    <div class='flex flex-row flex-1 items-center justify-center gap-x-12 text-lg'>
    <div>
      <a href='#' class='group transition-all duration-300 ease-in-out'>
        <span class='bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'> Our Vision</span>
      </a>
    </div>
    <div>
      <a href='#' class='group transition-all duration-300 ease-in-out'>
        <span class='bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>Corporate Profile</span>
      </a>
    </div>
    <div>
      <a href='#' class='group transition-all duration-300 ease-in-out'>
        <span class='bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'> Our Products</span>
      </a>
    </div>
    <div>
      <a href='#' class='group transition-all duration-300 ease-in-out'>
        <span class='bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'> Our Network</span>
      </a>
    </div>
    <div>
      <a href='#' class='group transition-all duration-300 ease-in-out'>
        <span class='bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>Contact Us</span>
      </a>
    </div>
    </div>
    </nav>
  );
}

export default Navbar;