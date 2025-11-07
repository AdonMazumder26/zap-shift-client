import React from 'react';
// Import the JSON data
import servicesData from '../../../assets/data/services.json';
import serviceLogo from '../../../assets/service.png'


const Services = () => {
    return (
        <section className="p-20 bg-[#03373D] rounded-3xl">
            {/* Main container with max-width and responsive padding */}
            <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-12 ">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        Our Services
                    </h2>
                    <p className="mt-4 text-base text-white font-urbanist font-medium max-w-3xl mx-auto">
                        Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
                    </p>
                </div>

                {/* Responsive Grid for Cards */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
                    {/* Loop through the servicesData and create a card for each item */}
                    {servicesData.map((service) => (
                        <div
                            key={service.id}
                            className={`
                bg-white 
                shadow-lg 
                rounded-xl 
                px-6
                py-8 
                text-center 
                flex 
                flex-col 
                gap-4
                items-center
                transition 
                duration-300 
                ease-in-out
                hover:bg-[#CAEB66]
              `}
                        >
                            {/* Icon */}
                            <div className='h-22 w-22 flex items-center justify-center rounded-full bg-linear-to-b from-gray-200 to-transparent hover:bg-linear-to-b '>
                                <img
                                    className="w-10 h-10"
                                    src={serviceLogo}
                                    alt={`${service.title} icon`}
                                />
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold font-urbanist text-gray-800 mb-2">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 text-sm font-medium">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;