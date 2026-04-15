import React from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Register from './components/Register'
export default function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element/>
          <Route path='/register' element={<Register />} />
        </Routes>
    </BrowserRouter>
  )
}
