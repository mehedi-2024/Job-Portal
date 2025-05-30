import React from 'react';

const ContactUs = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h2 className="text-[48px] font-bold text-gray-900 ">
                        Contact Us
                    </h2>
                    <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
                        We'd love to hear from you! Reach out for questions, feedback, or support.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
                    {/* Contact Form */}
                    <div className="bg-white shadow rounded-lg p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Full Name
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                                    Subject
                                </label>
                                <div className="mt-1">
                                    <select
                                        id="subject"
                                        name="subject"
                                        className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                                    >
                                        <option>General Inquiry</option>
                                        <option>Job Seeker Support</option>
                                        <option>Employer Support</option>
                                        <option>Technical Issue</option>
                                        <option>Feedback</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                    Message
                                </label>
                                <div className="mt-1">
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        required
                                        className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        {/* Contact Cards */}
                        <div className="bg-white shadow rounded-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>

                            <div className="space-y-6">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div className="ml-3">
                                        <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                                        <p className="mt-1 text-gray-600">+1 (555) 123-4567</p>
                                        <p className="mt-1 text-gray-600">Mon-Fri from 9am to 5pm</p>
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div className="ml-3">
                                        <h3 className="text-lg font-medium text-gray-900">Email</h3>
                                        <p className="mt-1 text-gray-600">support@jobportal.com</p>
                                        <p className="mt-1 text-gray-600">We'll respond within 24 hours</p>
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div className="ml-3">
                                        <h3 className="text-lg font-medium text-gray-900">Office</h3>
                                        <p className="mt-1 text-gray-600">1234 Job Street</p>
                                        <p className="mt-1 text-gray-600">San Francisco, CA 94107</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* FAQ Section */}
                        <div className="bg-white shadow rounded-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>

                            <div className="space-y-6">
                                {[
                                    {
                                        question: "How do I create an account?",
                                        answer: "Click on the 'Sign Up' button at the top right corner and follow the instructions to create your profile."
                                    },
                                    {
                                        question: "Is there a fee for job seekers?",
                                        answer: "No, our platform is completely free for job seekers to use."
                                    },
                                    {
                                        question: "How can employers post jobs?",
                                        answer: "Employers need to create a company account, then they can post unlimited job listings."
                                    }
                                ].map((faq, index) => (
                                    <div key={index}>
                                        <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                                        <p className="mt-1 text-gray-600">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8">
                                <a href="#" className="text-blue-600 font-medium hover:text-blue-500">
                                    View all FAQs →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;