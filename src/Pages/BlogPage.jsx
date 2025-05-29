import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
    {
        id: 1,
        title: 'How to Write a Resume That Stands Out in 2024',
        excerpt: 'Learn the latest resume trends and strategies to make your application get noticed by recruiters.',
        date: 'May 15, 2024',
        readTime: '5 min read',
        category: 'Job Search',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        author: {
            name: 'Sarah Johnson',
            avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
        }
    },
    {
        id: 2,
        title: 'Top 10 Interview Questions and How to Answer Them',
        excerpt: 'Prepare for your next interview with these common questions and expert-approved responses.',
        date: 'April 28, 2024',
        readTime: '7 min read',
        category: 'Interview Tips',
        image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        author: {
            name: 'Michael Chen',
            avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
        }
    },
    {
        id: 3,
        title: 'Remote Work: How to Stay Productive and Engaged',
        excerpt: 'Tips and tools to maintain productivity and work-life balance when working from home.',
        date: 'April 10, 2024',
        readTime: '6 min read',
        category: 'Career Growth',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        author: {
            name: 'Priya Patel',
            avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
        }
    },
    {
        id: 4,
        title: 'The Ultimate Guide to Career Switching in Tech',
        excerpt: 'Step-by-step advice for transitioning into a tech career from any background.',
        date: 'March 22, 2024',
        readTime: '8 min read',
        category: 'Career Change',
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        author: {
            name: 'David Kim',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
        }
    },
    {
        id: 5,
        title: 'Salary Negotiation: Getting What You Deserve',
        excerpt: 'Proven strategies to negotiate your salary with confidence and professionalism.',
        date: 'March 5, 2024',
        readTime: '5 min read',
        category: 'Career Growth',
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        author: {
            name: 'Emma Wilson',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
        }
    },
    {
        id: 6,
        title: 'Building Your Personal Brand for Career Success',
        excerpt: 'How to create and maintain a professional online presence that attracts opportunities.',
        date: 'February 18, 2024',
        readTime: '6 min read',
        category: 'Career Growth',
        image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        author: {
            name: 'James Rodriguez',
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
        }
    }
];

const categories = [
    { name: 'All', count: 15 },
    { name: 'Job Search', count: 6 },
    { name: 'Interview Tips', count: 4 },
    { name: 'Career Growth', count: 8 },
    { name: 'Career Change', count: 3 }
];

const BlogPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h2 className="text-[48px] font-bold text-gray-900 ">
                        Career Insights & Advice
                    </h2>
                    <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
                        Expert tips to help you navigate your career journey and land your dream job.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Main Content */}
                    <div className="lg:w-2/3">
                        {/* Featured Post */}
                        <div className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Post</h2>
                            <div className="bg-white shadow rounded-lg overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                                    alt="Featured post"
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-8">
                                    <div className="flex items-center mb-4">
                                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                            Featured
                                        </span>
                                        <span className="text-gray-500 text-sm ml-4">June 2, 2024</span>
                                        <span className="text-gray-500 text-sm ml-4">• 10 min read</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                        The Future of Work: Trends to Watch in 2024
                                    </h3>
                                    <p className="text-gray-600 mb-6">
                                        Discover the emerging workplace trends that will shape careers and hiring practices in the coming year.
                                    </p>
                                    <div className="flex items-center">
                                        <img
                                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                                            alt="Author"
                                            className="w-10 h-10 rounded-full"
                                        />
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-gray-900">Jessica Smith</p>
                                            <p className="text-sm text-gray-500">Career Strategist</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Recent Posts */}
                        <div className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">Recent Articles</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {blogPosts.map((post) => (
                                    <div key={post.id} className="bg-white shadow rounded-lg overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-48 object-cover"
                                        />
                                        <div className="p-6">
                                            <div className="flex items-center mb-3">
                                                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                                    {post.category}
                                                </span>
                                                <span className="text-gray-500 text-xs ml-2">{post.readTime}</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                                <Link to={`/blog/${post.id}`} className="hover:text-blue-600">
                                                    {post.title}
                                                </Link>
                                            </h3>
                                            <p className="text-gray-600 mb-4">{post.excerpt}</p>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <img
                                                        src={post.author.avatar}
                                                        alt={post.author.name}
                                                        className="w-8 h-8 rounded-full"
                                                    />
                                                    <span className="text-sm text-gray-900 ml-2">{post.author.name}</span>
                                                </div>
                                                <span className="text-sm text-gray-500">{post.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Pagination */}
                        <div className="flex justify-center">
                            <nav className="flex items-center space-x-2">
                                <button className="px-3 py-1 rounded-md bg-blue-600 text-white">
                                    1
                                </button>
                                <button className="px-3 py-1 rounded-md hover:bg-gray-100">
                                    2
                                </button>
                                <button className="px-3 py-1 rounded-md hover:bg-gray-100">
                                    3
                                </button>
                                <button className="px-3 py-1 rounded-md hover:bg-gray-100">
                                    Next →
                                </button>
                            </nav>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:w-1/3">
                        {/* Search */}
                        <div className="bg-white shadow rounded-lg p-6 mb-8">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Search Articles</h3>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search blog..."
                                    className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Categories */}
                        <div className="bg-white shadow rounded-lg p-6 mb-8">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Categories</h3>
                            <ul className="space-y-2">
                                {categories.map((category, index) => (
                                    <li key={index}>
                                        <Link
                                            to="#"
                                            className="flex items-center justify-between text-gray-600 hover:text-blue-600"
                                        >
                                            <span>{category.name}</span>
                                            <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-0.5 rounded-full">
                                                {category.count}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Popular Tags */}
                        <div className="bg-white shadow rounded-lg p-6 mb-8">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Popular Tags</h3>
                            <div className="flex flex-wrap gap-2">
                                {['Resume', 'Interview', 'Remote Work', 'Salary', 'Networking', 'LinkedIn', 'Skills', 'Promotion'].map((tag, index) => (
                                    <Link
                                        key={index}
                                        to="#"
                                        className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full hover:bg-blue-100 hover:text-blue-800"
                                    >
                                        {tag}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div className="bg-blue-50 rounded-lg p-6">
                            <h3 className="text-lg font-medium text-gray-900 mb-2">Career Newsletter</h3>
                            <p className="text-gray-600 mb-4">
                                Get the latest career tips and job market insights delivered to your inbox.
                            </p>
                            <form className="space-y-3">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;