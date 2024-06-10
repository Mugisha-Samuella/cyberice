import React, { useState } from "react";
import axios from "axios"; // For backend API calls

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
      const response = await axios.post(
        "http://localhost:3001/register",
        formData
      ); // Adjust API endpoint
      if (response.data.error) {
        setError(response.data.error);
        setSuccess(null); // Clear any previous success messages
      } else {
        setSuccess("Account created successfully!");
        setError(null); // Clear any previous errors
      }
    } catch (error) {
      console.error(error);
      console.log(`This is the error: ${error}`);
      setError("Signup failed. Try Again");
      setSuccess(null); // Clear any previous success messages
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center text-left items-center">
      <div className="bg-Dark min-h-screen md:w-screen hidden md:flex">
        Hello
      </div>
      <div className="w-screen p-20 justify-items-center">
        <h1 className="text-5xl text-center pb-20 font-bold">CyberIce</h1>
        <form
          className="space-y-1 flex flex-col md:flex-wrap md:w-full"
          onSubmit={handleSubmit}
        >
          {error && <div className="text-red-500 font-bold">{error}</div>}
          {success && <div className="text-green-500 font-bold">{success}</div>}
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-medium mb-2">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              onChange={handleChange}
              value={formData.name}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              onChange={handleChange}
              value={formData.email}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm font-medium mb-2">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              onChange={handleChange}
              value={formData.password}
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="confirmPassword"
              className="text-sm font-medium mb-2"
            >
              Confirm Password
            </label>
            <input
              className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              onChange={handleChange}
              value={formData.confirmPassword}
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-20 py-2 bg-Dark text-white rounded-md hover:bg-Dark2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            SignUp
          </button>
        </form>
        <h1>Don't have an Account? Login</h1>
      </div>
    </div>
  );
};

export default SignUp;
