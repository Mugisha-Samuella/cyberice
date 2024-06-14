import React from 'react';

export default function Hero() {
  return (
    <div className="p-6 md:justify-between items-center sm:px-[5rem] bg-Dark">
      <div className="flex flex-col sm:flex-row">
        <div className="pt-[4rem] md:max-w-[45rem]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-D_Grey">
            Protecting Your Data <span className="text-Primary">Ensuring Security</span>
          </h1>
          <p className="pt-4 text-[#717171]">
            Empowering your business with advanced cybersecurity solutions.
          </p>
          <div className="pt-6">
            <a href="/signup" className="text-white bg-Primary rounded-sm px-4 py-3">SignUp</a>
          </div>
        </div>
        <div className="pt-11 min-w-12">
          <img src={"/Assets/Images/hero.svg"} width={400} height={400} alt="Cybersecurity Hero" />
        </div>
      </div>
    </div>
  );
}
