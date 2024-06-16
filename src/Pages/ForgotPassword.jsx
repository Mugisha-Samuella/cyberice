import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ForgotPassword() {
  return (
    <div className="flex flex-col md:flex-row justify-center text-left items-center min-h-screen">
      <div className="bg-Dark min-h-screen md:w-1/2 hidden md:flex justify-center items-center">
        <h1 className="text-white text-5xl">Forgot Password?</h1>
      </div>
      <div className="w-screen p-20 flex flex-col justify-center gap-16 text-left items-center md:w-1/2">
        <div className="w-full max-w-md">
          <h1 className="text-5xl text-center pb-10 font-bold">CyberIce</h1>
          <h2 className="text-3xl text-center pb-6 text-primary">
            Forgot Password?
          </h2>
          <h3>
            Please enter your email address to receive a verififcation code
          </h3>
        </div>
        <form action="" className="flex flex-col">
          <label htmlFor="email" className="text-sm font-medium mb-2">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter Email"
            className="rounded-md border border-gray-300 px-20 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            // onChange={(event) => setEmail(event.target.value)}
            // value={email}
            required
          />
        </form>
        <Link
          to="/forgotpassword"
          className="text-indigo-500 hover:text-indigo-700"
        >
          Try another way
        </Link>
        <button
              type="submit"
              className="inline-flex items-center px-[4.4rem] py-2 bg-Dark text-white rounded-md hover:bg-Dark2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send
            </button>
      </div>
    </div>
  );
}

export default ForgotPassword;
