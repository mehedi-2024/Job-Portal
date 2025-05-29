import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Testimonials = () => {
    const testimonials = [
        {
            quote: "I found my dream job within a week of using this platform. The application process was so smooth!",
            name: "Sarah Johnson",
            role: "UX Designer at TechCorp",
            rating: 5
        },
        {
            quote: "As a recruiter, this portal has helped me find qualified candidates faster than any other platform.",
            name: "Michael Chen",
            role: "HR Manager at HealthPlus",
            rating: 5
        },
        {
            quote: "The job matching algorithm is incredibly accurate. I was contacted for positions that perfectly matched my skills.",
            name: "Priya Patel",
            role: "Data Scientist at Finova",
            rating: 4
        }
    ];

    return (
        <div className="py-16 bg-white rounded-lg mb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Success Stories
                    </h2>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                        What our users say about us
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-gray-50 p-8 rounded-lg relative">
                            <FaQuoteLeft className="absolute top-4 left-4 text-gray-200 text-3xl" />
                            <p className="relative text-gray-600 pl-8">{testimonial.quote}</p>
                            <div className="mt-4 flex">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar
                                        key={i}
                                        className={`${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'} text-sm`}
                                    />
                                ))}
                            </div>
                            <div className="mt-6 flex items-center">
                                <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900">{testimonial.name}</p>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials