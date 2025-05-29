import { FaBuilding } from 'react-icons/fa';

const FeaturedCompanies = () => {
    const companies = [
        { name: 'TechCorp', jobs: 42 },
        { name: 'HealthPlus', jobs: 28 },
        { name: 'Finova', jobs: 35 },
        { name: 'EduSystems', jobs: 19 },
        { name: 'DesignHub', jobs: 15 },
    ];

    return (
        <div className="py-16 bg-white my-20 rounded-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Featured Companies
                    </h2>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                        Work with the best in the industry
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
                    {companies.map((company, index) => (
                        <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
                            <div className="flex justify-center text-5xl mb-4 text-blue-500">
                                <FaBuilding />
                            </div>
                            <h3 className="text-lg font-medium text-gray-900">{company.name}</h3>
                            <p className="mt-1 text-sm text-gray-500">{company.jobs} open positions</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export  default FeaturedCompanies