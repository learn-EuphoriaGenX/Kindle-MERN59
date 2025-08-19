import React from 'react'
import loginImage from '../assets/images/login.jpg'
import { Link } from 'react-router'
function Register() {
    return (
        <div className="bg-gray-100 flex flex-row-reverse justify-center items-center h-screen">
            <div className="w-1/2 h-screen hidden lg:block">
                <img src={loginImage} alt="Placeholder Image" className="object-cover w-full h-full" />
            </div>

            <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
                <h1 className="text-2xl font-semibold mb-4">Register</h1>
                <form action="#" method="POST">

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600">Email</label>
                        <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-600">Username</label>
                        <input type="text" id="username" name="username" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-600">Password</label>
                        <input type="password" id="password" name="password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
                    </div>

                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Register</button>
                </form>

                <div className="mt-6 text-blue-500 text-center">
                    <Link to="/login" className="hover:underline">Sign in Here</Link>
                </div>
            </div>
        </div>
    )
}

export default Register