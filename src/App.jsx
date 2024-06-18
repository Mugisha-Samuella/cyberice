// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Resources from './Pages/Resources';
import Blog from './Pages/Blog';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import ThreatDashboard from './Pages/ThreatDashboard';
import ForgotPassword from './Pages/ForgotPassword';
import Loading from './Components/Loading/Loading';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [serverRunning, setServerRunning] = useState(false);

  useEffect(() => {
    const checkServer = async () => {
      try {
        await axios.get('http://127.0.0.1:3001/status'); // Check if the server is running
        setServerRunning(true);
      } catch (error) {
        setServerRunning(false);
      } finally {
        setLoading(false);
      }
    };

    checkServer();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (!serverRunning) {
    return <div>Server is not running. Please try again later.</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/threatdashboard' element={<ThreatDashboard />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
