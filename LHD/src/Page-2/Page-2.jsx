import React from "react";
const Page2=()=>{

    const Card = ({ title, description, imageUrl}) => {
        return (
     
          <div className="bg-sky-100 rounded-2xl flex flex-col items-center p-8 shadow-lg hover:cursor-pointer ">
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
 <div className="h-max relative top-12 ">
    <h1 className='text-4xl text-center font-bold'> Why choose LHD Human Care ? </h1>
    <div className="grid grid-cols-2 justify-center gap-8 mt-16 mr-32 ml-32">
     <div>
      <Card title={'Strong API Legacy'}
      description={'With over 28 years of expertise, our robust API portfolio stands as a testament to our commitment to quality and innovation. Trusted by healthcare providers and pharmaceutical companies worldwide, we deliver consistent, high-quality Active Pharmaceutical Ingredients that form the foundation of effective and reliable medications. Explore our legacy of excellence and discover why we are a leader in the pharmaceutical industry.'}
      imageUrl={'src/assets/card1-icon.svg'}></Card>
     </div>

     <div>
      <Card title={'Our Vision'}
      description={'Our vision is to revolutionize healthcare by placing you at the heart of everything we do. We are dedicated to developing cutting-edge medications that meet your unique needs, ensuring better health outcomes and improved quality of life. With a commitment to excellence, accessibility, and trust, we aim to be your partner in health, providing innovative solutions that enhance your well-being and bring peace of mind to you and your loved ones.'}
      imageUrl={'src/assets/card1-icon.svg'}></Card>
     </div>

     <div>
      <Card title={'"Health for all" initiative'}
      description={'Through our "Health for All" initiative, we are committed to making healthcare accessible to underserved communities. We conduct free medical checkup camps where our dedicated team of doctors provides comprehensive health assessments. During these camps, we also distribute our medicines at no cost, ensuring that those in need receive the essential care and treatments they deserve. Our goal is to bridge the gap in healthcare access.'}
      imageUrl={'src/assets/card1-icon.svg'}></Card>
     </div>

     <div>
      <Card title={'Experience'}
      description={'With 46 years of unwavering dedication, we have established ourselves as a trusted leader in the pharmaceutical industry. Our extensive experience is marked by a steadfast commitment to quality, innovation, and patient care. Over the decades, we have continuously advanced our expertise to develop effective and safe medications, earning the trust of millions worldwide. Our journey reflects a legacy of excellence and a future dedicated to enhancing health and improving lives'}
      imageUrl={'src/assets/card1-icon.svg'}></Card>
     </div>
     </div>
   </div>
);
}

export default Page2;