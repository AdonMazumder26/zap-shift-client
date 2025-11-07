import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import HowItWorks from '../HowItWorks/HowItWorks';
import Brands from '../Brands/Brands';
import Process from '../Process/Process';


const Home = () => {
    return (
        <div >
            <section className='max-w-[94%] mx-auto'>
                <Banner></Banner>
            </section>
            <section className='max-w-full'>
                <HowItWorks></HowItWorks>
            </section>
            <section className='max-w-[94%] mx-auto'>
                <Services></Services>
            </section>
            <section>
                <Brands></Brands>
            </section>
            <section>
                <Process></Process>
            </section>
        </div>
    );
};

export default Home;