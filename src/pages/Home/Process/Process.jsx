import React from 'react';

// Simplified data array
const processSteps = [
    {
        id: 1,
        title: 'Live Parcel Tracking',
        description: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
        image: '/src/assets/Transit warehouse.png',
        alt: 'Easy booking icon',
    },
    {
        id: 2,
        title: 'Fast & Secure Pickup',
        description: 'We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.',
        image: '/src/assets/Group 4.png',
        alt: 'Delivery man icon',
    },
    {
        id: 3,
        title: 'Live Order Tracking',
        description: 'Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.',

        image: '/src/assets/safe-delivery.png',
        alt: 'Live tracking icon',
    },
];

const Process = () => {
    return (
        <section className="pb-20">
            {/* Main container with max-width and responsive padding */}
            <div className="max-w-7xl mx-auto px-4 border-b-2 border-dashed pb-20  ">



                {/* Container for the steps, with vertical spacing */}
                <div className="flex flex-col gap-6 ">
                    {processSteps.map((step) => (
                        <div
                            key={step.id}
                            // Responsive grid: 1 column on mobile, 2 on desktop
                            className="flex gap-6 items-center bg-white rounded-3xl p-8 "
                        >
                            {/* Image Content (Always on the left) */}
                            <div
                                className="
                  flex 
                  justify-center 
                  items-center 
                  rounded-xl 
                h-50 w-50
                "
                            >
                                <img
                                    className="h-full w-full object-contain"
                                    src={step.image}
                                    alt={step.alt}
                                />
                            </div>

                            <div className='border-l-2 border-dashed border-black h-40 '>

                            </div>

                            {/* Text Content (Always on the right) */}
                            {/* 1. Added margin-top for mobile, reset on desktop (md:mt-0) */}
                            <div className="flex flex-col justify-center ml-12 text-left flex-1 ">




                                <h3 className="text-2xl font-extrabold text-gray-800">
                                    {step.title}
                                </h3>

                                <p className="text-gray-600 mt-4 text-base">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;