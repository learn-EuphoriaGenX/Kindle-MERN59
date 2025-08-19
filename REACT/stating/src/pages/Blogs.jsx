import React from 'react';
import blogs from '../data/blog';
import { Link } from 'react-router'; // Corrected import from 'react-router-dom'

function Blogs() {
    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8">
            <h1 className="text-3xl font-bold mb-6 text-center">Latest Blogs</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow hover:shadow-xl transition-all duration-300 overflow-hidden"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            loading="lazy"
                            className="w-full h-48 object-cover"
                        />

                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                            <p className="text-gray-600 text-sm mb-3">{item.description.substring(0, 100)}...</p>
                            <p className="text-sm text-gray-400 mb-2">Published on: {item.date}</p>

                            <Link
                                to={`/blog/${index}`}
                                className="inline-block mt-2 text-blue-600 hover:underline font-medium"
                            >
                                Read More →
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blogs;
