const Navbar = ()=>{
  return(
   <nav id='navbar' class='bg-orange-600 flex flex-1 justify-between h-24 items-center'>
    <div class='flex items-center text-2xl'>
      <img class='h-24 rounded-full aspect-square' src="src/assets/LHD HUMAN CARE logo.png"></img>
      <div class='flex-row flex-1 mx-2'>
       <div> LHD Human Care </div>
        <div class='text-base'>Crafting Health,Shaping Future</div>
      </div>
    </div>
    <div class='flex flex-row flex-1 items-center justify-evenly'>
    <div>
      Our Vision
    </div>
    <div>
      Corporate Profile
    </div>
    <div>
      Our Products
    </div>
    <div>
      Our network
    </div>
    <div>
      Contact Us
    </div>
    </div>
    </nav>
  );
}

export default Navbar;