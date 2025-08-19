import React from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import NotFound from './pages/NotFound'
import Blogs from './pages/Blogs'
import Details from './pages/Details'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path='/blog/:id' element={<Details />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}
export default App