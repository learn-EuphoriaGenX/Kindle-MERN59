import React from 'react';
import { useParams } from 'react-router'; // Make sure it's react-router-dom
import blogs from '../data/blog';

function Details() {
  const { id } = useParams();
  const details = blogs[id];

  if (!details) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        Blog not found
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header Image */}
      <img
        src={details.image}
        alt={details.title}
        className="w-full h-64 object-cover rounded-xl shadow"
      />

      {/* Blog Info */}
      <div className="mt-6 space-y-3">
        <h1 className="text-3xl font-bold text-gray-800">{details.title}</h1>
        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
          <span>🖊️ {details.author}</span>
          <span>📁 {details.category}</span>
          <span>📅 {details.date}</span>
          <span>⏱ {details.reading_time}</span>
          <span>👁️ {details.views} views</span>
          <span>👍 {details.likes} likes</span>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-lg mt-4">{details.description}</p>

        {/* Tags */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Tags</h2>
          <div className="flex flex-wrap gap-2">
            {details.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Comments */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Comments</h2>
          {details.comments.length === 0 ? (
            <p className="text-gray-500">No comments yet.</p>
          ) : (
            details.comments.map((comment, index) => (
              <div
                key={index}
                className="border-t pt-4 mt-4 space-y-1 text-gray-700"
              >
                <p className="text-sm text-gray-500">{comment.date}</p>
                <p className="font-semibold">{comment.user}</p>
                <p>{comment.message}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Details;
