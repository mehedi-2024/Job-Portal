import { FaLaptopCode, FaHospital, FaMoneyBillWave, FaGraduationCap, FaBullhorn, FaPalette, FaCogs,FaArrowRight, FaGlobe } from 'react-icons/fa';

const JobCategories = () => {
    const categories = [
        { name: 'Technology', icon: <FaLaptopCode className="text-blue-600" />, jobs: 1243 },
        { name: 'Healthcare', icon: <FaHospital className="text-green-600" />, jobs: 892 },
        { name: 'Finance', icon: <FaMoneyBillWave className="text-yellow-600" />, jobs: 756 },
        { name: 'Education', icon: <FaGraduationCap className="text-purple-600" />, jobs: 543 },
        { name: 'Marketing', icon: <FaBullhorn className="text-red-600" />, jobs: 678 },
        { name: 'Design', icon: <FaPalette className="text-pink-600" />, jobs: 432 },
        { name: 'Engineering', icon: <FaCogs className="text-indigo-600" />, jobs: 987 },
        { name: 'Remote', icon: <FaGlobe className="text-teal-600" />, jobs: 1567 },
    ];

    return (
        <div className="py-16 bg-white rounded-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Browse by Category
                    </h2>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                        Find jobs in your preferred field
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-lg p-6 text-center hover:bg-blue-50 transition-colors cursor-pointer group"
                        >
                            <div className="flex justify-center text-4xl mb-3 group-hover:scale-110 transition-transform">
                                {category.icon}
                            </div>
                            <h3 className="text-lg font-medium text-gray-900">{category.name}</h3>
                            <p className="mt-1 text-sm text-gray-500">{category.jobs} jobs available</p>
                        </div>
                    ))}
                </div>

                <div className="mt-10 text-center">
                    <button className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 flex items-center mx-auto">
                        View All Categories
                        <FaArrowRight className="ml-2" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JobCategories