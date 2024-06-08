import React from "react";
const Page2=()=>{

    const Card = ({ title, description, imageUrl}) => {
        return (
     
          <div className="bg-blue-100 rounded-2xl flex flex-wrap flex-col items-center p-12 shadow-lg hover:cursor-pointer ">
            <img 
              src={imageUrl} 
              alt={title} 
              className="aspect-square h-16 rounded-full mr-4 mb-4 border-2 border-solid border-black"
            />
            <div>
              <h2 className="text-xl text-center font-bold mb-2">{title}</h2>
              <p className="text-gray-700 text-justify">{description}</p>
            </div>
          </div>
        );
      };

return(
 <div className="h-dvh relative top-12">
    <h1 class='text-4xl text-center font-bold'> Why choose LHD Human Care ? </h1>
   
   </div>
);
}

export default Page2;