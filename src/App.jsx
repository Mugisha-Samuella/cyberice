import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Resources from './Pages/Resources';
import Blog from './Pages/Blog';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import ThreatDashboard from './Pages/ThreatDashboard';
import ForgotPassword from './Pages/ForgotPassword';
import Loading from './Pages/Loading';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if the backend is running
    fetch('http://localhost:3001/health')
      .then((response) => {
        if (response.ok) {
          setIsLoading(false);
        } else {
          throw new Error('Server not running');
        }
      })
      .catch((error) => {
        console.error(error);
        // Optionally set a state to show an error message or retry
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/threatdashboard" element={<ThreatDashboard />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/loading" element={<Loading />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
