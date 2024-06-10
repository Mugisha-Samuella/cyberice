import React from "react";

export default function NotFound() {
  return (
    <div className="flex flex-col md:flex-row w-screen justify-center items-center">
      <div className="bg-Dark w-screen md:min-h-screen">
        <img
          style={{
            width: "80%",
          }}
          src={"/Assets/Images/notfound.svg"}
          width={300}
          height={300}
          alt="not found image"
        />
      </div>
      <div className="md:p-[10rem] justify-center items-center text-center">
        <div className="flex flex-col ">
          <h1 className="text-[6rem]">404</h1>
          <h1>Ooops!</h1>
          <h3>Page Not Found</h3>
          <p className="text-center">
            This page doesn't exist or was removed! We suggest you got back home
          </p>
        </div>
        <div className="p-6">
          <button className="bg-primary hover:bg-lightprimary text-white p-4 px-8 rounded-md">
            <a href="/home"> Back to Home</a>
          </button>
        </div>
      </div>
    </div>
  );
}
