import React from "react";
import ReactLoading from "react-loading";

export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center w-screen min-h-screen">
      <ReactLoading type="bubbles" color="#222834" height={100} width={50} />
    </div>
  );
}
