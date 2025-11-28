import React from 'react';
import bg2 from '../assets/image 2.png';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const BlogPage = () => (
  <div
    className="py-8 min-h-screen"
    style={{
      backgroundImage: `url(${bg2})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-12">Plant Care Blog</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="text-6xl mb-4 text-center">{post.image}</div>
              <h3 className="font-semibold text-lg mb-3">{post.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                <span>By {post.author}</span>
                <span>{post.date}</span>
              </div>
              <button className="text-green-600 hover:text-green-700 font-semibold flex items-center">
                Read More <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default BlogPage;