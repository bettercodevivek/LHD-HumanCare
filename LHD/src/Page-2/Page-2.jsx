import React from "react";

const Page2=()=>{

    const Card = ({ title, description, imageUrl }) => {
        return (
          <div className="bg-white shadow-md rounded-lg p-6 m-2 flex items-center">
            <img 
              src={imageUrl} 
              alt={title} 
              className="aspect-square h-24 rounded-full mr-4"
            />
            <div>
              <h2 className="text-xl font-bold mb-2">{title}</h2>
              <p className="text-gray-700">{description}</p>
            </div>
          </div>
        );
      };

return(
 <div>
    <h1 class='text-4xl text-center font-bold'> Why choose LHD Human Care ? </h1>
    <div className="flex flex-wrap justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <Card 
          title="Card 1" 
          description="Description for card 1" 
          imageUrl="src/assets/card1-icon.svg" 
        />
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <Card 
          title="Card 2" 
          description="Description for card 2" 
          imageUrl="https://via.placeholder.com/150" 
        />
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <Card 
          title="Card 3" 
          description="Description for card 3" 
          imageUrl="https://via.placeholder.com/150" 
        />
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <Card 
          title="Card 4" 
          description="Description for card 4" 
          imageUrl="https://via.placeholder.com/150" 
        />
      </div>
    </div>
   </div>
);
}

export default Page2;