import React from "react";


const Hero = () => {
  return (
    <>
      <div className="w-screen min-h-[80vh] p-4 flex flex-col gap-7 justify-center items-center md:text-center">
        <h1 className="text-6xl  font-Lato font-medium text-blue-950 leading-[4rem]">
          Icing Out Cyber Threats
        </h1>
        <p className="text-D_Grey max-w-[50rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          nobis, tenetur reprehenderit molestias facilis aspernatur ratione
          vitae voluptatum, commodi in accusamus quod explicabo non nam suscipit
          velit veritatis eveniet ullam.
        </p>
        <button className='bg-blue-900  p-2 px-3 rounded-3xl text-white hover:bg-blue-600'><a href="">Get Started</a></button>
      </div>
      <div>
        <img src={"../../assets/Images/hero.png"} alt="" />
      </div>
    </>
  );
};

export default Hero;
