import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h2 className="text-[40px] font-bold text-gray-900 ">
                        About Our Job Portal
                    </h2>
                    <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
                        Connecting talented professionals with top employers worldwide.
                    </p>
                </div>

                {/* Mission Section */}
                <div className="bg-white shadow rounded-lg p-8 mb-16">
                    <div className="md:flex">
                        <div className="md:flex-shrink-0">
                            <div className="flex items-center justify-center h-48 w-48 rounded-full bg-blue-100 mx-auto">
                                <svg
                                    className="h-24 w-24 text-blue-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="mt-8 md:mt-0 md:ml-8">
                            <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
                            <p className="mt-4 text-lg text-gray-600">
                                To revolutionize the job search process by creating a seamless,
                                efficient, and transparent platform that benefits both job seekers
                                and employers. We believe in empowering individuals to find
                                meaningful work and helping companies discover exceptional talent.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="mb-16">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="bg-white shadow rounded-lg p-6 text-center">
                            <div className="text-5xl font-bold text-blue-600">50,000+</div>
                            <div className="mt-2 text-lg font-medium text-gray-900">
                                Active Jobs
                            </div>
                            <p className="mt-1 text-gray-500">
                                From top companies worldwide
                            </p>
                        </div>
                        <div className="bg-white shadow rounded-lg p-6 text-center">
                            <div className="text-5xl font-bold text-blue-600">2M+</div>
                            <div className="mt-2 text-lg font-medium text-gray-900">
                                Candidates
                            </div>
                            <p className="mt-1 text-gray-500">
                                Building their careers with us
                            </p>
                        </div>
                        <div className="bg-white shadow rounded-lg p-6 text-center">
                            <div className="text-5xl font-bold text-blue-600">10,000+</div>
                            <div className="mt-2 text-lg font-medium text-gray-900">
                                Companies
                            </div>
                            <p className="mt-1 text-gray-500">
                                Trusting our platform
                            </p>
                        </div>
                        <div className="bg-white shadow rounded-lg p-6 text-center">
                            <div className="text-5xl font-bold text-blue-600">95%</div>
                            <div className="mt-2 text-lg font-medium text-gray-900">
                                Success Rate
                            </div>
                            <p className="mt-1 text-gray-500">
                                Of candidates finding jobs
                            </p>
                        </div>
                    </div>
                </div>

                {/* Team Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        Meet Our Leadership Team
                    </h2>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                name: "Sarah Johnson",
                                role: "CEO & Founder",
                                bio: "With 15 years in HR tech, Sarah founded our portal to bridge the gap between talent and opportunity.",
                                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                            },
                            {
                                name: "Michael Chen",
                                role: "CTO",
                                bio: "Technology innovator focused on creating the best candidate experience through AI and machine learning.",
                                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                            },
                            {
                                name: "Priya Patel",
                                role: "Head of Partnerships",
                                bio: "Builds relationships with top employers to bring the best opportunities to our platform.",
                                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                            }
                        ].map((person, index) => (
                            <div key={index} className="bg-white shadow rounded-lg overflow-hidden">
                                <img className="w-full h-56 object-cover" src={person.image} alt={person.name} />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900">{person.name}</h3>
                                    <p className="text-blue-600 mt-1">{person.role}</p>
                                    <p className="mt-4 text-gray-600">{person.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Values Section */}
                <div className="bg-white shadow rounded-lg p-8 mb-16">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        Our Core Values
                    </h2>
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
                        {[
                            {
                                title: "Transparency",
                                description: "We believe in open communication and clear processes for both job seekers and employers.",
                                icon: (
                                    <svg className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                )
                            },
                            {
                                title: "Innovation",
                                description: "We continuously improve our platform with cutting-edge technology to enhance your experience.",
                                icon: (
                                    <svg className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                )
                            },
                            {
                                title: "Empathy",
                                description: "We understand the challenges of job searching and hiring, and design our services accordingly.",
                                icon: (
                                    <svg className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                )
                            }
                        ].map((value, index) => (
                            <div key={index} className="text-center">
                                <div className="flex justify-center">
                                    {value.icon}
                                </div>
                                <h3 className="mt-4 text-xl font-bold text-gray-900">{value.title}</h3>
                                <p className="mt-2 text-gray-600">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-blue-700 rounded-lg shadow-xl overflow-hidden">
                    <div className="px-6 py-16 sm:p-16">
                        <div className="md:flex md:items-center md:justify-between">
                            <div className="md:w-2/3">
                                <h2 className="text-3xl font-extrabold text-white sm:text-">
                                    Ready to find your dream job?
                                </h2>
                                <p className="mt-3 max-w-3xl text-lg leading-6 text-blue-200">
                                    Join thousands of professionals who've accelerated their careers through our platform.
                                </p>
                            </div>
                            <div className="mt-8 flex md:mt-0 md:flex-shrink-0">
                                <div className="inline-flex rounded-md shadow">
                                    <Link to={'/allJobs'}
                                        className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
                                    >
                                        Get Started
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;