import React from 'react';

export default function Clients() {
  return (
    <>
      <div className="w-screen max-w-[85rem] justify-center items-center text-center text-D_Grey font-Inter p-5 md:p-0">
        <h1 className="text-D_Grey font-extrabold text-3xl md:text-2xl pt-10 pb-2 md:pt-9 md:pb-3">
          Our Clients
        </h1>
        <p className="text-[#717171]">
          We have been working with some of the top Fortune 500 companies
        </p>
      </div>
      <div className="flex flex-col p-9 gap-7 md:gap-7 sm:flex-row lg:gap-[10rem] sm:gap-[5rem] justify-center items-center">
        <div className="flex flex-row gap-12 md:gap-7 lg:gap-[10rem]">
          <img src={"/Assets/Images/client1.svg"} width={50} height={25} alt="Client 1" />
          <img src={"/Assets/Images/client2.svg"} width={50} height={25} alt="Client 2" />
          <img src={"/Assets/Images/client3.svg"} width={50} height={25} alt="Client 3" />
        </div>
        <div className="flex flex-row gap-12 md:gap-7 lg:gap-[10rem]">
          <img src={"/Assets/Images/client4.svg"} width={50} height={25} alt="Client 4" />
          <img src={"/Assets/Images/client5.svg"} width={50} height={25} alt="Client 5" />
          <img src={"/Assets/Images/client6.svg"} width={50} height={25} alt="Client 6" />
        </div>
      </div>
    </>
  );
}
