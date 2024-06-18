import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/login", {
        email,
        password,
      });
      if (response.data === "Success") {
        alert("Login successful!");
        navigate("/threatdashboard");
      } else {
        alert(response.data);
      }
    } catch (err) {
      console.log(err);
    }

    // axios
    //   .post("http://localhost:3001/login", { email, password })
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
  };

  return (
    <div className="flex flex-col md:flex-row justify-center text-left items-center min-h-screen">
      <div className="bg-Dark min-h-screen md:w-1/2 hidden md:flex justify-center items-center">
        <h1 className="text-white text-5xl">Welcome Back</h1>
      </div>
      <div className="w-screen p-20 flex justify-center items-center md:w-1/2">
        <div className="w-full max-w-md">
          <h1 className="text-5xl text-center pb-10 font-bold">CyberIce</h1>
          <h2 className="text-3xl text-center pb-6 text-primary">Login</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-medium mb-2">
                Email Id
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter Email"
                className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                required
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
                placeholder="Enter Password"
                className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                onChange={(event) => setPassword(event.target.value)}
                value={password}
                required
              />
            </div>
            <div className="pt-1">
              <Link
                to="/forgotpassword"
                className="text-indigo-500 hover:text-indigo-700"
              >
                Forgot Password?
              </Link>
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-[12.4rem] py-2 bg-Dark text-white rounded-md hover:bg-Dark2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </form>
          <div className="text-center mt-6">
            <p className="text-sm">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-indigo-500 hover:text-indigo-700"
              >
                SignUp
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
