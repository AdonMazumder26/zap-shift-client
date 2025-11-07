import React from 'react';

// An array containing all the brand information.
// We use the exact paths from your src/assets/brands/ folder.
const brandsData = [
    {
        id: 1,
        src: '/src/assets/brands/casio.png',
        alt: 'Amazon logo',
    },
    {
        id: 2,
        src: '/src/assets/brands/amazon.png',
        alt: 'Casio logo',
    },
    {
        id: 3,
        src: '/src/assets/brands/moonstar.png',
        alt: 'Randstad logo',
    },
    {
        id: 4,
        src: '/src/assets/brands/start.png',
        alt: 'Start People logo',
    },
    {
        id: 5,
        src: '/src/assets/brands/start-people 1.png',
        alt: 'Moonstar logo',
    },
    {
        id: 6,
        src: '/src/assets/brands/randstad.png',
        alt: 'Start logo',
    },
];

const Brands = () => {
    return (
        // We use bg-gray-50 to give a slight contrast from the white Services section
        <section className=" py-25">

            {/* Main container with max-width and responsive padding */}
            <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8  ">

                {/* Section Header - using text from your new image */}
                <div className="text-center mb-10">
                    <h2 className="text-sm font-urbanist lg:text-2xl font-extrabold sm:text-4xl">
                        We've helped thousands of sales teams
                    </h2>

                </div>

                {/* Responsive Grid for Logos */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 mb-25 gap-15">
                    {brandsData.map((brand) => (
                        <div
                            key={brand.id}
                            className="flex items-center justify-center"
                        >
                            <img
                                // This class ensures logos don't get too tall
                                className="max-h-15"
                                src={brand.src}
                                alt={brand.alt}
                            />
                        </div>
                    ))}
                </div>
                <div className='border-b-2 border-dashed  '>

                </div>
            </div>
        </section>
    );
};

export default Brands;