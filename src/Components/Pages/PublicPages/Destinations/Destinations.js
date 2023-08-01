import './Destinations.css';
import Banner from '../../../Shared/Banner/Banner';
import imgUrl from '../../../../images//destinations.jpg';
import Navbar from '../../../Shared/Navbar/Navbar';
import Search from '../../../Shared/Search/Search';
import { useContext } from 'react';
import { destinationContext } from '../../../../App';
import Destination from './Destination/Destination';
import FooterSection from '../Home/FooterSection/FooterSection';

const Destinations = () => {

    const value = useContext(destinationContext);

    return (
        <div className='relative destination'>
            <Navbar></Navbar>
            <Banner url={imgUrl} alt={'Banner of Destination routes'}></Banner>
            <div className='absolute top-56 w-full'><Search></Search></div>
            <div className='absolute top-[30rem] w-full mt-24 md:mt-0 px-2 md:px-0'>
                <div className='max-w-6xl mx-auto'>
                    <h1 className='text-2xl md:text-3xl font-medium text-[#ff7f00]'>Most Popular</h1>
                    <h1 className='text-3xl md:text-5xl font-semibold mt-3'>Holiday Destinations</h1>
                    <div className="card-container mt-10 md:grid grid-cols-2 gap-x-7 gap-y-10">
                        {
                            value.data.map((data, idx) => <Destination key={idx} data={data}></Destination>)
                        }
                    </div>
                </div>
                <FooterSection></FooterSection>
            </div>
        </div>
    )
};

export default Destinations;