import React from 'react';

export default function Community() {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center p-5 md:p-0">
        <div className="text-D_Grey font-Inter text-2xl">
          <h1 className="text-D_Grey text-2xl font-semibold max-w-[28rem] text-center">
            Manage your entire cybersecurity ecosystem in a single platform
          </h1>
        </div>
        <p className="text-[#717171] text-md text-center pt-3">
          Who is our cybersecurity platform suitable for?
        </p>
      </div>
      <div className="flex flex-col gap-6 md:flex-row pt-4 md:px-[3rem]">
        <div className="flex flex-col justify-center items-center px-4 pt-4">
          <div className="flex flex-col justify-center items-center bg-Dark2 shadow-sm rounded-md p-4">
            <div className="">
              <img src={"/Assets/Icons/members.svg"} width={50} height={50} alt="Security Threat Data" />
            </div>
            <h1 className="font-bold text-3xl text-center pt-4">
              Security <br /> Threat Data
            </h1>
            <p className="pt-2 text-center text-sm">
              Comprehensive tracking and management of security threats to ensure proactive measures.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center px-4 pt-4">
          <div className="flex flex-col justify-center items-center bg-Dark2 shadow-sm rounded-md p-4">
            <div className="">
              <img src={"/Assets/Icons/members.svg"} width={50} height={50} alt="Intrusion Detection Logs" />
            </div>
            <h1 className="font-bold text-3xl text-center pt-4">
              Intrusion <br /> Detection Logs
            </h1>
            <p className="pt-2 text-center text-sm">
              Real-time monitoring and logging of intrusion attempts to safeguard your infrastructure.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center px-4 pt-4">
          <div className="flex flex-col justify-center items-center bg-Dark2 shadow-sm rounded-md p-4">
            <div className="">
              <img src={"/Assets/Icons/members.svg"} width={50} height={50} alt="Incident Response Records" />
            </div>
            <h1 className="font-bold text-3xl text-center pt-4">
              Incident <br /> Response Records
            </h1>
            <p className="pt-2 text-center text-sm">
              Detailed records of incident responses to improve and refine your security strategies.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
