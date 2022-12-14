import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from '../component/Main'
import Navbar from '../component/Navbar'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Team from '../pages/Team'

const AppRouter = () => {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/team" element={<Team/>} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default AppRouter