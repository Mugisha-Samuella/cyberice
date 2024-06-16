import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Services from './Pages/Services'
import Resources from './Pages/Resources'
import Blog from './Pages/Blog'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import ThreatDashboard from './Pages/ThreatDashboard'
import ForgotPassword from './Pages/ForgotPassword'

const App = () => {
  return (
    <div >
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/resources' element={<Resources/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/threatdashboard' element={<ThreatDashboard/>}/>
        <Route path='/forgotpassword' element={<ForgotPassword/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    </div>
  )
}

export default App
