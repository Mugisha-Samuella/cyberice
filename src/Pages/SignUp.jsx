import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/register", formData);
      if (response.data.error) {
        setError(response.data.error);
        setSuccess(null);
      } else {
        setSuccess("Account created successfully!");
        setError(null);
      }
    } catch (error) {
      console.error(error);
      setError("Signup failed. Try again.");
      setSuccess(null);
    }
  };

  return (
    <div className="flex  flex-col md:flex-row justify-center text-left items-center  overflow-y-hidden">
      <div className="bg-Dark min-h-screen md:w-1/2 hidden md:flex justify-center items-center">
        <h1 className="text-white text-5xl">Join Us</h1>
      </div>
      <div className="p-10 flex justify-center items-center md:w-1/2">
        <div className="w-full max-w-md">
          <h1 className=" text-center pb-2 font-bold">CyberIce</h1>
          <h2 className=" text-center pb-6 text-primary">SignUp</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && <div className="text-red-500 font-bold">{error}</div>}
            {success && <div className="text-green-500 font-bold">{success}</div>}
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-medium mb-2">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter Name"
                className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                onChange={handleChange}
                value={formData.name}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-medium mb-2">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter Email"
                className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                onChange={handleChange}
                value={formData.email}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="text-sm font-medium mb-2">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter Password"
                className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                onChange={handleChange}
                value={formData.password}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="confirmPassword" className="text-sm font-medium mb-2">Confirm Password</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                onChange={handleChange}
                value={formData.confirmPassword}
                required
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-[12.4rem] py-2 bg-Dark text-white rounded-md hover:bg-Dark2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              SignUp
            </button>
          </form>
          <div className="text-center mt-6">
            <p className="text-sm">Already have an account? <Link to='/login' className="text-indigo-500 hover:text-indigo-700">Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
