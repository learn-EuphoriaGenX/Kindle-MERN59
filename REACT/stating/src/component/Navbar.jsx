import React from 'react'
import { Link } from 'react-router'

function Navbar() {
    return (
        <nav className='bg-blue-300 flex items-center justify-between py-5 px-32'>
            <span className='text-white text-2xl font-bold tracking-wider'>LOGO</span>
            <div className='flex items-center gap-7'>
                <Link className='text-white text-xl font-bold hover:text-blue-500 transition-all' to="/">Home</Link>
                <Link className='text-white text-xl font-bold hover:text-blue-500 transition-all' to="/login">Login</Link>
                <Link className='text-white text-xl font-bold hover:text-blue-500 transition-all' to="/register">Register</Link>
                <Link className='text-white text-xl font-bold hover:text-blue-500 transition-all' to="/blogs">Blogs</Link>
            </div>
        </nav>
    )
}

export default Navbar