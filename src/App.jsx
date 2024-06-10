import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Services from './Pages/Services'
import Resources from './Pages/Resources'
import Blog from './Pages/Blog'
import SignUp from './Pages/SignUp'
import Dashboard from './Pages/Dashboard'

const App = () => {
  return (
    <div>
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/resources' element={<Resources/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    </div>
  )
}

export default App
