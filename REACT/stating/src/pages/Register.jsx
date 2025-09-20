import React, { useState } from 'react'
import loginImage from '../assets/images/login.jpg'
import { Link } from 'react-router'
import axios from 'axios'
import { toast } from 'react-toastify'
function Register() {

    let [data, setData] = useState({
        name: "",
        email: "",
        mobile: "",
        password: "",
        dob: ""
    })

    let handleSubmitRequest = async () => {
        if (!data.name || !data.email || !data.mobile || !data.password || !data.dob) {
            return toast.error("All Fields Are Required!")
        } else {
            try {

                let response = await axios.post("https://kindle-backend-37ax.onrender.com/user/register", data)
                if (response.data.success) {
                    toast.success("User Registration Successfull")
                    window.href = "/login"
                }
            } catch (error) {
                console.log(error);
                return toast.error("Unknown Error Occured!")
            }

        }
    }



    return (
        <div className="bg-gray-100 flex flex-row-reverse justify-center items-center h-screen">
            <div className="w-1/2 h-screen hidden lg:block">
                <img src={loginImage} alt="Placeholder Image" className="object-cover w-full h-full" />
            </div>

            <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
                <h1 className="text-2xl font-semibold mb-4">Register</h1>
                <div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600">Email</label>
                        <input type="email" onChange={(e) => setData({ ...data, email: e.target.value })} id="email" name="email" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-600">Username</label>
                        <input type="text" id="username" onChange={(e) => setData({ ...data, name: e.target.value })} name="name" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-600">Password</label>
                        <input type="password" id="password" onChange={(e) => setData({ ...data, password: e.target.value })} name="password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="mobile" className="block text-gray-600">Mobile</label>
                        <input type="text" id="mobile" onChange={(e) => setData({ ...data, mobile: e.target.value })} name="mobile" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="dob" className="block text-gray-600">Date Of Birth</label>
                        <input type="date" id="dob" onChange={(e) => setData({ ...data, dob: e.target.value })} name="dob" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
                    </div>

                    <button onClick={handleSubmitRequest} type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Register</button>
                </div>

                <div className="mt-6 text-blue-500 text-center">
                    <Link to="/login" className="hover:underline">Sign in Here</Link>
                </div>
            </div>
        </div>
    )
}

export default Register