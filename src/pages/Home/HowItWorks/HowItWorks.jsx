import React from 'react';

// An array to hold the data for the 4 steps
// We're using icons from your src/assets/ folder
const stepsData = [
    {
        id: 1,
        icon: '/src/assets/bookingIcon.png',
        title: 'Book Your Parcel',
        description: 'Enter your pickup and delivery details to schedule a booking.',
    },
    {
        id: 2,
        icon: '/src/assets/bookingIcon.png',
        title: 'We Pick It Up',
        description: 'Our nearest delivery agent will come to your doorstep to pick up the parcel.',
    },
    {
        id: 3,
        icon: '/src/assets/bookingIcon.png',
        title: 'Track Your Order',
        description: 'Get real-time updates and track your parcel from our hub to its destination.',
    },
    {
        id: 4,
        icon: '/src/assets/bookingIcon.png',
        title: 'Parcel Delivered',
        description: 'We ensure your parcel is delivered to the recipient safely and on time.',
    },
];

const HowItWorks = () => {
    return (
        // Section with a white background
        <section className="py-16 w-full px-48 font-urbanist">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-left mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        How It Works
                    </h2>

                </div>

                {/* Responsive Grid for Steps (This already had the gap-8) */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {stepsData.map((step) => (
                        // --- THIS IS THE UPDATED PART ---
                        // We've added card styling: bg-white, shadow-lg, rounded-xl
                        // and a transition/hover effect
                        <div
                            key={step.id}
                            className="
                bg-white
                shadow-lg
                rounded-xl
                text-center 
                p-6 
                flex 
                flex-col 
                transition
                duration-300
                hover:shadow-xl
                hover:-translate-y-1
              "
                        >
                            {/* Step Icon */}
                            <div className="
                w-14 
                h-14 
                mb-6 
                flex 
                items-center
                text-left
                justify-center 
                bg-green-50 
                rounded-full
              ">
                                <img
                                    className="w-12 h-12"
                                    src={step.icon}
                                    alt={`${step.title} icon`}
                                />
                            </div>

                            {/* Step Title */}
                            <h3 className="text-lg text-left font-bold text-gray-800 mb-2">
                                {step.title}
                            </h3>

                            {/* Step Description */}
                            <p className="text-gray-600 text-left text-sm ">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;