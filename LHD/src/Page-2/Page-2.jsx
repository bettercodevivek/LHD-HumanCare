import React from "react";

const Page2=()=>{

    const Card = ({ title, description, imageUrl }) => {
        return (
          <div className="bg-slate-200 rounded-lg flex flex-col items-center p-12">
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
 <div>
    <h1 class='text-4xl text-center font-bold'> Why choose LHD Human Care ? </h1>
    <div className="flex flex-row  min-h-screen bg-white">
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <Card 
          title="Strong API Legacy" 
          description="With over 28 years of expertise, our robust API portfolio stands as a testament to our commitment to quality and innovation. Trusted by healthcare providers and pharmaceutical companies worldwide, we deliver consistent, high-quality Active Pharmaceutical Ingredients that form the foundation of effective and reliable medications. Explore our legacy of excellence and discover why we are a leader in the pharmaceutical industry." 
          imageUrl="src/assets/card1-icon.svg" 
        />
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <Card 
          title=" Our Vision" 
          description="At LHD Human Care, we envision a world where advanced science and compassionate care come together to create innovative solutions that improve the quality of life for everyone. Our commitment to pioneering research, sustainable practices, and equitable healthcare drives us to break boundaries and set new standards in the pharmaceutical industry." 
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
    </div>
   </div>
);
}

export default Page2;