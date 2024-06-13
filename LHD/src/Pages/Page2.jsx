import React from "react";

const Page2 = () => {
  const Card = ({ title, description, imageUrl }) => {
    return (
      <div className="bg-sky-100 rounded-2xl flex flex-col items-center p-4 md:p-6 lg:p-8 shadow-lg hover:cursor-pointer transition-all duration-300 h-auto lg:h-80 overflow-hidden group lg:hover:h-auto">
        <img
          src={imageUrl}
          alt={title}
          className="aspect-square h-16 md:h-20 lg:h-24 rounded-full mb-4 border-2 border-solid border-black"
        />
        <div className="flex flex-col justify-between flex-grow overflow-hidden">
          <h2 className="text-lg md:text-xl lg:text-2xl text-center font-bold mb-2 group-hover:mt-4">
            {title}
          </h2>
          <p className="text-gray-700 text-justify text-sm md:text-base lg:text-lg transition-all duration-300 ease-in-out max-h-none lg:max-h-32 group-hover:max-h-screen">
            {description}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen p-4 md:p-8 lg:p-12">
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold mb-8">
        Why choose LHD Human Care?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 lg:mt-16 mx-4 lg:mx-32">
        <Card
          title="Strong API Legacy"
          description="With over 28 years of expertise, our robust API portfolio stands as a testament to our commitment to quality and innovation. Trusted by healthcare providers and pharmaceutical companies worldwide, we deliver consistent, high-quality Active Pharmaceutical Ingredients that form the foundation of effective and reliable medications. Explore our legacy of excellence and discover why we are a leader in the pharmaceutical industry. Explore our legacy of excellence."
          imageUrl="src/assets/card1-icon.svg"
        />
        <Card
          title="Our Vision"
          description="Our vision is to revolutionize healthcare by placing you at the heart of everything we do. We are dedicated to developing cutting-edge medications that meet your unique needs, ensuring better health outcomes and improved quality of life. With a commitment to excellence, accessibility, and trust, we aim to be your partner in health, providing innovative solutions that enhance your well-being and bring peace of mind to you and your loved ones."
          imageUrl="src/assets/vision-svgrepo-com.svg"
        />
        <Card
          title='"Health for all" initiative'
          description="Through our 'Health for All' initiative, we are committed to making healthcare accessible to underserved communities. We conduct free medical checkup camps where our dedicated team of doctors provides comprehensive health assessments. During these camps, we also distribute our medicines at no cost, ensuring that those in need receive the essential care and treatments they deserve."
          imageUrl="src/assets/holding-hands-in-a-circle-svgrepo-com.svg"
        />
        <Card
          title="Experience"
          description="With 46 years of unwavering dedication, we have established ourselves as a trusted leader in the pharmaceutical industry. Our extensive experience is marked by a steadfast commitment to quality, innovation, and patient care. Over the decades, we have continuously advanced our expertise to develop effective and safe medications, earning the trust of millions worldwide. Our journey reflects a legacy of excellence."
          imageUrl="src/assets/medicine-pharmacy-svgrepo-com.svg"
        />
      </div>
    </div>
  );
};

export default Page2;
