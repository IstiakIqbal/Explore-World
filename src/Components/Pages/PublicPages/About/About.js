import React from 'react';
import Banner from '../../../Shared/Banner/Banner';
import imgUrl from '../../../../images/about.jpg';
import Navbar from '../../../Shared/Navbar/Navbar';
import FooterSection from '../Home/FooterSection/FooterSection';
import Search from '../../../Shared/Search/Search';

const About = () => {
    return (
        <div className='bg-black text-white'>
            <Navbar></Navbar>
            <Banner url={imgUrl} alt={'Banner of about routes'}></Banner>
            {/* <div className='absolute top-56 w-full'><Search></Search></div> */}
            <div className='absolute top-[15rem] w-full mt-24 md:mt-0 px-2 md:px-0'>
                <div className='max-w-6xl mx-auto'>
                    <p className='font-semibold italic  text-3xl'>The website focuses on travel and tourism, helping travelers obtain accurate information about their
                        destination. Previously, people struggled to gather information about the visited country or city, leading
                        to various problems and scams. With the help of this website, travelers can easily book hotels based on
                        their preferred budget and location, making their work easier. Websites like Gozayaan, TripAdvisor,
                        TravelMate, obokash.com, and deshghuri offer similar services.
                        The website aims to protect travelers from harassment, fraud, and issues, allowing them to book hotels
                        based on their desired budget and location. This helps them avoid challenges such as deciding where to
                        go, missing out on attractive sites, or being duped while booking lodgings. By booking hotels based on
                        their chosen budget and location, travelers can easily learn about the area or city, making it easier for
                        them to choose their destination.</p>
                    {/* <h1 className='text-2xl md:text-3xl font-medium text-[#ff7f00]'>Most Popular</h1>
                    <h1 className='text-3xl md:text-5xl font-semibold mt-3'>Holiday Destinations</h1> */}
                    {/* <div className="card-container mt-10 md:grid grid-cols-2 gap-x-7 gap-y-10">
                        {
                            value.data.map((data, idx) => <Destination key={idx} data={data}></Destination>)
                        }
                    </div> */}
                </div>
                <FooterSection></FooterSection>
            </div>
        </div>
    );
};

export default About;