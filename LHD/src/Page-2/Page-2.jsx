import React from "react";
const Page2=()=>{

    const Card = ({ title, description, imageUrl,link }) => {
        return (
     
          <div className="bg-blue-100 rounded-2xl flex flex-wrap flex-col items-center p-12 shadow-lg h-min transition-transform transform hover:scale-105 hover:cursor-pointer ">
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
 <div className="h-screen relative top-12">
    <h1 class='text-4xl text-center font-bold'> Why choose LHD Human Care ? </h1>
    <div className=" grid grid-cols-2 gap-8 bg-white relative top-16">
      <div className=" ">
        <Card 
          title="Strong API Legacy" 
          description="With over 28 years of expertise, our robust API portfolio stands as a testament to our commitment to quality and innovation. Trusted by healthcare providers and pharmaceutical companies worldwide, we deliver consistent, high-quality Active Pharmaceutical Ingredients that form the foundation of effective and reliable medications. Explore our legacy of excellence and discover why we are a leader in the pharmaceutical industry." 
          imageUrl="src/assets/card1-icon.svg" 
        />
      </div>
      <div className=" ">
        <Card 
          title="Our Vision" 
          description="At LHD Human Care, we envision a world where advanced science and compassionate care come together to create innovative solutions that improve the quality of life for everyone. Our commitment to pioneering research, sustainable practices, and equitable healthcare drives us to break boundaries and set new standards in the pharma industry. We aspire to be a trusted leader, empowering healthier lives" 
          imageUrl="https://via.placeholder.com/150" 
        />
      </div>
      <div className=" ">
        <Card 
          title="Kind Care Initiative" 
          description="At LHD Human Care, we envision a world where advanced science and compassionate care come together to create innovative solutions that improve the quality of life for everyone. Our commitment to pioneering research, sustainable practices, and equitable healthcare drives us to break boundaries and set new standards in the pharma industry. We aspire to be a trusted leader, empowering healthier lives"
          imageUrl="https://via.placeholder.com/150" 
        />
      </div>
      <div className=" ">
        <Card 
          title="Kind Care Initiative" 
          description="At LHD Human Care, we envision a world where advanced science and compassionate care come together to create innovative solutions that improve the quality of life for everyone. Our commitment to pioneering research, sustainable practices, and equitable healthcare drives us to break boundaries and set new standards in the pharma industry. We aspire to be a trusted leader, empowering healthier lives"
          imageUrl="https://via.placeholder.com/150" 
        />
      </div>
    </div>
   </div>
);
}

export default Page2;