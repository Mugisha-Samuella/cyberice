import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/forgot-password', { email });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error sending email');
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center text-left items-center min-h-screen">
      <div className="bg-Dark  min-h-screen md:w-1/2 hidden md:flex justify-center items-center">
        <h1 className="text-white text-5xl">Forgot Password?</h1>
      </div>
      <div className="w-screen p-20 flex flex-col justify-center gap-16 text-left items-center md:w-1/2">
        <div className="w-full max-w-md">
          <h1 className="text-5xl text-center pb-10 font-bold">CyberIce</h1>
          <h2 className="text-3xl text-center pb-6 text-primary">
            Forgot Password?
          </h2>
          <h3>
            Please enter your email address to receive a verification code
          </h3>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label htmlFor="email" className="text-sm font-medium mb-2">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter Email"
            className="rounded-md border text-center border-gray-300 px-20 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            required
          />
          <button
            type="submit"
            className="inline-flex items-center px-[4.4rem] text-center py-2 bg-Dark text-white rounded-md hover:bg-Dark2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Send
          </button>
        </form>
        {message && <p className="text-center text-red-500">{message}</p>}
        <Link
          to="/forgotpassword"
          className="text-indigo-500 hover:text-indigo-700"
        >
          Try another way
        </Link>
      </div>
    </div>
  );
}

export default ForgotPassword;
